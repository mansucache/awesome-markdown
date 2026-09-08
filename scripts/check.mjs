import {readFileSync,readdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {validateCatalog,validateMarkdownLinks} from './validate.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const data=JSON.parse(readFileSync(root+'data/catalog.json','utf8'));
const errors=validateCatalog(data);
const files=new Set(),contents=new Map();
function walk(dir=''){
  for(const e of readdirSync(root+dir,{withFileTypes:true})){
    if(['.git','node_modules','.claude','reports'].includes(e.name)||e.name==='README.zh.preview.md')continue;
    const name=dir+e.name;
    if(e.isDirectory())walk(name+'/');else files.add(name);
  }
}
walk();
for(const f of files)if(f.endsWith('.md')&&!f.startsWith('examples/'))contents.set(f,readFileSync(root+f,'utf8'));
for(const [f,t] of contents)errors.push(...validateMarkdownLinks(t,files,f,contents));
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}
else console.log(`Catalog, translations and internal links verified (${data.entries.length} records, ${contents.size} Markdown files).`);
