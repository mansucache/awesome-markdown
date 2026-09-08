import {readFileSync,mkdirSync,writeFileSync} from 'node:fs';
import {fileURLToPath,pathToFileURL} from 'node:url';

export function requestTarget(source){
  const u=new URL(source);
  const parts=u.pathname.split('/').filter(Boolean);
  const api=u.hostname==='github.com'&&parts.length===2;
  return {url:api?`https://api.github.com/repos/${parts.join('/')}`:source,api};
}

export async function checkUrl(source,{fetchFn=fetch,delay=500,token='',timeout=12000}={}){
  const target=requestTarget(source),attempts=[];
  for(let i=0;i<3;i++){
    try{
      const headers={'User-Agent':'awesome-markdown-link-check'};
      if(target.api&&token)headers.Authorization=`Bearer ${token}`;
      const request=method=>fetchFn(target.url,{method,headers,signal:AbortSignal.timeout(timeout),redirect:'follow'});
      let result=await request(target.api?'GET':'HEAD');
      if(!target.api&&[403,405,501].includes(result.status)){
        await result.body?.cancel();result=await request('GET');
      }
      await result.body?.cancel();
      attempts.push(result.status);
      if(result.status>=200&&result.status<300)return {url:source,state:'ok',status:result.status,finalUrl:result.url,attempts};
    }catch(error){attempts.push(error.name||'Error');}
    if(i<2&&delay)await new Promise(resolve=>setTimeout(resolve,delay*(i+1)));
  }
  return {url:source,state:attempts.every(s=>s===404||s===410)?'unavailable':'review',attempts};
}

async function main(){
  const root=fileURLToPath(new URL('../',import.meta.url));
  const data=JSON.parse(readFileSync(root+'data/catalog.json','utf8'));
  const urls=[...new Set(data.entries.filter(e=>e.status==='active').flatMap(e=>[e.url,...e.links.map(l=>l.url),...e.review.sources]))];
  const results=new Array(urls.length);let next=0,done=0;
  await Promise.all(Array.from({length:6},async()=>{
    while(next<urls.length){const i=next++;results[i]=await checkUrl(urls[i],{token:process.env.GITHUB_TOKEN||''});done++;if(done%25===0)console.log(`Checked ${done}/${urls.length}`);}
  }));
  const attention=results.filter(r=>r.state!=='ok');
  const report={checkedAt:new Date().toISOString(),total:results.length,ok:results.length-attention.length,results};
  mkdirSync(root+'reports',{recursive:true});
  writeFileSync(root+'reports/link-check.json',JSON.stringify(report,null,2)+'\n');
  const lines=['# Link report','',`${report.checkedAt}: ${report.ok}/${report.total} reachable. ${attention.length} need review.`,'',
    'A network failure or access block is not proof a project is discontinued. Repeated 404/410 responses require review before any catalog change. Redirects are recorded in the JSON report; reachability does not establish content relevance.','',
    '| URL | Result | Attempts |','| --- | --- | --- |',...attention.map(r=>`| ${r.url.replaceAll('|','%7C')} | ${r.state} | ${r.attempts.join(', ')} |`),''];
  writeFileSync(root+'reports/link-check.md',lines.join('\n'));
  console.log(`${report.ok}/${report.total} reachable; report: reports/link-check.md`);
  if(attention.length)process.exitCode=1;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)await main();
