import MarkdownIt from 'markdown-it';
import path from 'node:path';

export const tagLabels={
  'open-source':['Open source','开源'], 'free-tier':['Free option','提供免费方案'],
  macos:['macOS','macOS'],windows:['Windows','Windows'],linux:['Linux','Linux'],
  ios:['iOS','iOS'],android:['Android','Android'],web:['Web','Web'],
  'cross-platform':['Cross-platform','跨平台'],obsidian:['Obsidian plugin','Obsidian 插件'],
  vscode:['VS Code extension','VS Code 扩展'],typora:['Typora extension','Typora 扩展'],
  cli:['CLI','CLI'],docs:['Documentation','文档 / 教程'],spec:['Specification','语法规范'],
  api:['API','API'],nodejs:['Node.js','Node.js'],javascript:['JavaScript','JavaScript'],
  react:['React','React'],vue:['Vue','Vue'],svelte:['Svelte','Svelte'],python:['Python','Python'],
  go:['Go','Go'],r:['R','R'],pwa:['PWA','PWA'],wsl:['Windows via WSL','Windows / WSL'],
  'windows-unix':['Windows via Unix environment','Windows / Unix 环境']
};
export function validateCatalog(data){
  const errors=[];
  const issue=(s)=>errors.push(s);
  if(data.version!==1)issue('Unsupported catalog version');
  if(!Array.isArray(data.categories)||!Array.isArray(data.entries))return ['Missing categories or entries'];
  const cats=new Map(),ids=new Map(),urls=new Set();
  const bilingual=(v,label)=>{for(const l of ['en','zh'])if(typeof v?.[l]!=='string'||!v[l].trim())issue(`${label}.${l} is required`);};
  const url=(v,label)=>{try{const u=new URL(v);if(!['http:','https:'].includes(u.protocol))throw Error();}catch{issue(`Invalid URL ${label}`);}};
  for(const c of data.categories){
    if(cats.has(c.id))issue(`Duplicate category id ${c.id}`);
    if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(c.id))issue(`Invalid category id ${c.id}`);
    cats.set(c.id,c);bilingual(c.name,`${c.id}.name`);
    if(![2,3].includes(c.level))issue(`Invalid level ${c.id}`);
  }
  for(const c of data.categories)if(c.parent&&(!cats.has(c.parent)||cats.get(c.parent).level!==2))issue(`Invalid category parent ${c.id}`);
  for(const e of data.entries){
    if(ids.has(e.id))issue(`Duplicate entry id ${e.id}`);
    ids.set(e.id,e);
    if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(e.id))issue(`Invalid entry id ${e.id}`);
    if(urls.has(e.url))issue(`Duplicate URL ${e.url}`);urls.add(e.url);
    bilingual(e.name,`${e.id}.name`);bilingual(e.description,`${e.id}.description`);url(e.url,e.id);
    if(!cats.has(e.category))issue(`Unknown category ${e.id}`);
    if(!['active','withdrawn','pending'].includes(e.status))issue(`Invalid status ${e.id}`);
    if(!Array.isArray(e.tags))issue(`Missing tags ${e.id}`);
    else for(const tag of e.tags)if(!tagLabels[tag])issue(`Unknown tag ${tag}: ${e.id}`);
    if(new Set(e.tags).size!==e.tags.length)issue(`Duplicate tags ${e.id}`);
    if(!['metadata','source-review','needs-review','tested'].includes(e.review?.level))issue(`Invalid review level ${e.id}`);
    if(!/^\d{4}-\d{2}-\d{2}$/.test(e.review?.date)||!Number.isFinite(Date.parse(e.review.date)))issue(`Invalid review date ${e.id}`);
    if(!e.review?.sources?.length)issue(`Missing review sources ${e.id}`);
    for(const s of e.review?.sources||[])url(s,`${e.id}.source`);
    bilingual(e.review?.note,`${e.id}.review.note`);
    for(const l of e.links||[]){url(l.url,`${e.id}.link`);bilingual(l.label,`${e.id}.link.label`);}
    if(e.status==='active'&&e.review?.level==='needs-review')issue(`Unresolved entry must be pending: ${e.id}`);
  }
  for(const e of data.entries)if(e.parent){const parent=ids.get(e.parent);if(!parent||parent.id===e.id||parent.parent||parent.category!==e.category||parent.status!==e.status)issue(`Invalid entry parent ${e.id}`);}
  return errors;
}

const md=new MarkdownIt({html:true});
export function slug(text){return text.toLowerCase().replace(/[^\p{L}\p{N}\p{M}_ -]/gu,'').replace(/ /g,'-');}
export function anchors(text){
  const found=new Set(),counts=new Map();const tokens=md.parse(text,{});
  for(let i=0;i<tokens.length;i++){
    const t=tokens[i];
    if(t.type==='heading_open'){
      const raw=tokens[i+1].children?.filter(x=>['text','code_inline'].includes(x.type)).map(x=>x.content).join('')||tokens[i+1].content;
      const key=slug(raw),n=counts.get(key)||0;found.add(key+(n?`-${n}`:''));counts.set(key,n+1);
    }
    if(t.type==='html_block')for(const match of t.content.matchAll(/\b(?:id|name)=["']([^"']+)["']/g))found.add(match[1]);
    for(const ch of t.children||[])if(ch.type==='html_inline')for(const match of ch.content.matchAll(/\b(?:id|name)=["']([^"']+)["']/g))found.add(match[1]);
  }
  return found;
}
export function validateMarkdownLinks(text,files,from='README.md',contents=new Map()){
  const errors=[],own=anchors(text),links=[];
  for(const t of md.parse(text,{}))for(const ch of t.children||[]){if(ch.type==='link_open')links.push(ch.attrGet('href'));if(ch.type==='image')links.push(ch.attrGet('src'));}
  for(const link of links){
    if(/^[a-z][a-z0-9+.-]*:/i.test(link)||link.startsWith('//'))continue;
    let decoded;try{decoded=decodeURIComponent(link);}catch{errors.push(`Malformed URL ${link}`);continue;}
    const [file,hash]=decoded.split('#');
    if(!file){if(hash&&!own.has(hash))errors.push(`Missing anchor ${hash} in ${from}`);continue;}
    const target=path.posix.normalize(path.posix.join(path.posix.dirname(from),file.split('?')[0]));
    if(!files.has(target)){errors.push(`Missing file ${target} from ${from}`);continue;}
    if(hash&&contents.has(target)&&!anchors(contents.get(target)).has(hash))errors.push(`Missing anchor ${hash} in ${target}`);
  }
  return errors;
}
