import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {tagLabels,slug,validateCatalog} from './validate.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const data=JSON.parse(readFileSync(root+'data/catalog.json','utf8'));
const check=process.argv.includes('--check');
const errors=validateCatalog(data);
if(errors.length)throw Error(errors.join('\n'));
const repo='https://github.com/mansucache/awesome-markdown';
const active=data.entries.filter(e=>e.status==='active');
const cat=id=>data.categories.find(c=>c.id===id);
const copy={
  en:{file:'README.md',other:'README.zh-CN.md',contents:'Contents',quick:'Find a tool for your task',guide:'How to choose',title:'Markdown tools for writing, knowledge management, development, collaboration, conversion and publishing.',
    intro:'Find editors, libraries, extensions, services, specifications and learning resources for working with Markdown—from personal notes to application development.',
    task:'Your task',browse:'Browse',resources:'resources',guidance:[
      '**Writers and knowledge workers:** compare file storage, export, sync and the portability of links and attachments.',
      '**Developers:** distinguish standalone apps, editor components, parsers and APIs; check framework and runtime requirements.',
      '**Conversion and publishing:** test representative documents for tables, math, images and links before choosing a workflow.'
    ],distinction:'Markdown files, Markdown typing shortcuts and Markdown import/export are different capabilities. Support for one does not imply the others.',
    labels:'Labels indicate platforms and integrations. “Free option” may mean a limited tier or personal use. “Cross-platform” does not mean feature parity. Open source applies to the linked project, not necessarily every related hosted service.',
    evidence:'Descriptions are based on source material, not a claim that every app has been tested. See the [review log](docs/review-log.md) and [historical or pending entries](docs/catalog-history.md).',
    learn:'Choose with an example',learnText:'Start with the [scenario selection guide](guides/choosing-tools.md), then try [one Markdown file in three parser configurations](guides/markdown-compatibility.md). The example includes reproducible input, output and limitations.',
    participate:'Contributing',contribute:'Recommend a tool, correct information or share a concrete usage experience through [an issue]('+repo+'/issues/new/choose). Explain the problem it solves and what makes it different from existing entries. See the [contribution guide](contributing.md).',
    updates:'Updates',updatesText:'See [what changed](CHANGELOG.md) or [subscribe to commits (Atom)]('+repo+'/commits/main.atom).',license:'License',licenseText:'This list is released under [CC0-1.0](LICENSE). Linked tools have their own licenses.',
    tasks:[['Write and manage knowledge',['dedicated-markdown-editors','notes-and-knowledge-management','long-form-writing']],['Collaborate, map ideas and manage tasks',['document-collaboration','mind-mapping','notes-and-task-lists']],['Maintain READMEs and technical documentation',['programming-tools','checking-and-assistance']],['Build a Markdown editor or renderer',['development-components']],['Handle AI output and extract source material',['ai-related-tools','to-markdown']],['Convert files or create images',['conversion-tools','image-generation']],['Publish a site, book or presentation',['static-site-generators','e-books','presentation','wechat-official-account']],['Work in the terminal',['command-line-tools']],['Learn syntax and find templates',['syntax-specifications-and-extensions','templates','books']]]},
  zh:{file:'README.zh-CN.md',other:'README.md',contents:'完整分类',quick:'按你的任务找工具',guide:'如何选择',title:'Markdown 工具全景导航，覆盖写作、知识管理、开发、协作、格式转换与内容发布。',
    intro:'无论你用 Markdown 写文章、整理知识、维护技术文档，还是开发编辑器、处理 AI 输出，都可以从这里找到相应的工具、组件、规范与学习资源。',
    task:'你想做什么',browse:'从这里开始',resources:'个资源',guidance:[
      '**写作者与知识工作者**：关注文件保存、导出、同步方式，以及链接和附件能否随内容迁移。',
      '**开发者**：区分独立应用、编辑器组件、解析库和 API，再确认框架与运行环境。',
      '**转换与发布场景**：用自己的文档检查表格、公式、图片和链接的输出效果。'
    ],distinction:'Markdown 原生文件、Markdown 输入快捷语法、Markdown 导入导出是不同的能力。支持其中一种，不代表其余能力也具备。',
    labels:'文字标签标注平台与工具环境。“提供免费方案”可能指基础功能或个人免费；“跨平台”不代表功能完全一致。开源标记对应链接中的项目，不代表相关云服务的全部功能都开源。',
    evidence:'条目介绍以来源资料为依据，不代表所有应用均已实测。可查阅[核验记录](docs/review-log.zh-CN.md)与[历史及待核实条目](docs/catalog-history.zh-CN.md)。',
    learn:'通过实例做选择',learnText:'先看[场景选型指南](guides/choosing-tools.zh-CN.md)，再试试[同一份 Markdown 在三种解析配置中的差异](guides/markdown-compatibility.zh-CN.md)。示例提供输入、输出和可复现步骤。',
    participate:'参与完善',contribute:'欢迎通过 [Issue]('+repo+'/issues/new/choose) 推荐工具、纠正信息或分享实际使用体验。推荐时请说明解决的问题，以及与已有工具的区别；提交修改前请阅读[贡献指南](contributing.zh-CN.md)。',
    updates:'更新',updatesText:'查看[更新记录](CHANGELOG.md)，或[订阅提交记录（Atom）]('+repo+'/commits/main.atom)。',license:'许可',licenseText:'本清单采用 [CC0-1.0](LICENSE)。收录工具各自遵循其许可证。',
    tasks:[['写文章、做笔记、管理知识',['dedicated-markdown-editors','notes-and-knowledge-management','long-form-writing']],['多人协作、整理思路、管理任务',['document-collaboration','mind-mapping','notes-and-task-lists']],['写 README、维护技术文档',['programming-tools','checking-and-assistance']],['在应用中解析、编辑或渲染 Markdown',['development-components']],['处理 AI 输出、提取文档与网页内容',['ai-related-tools','to-markdown']],['转换文档格式、生成内容图片',['conversion-tools','image-generation']],['制作网站、电子书、幻灯片或公众号文章',['static-site-generators','e-books','presentation','wechat-official-account']],['在终端阅读、查询和处理文档',['command-line-tools']],['查语法、找模板和学习资料',['syntax-specifications-and-extensions','templates','books']]]}
};
const outputs=new Map();
function link(c,lang,file=''){return `[${c.name[lang]}](${file}#${slug(c.name[lang])})`;}
function alignTables(text){
  return text.replace(/(?:^\|.*\|\n)+/gm,block=>{
    const rows=block.trimEnd().split('\n').map(line=>line.slice(1,-1).split('|').map(x=>x.trim()));
    const widths=rows[0].map((_,i)=>Math.max(3,...rows.map(r=>(r[i]||'').length)));
    return rows.map((r,i)=>'| '+r.map((x,j)=>i===1?'-'.repeat(widths[j]):x.padEnd(widths[j])).join(' | ')+' |').join('\n')+'\n';
  });
}
function readme(lang){
  const c=copy[lang];
  const lines=['<!-- Generated from data/catalog.json by npm run build. -->', '<!-- lint disable double-link -->', '<!-- Repeated navigation links are intentional; catalog URL uniqueness is checked separately. -->',
    '# Awesome Markdown [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)','',
    '**English** | [简体中文](README.zh-CN.md)','',c.title,'',c.intro,'',
    `[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-blue.svg)](LICENSE) [![Catalog checks](${repo}/actions/workflows/lint.yml/badge.svg)](${repo}/actions/workflows/lint.yml)`,'',
    `## ${c.quick}`,'',`| ${c.task} | ${c.browse} |`,'| --- | --- |',
    ...c.tasks.map(([task,ids])=>`| ${task} | ${ids.map(id=>link(cat(id),lang)).join(' · ')} |`),'',
    `## ${c.guide}`,'',...c.guidance.flatMap(x=>[x,'']),'',c.distinction,'',c.labels,'',c.evidence,'',
    `## ${c.learn}`,'',c.learnText,'',`## ${c.contents}`,'','<!-- lint disable awesome-list-item -->','',
    ...data.categories.map(x=>`${x.level===3?'  ':''}- ${link(x,lang)}`),'','<!-- lint enable awesome-list-item -->',''];
  const tocStart=lines.indexOf(`## ${c.contents}`);
  const quickStart=lines.indexOf(`## ${c.quick}`);
  const toc=lines.splice(tocStart);
  const extra=[c.quick,c.guide,c.learn,c.participate,c.updates].map(h=>`- [${h}](#${slug(h)})`);
  toc.splice(4,0,...extra.slice(0,3));
  toc.splice(toc.indexOf('<!-- lint enable awesome-list-item -->')-1,0,...(lang==='en'?extra.slice(4):extra.slice(3)));
  lines.splice(quickStart,0,...toc);
  if(lang==='zh')lines.unshift('<!-- lint disable no-file-name-mixed-case -->');
  if(lang==='zh')lines[lines.indexOf('**English** | [简体中文](README.zh-CN.md)')]='[English](README.md) | **简体中文**';
  for(const category of data.categories){
    // Keep Chinese category links into the old default README working.
    if(lang==='en')lines.push(`<a id="${slug(category.name.zh)}"></a>`,'');
    lines.push('#'.repeat(category.level)+' '+category.name[lang],'');
    if(category.intro[lang])lines.push(category.intro[lang],'');
    for(const e of active.filter(e=>e.category===category.id)){
      const indent=e.parent?'  ':'';
      const metadata=e.tags.map(t=>'`'+tagLabels[t][lang==='en'?0:1]+'`');
      metadata.push(...e.links.map(l=>`[${l.label[lang]}](${l.url})`));
      lines.push(`${indent}- [${e.name[lang]}](${e.url}) - ${e.description[lang]}${metadata.length?'<br>':(lang==='zh'?'<!-- -->':'')}`);
      if(metadata.length)lines.push(indent+'  <span>'+metadata.join(' · ')+'</span>');
      lines.push('');
    }
  }
  lines.push(`## ${c.participate}`,'',c.contribute,'',`## ${c.updates}`,'',c.updatesText,'',c.licenseText,'');
  if(lang==='en'){const guideAt=lines.indexOf(`## ${c.guide}`);lines.splice(guideAt,0,'<a id="图标说明"></a>','<a id="平台支持"></a>','<a id="工具支持"></a>','');}
  return alignTables(lines.join('\n').replace(/\n{3,}/g,'\n\n'));
}
outputs.set('README.md',readme('en'));outputs.set('README.zh-CN.md',readme('zh'));
outputs.set('readme.en.md','# Awesome Markdown — English\n\nThe English catalog is now the default [README](README.md). [简体中文](README.zh-CN.md).\n\n'+data.categories.map(c=>'## '+c.name.en+'\n\n'+link(c,'en','README.md')+'\n').join('\n'));
for(const lang of ['en','zh']){
  const zh=lang==='zh',suffix=zh?'.zh-CN':'';
  const levels=zh?{'metadata':'基础来源检查','source-review':'专项来源核对','needs-review':'待核实','tested':'可复现实测'}:{metadata:'Metadata check','source-review':'Focused source review','needs-review':'Needs review',tested:'Reproducible test'};
  const header=zh?'# 核验记录':'# Review log';
  const intro=zh?'记录检查范围，不将“链接可访问”视为“应用已实测”。基础检查覆盖官方页面或仓库元数据；专项核对仅覆盖备注中说明的能力。':'These records describe the scope of review. A reachable page is not an application test. Metadata checks cover official pages or repository metadata; focused reviews cover the stated claims only.';
  const rows=data.entries.map(e=>`| ${e.name[lang]} | ${e.review.date} | ${levels[e.review.level]} | ${e.review.note[lang].replaceAll('|','/')} | ${e.review.sources.map((s,i)=>`[${i+1}](${s})`).join(' ')} |`);
  outputs.set(`docs/review-log${suffix}.md`,[header,'',`[English](review-log.md) | [简体中文](review-log.zh-CN.md)`,'',intro,'',zh?'| 条目 | 日期 | 范围 | 备注 | 来源 |':'| Resource | Date | Scope | Notes | Sources |','| --- | --- | --- | --- | --- |',...rows,''].join('\n'));
  const history=data.entries.filter(e=>e.status!=='active');
  outputs.set(`docs/catalog-history${suffix}.md`,[zh?'# 历史及待核实条目':'# Historical and pending entries','',
    '[English](catalog-history.md) | [简体中文](catalog-history.zh-CN.md)','',
    zh?'这些条目保留在数据中供追溯，不出现在当前推荐清单。找到可靠的官方来源后可以重新评估。':'These records remain in the catalog data for traceability, outside current recommendations. They can be reconsidered when reliable primary evidence is available.','',
    ...history.flatMap(e=>[`## ${e.name[lang]}`,'',zh?`状态：${e.status==='withdrawn'?'退出推荐':'待核实'}。`:`Status: ${e.status}.`,'',e.review.note[lang],'',...e.review.sources.map(s=>'- '+(e.name.en==='Lightpaper'?`\`${s}\``:`[${zh?'来源':'Source'}](${s})`)), '']),
    zh?'[返回中文版](../README.zh-CN.md)':'[Back to the catalog](../README.md)',''].join('\n'));
}
let stale=false;
for(const [file,text] of outputs){
  if(check){let existing;try{existing=readFileSync(root+file,'utf8');}catch{}if(existing!==text){console.error(`Stale generated file: ${file}`);stale=true;}}
  else{mkdirSync(new URL('../'+file.substring(0,file.lastIndexOf('/')+1),import.meta.url),{recursive:true});writeFileSync(root+file,text);}
}
if(stale)process.exitCode=1;
else console.log(`${check?'Verified':'Generated'} ${outputs.size} files; ${active.length} active of ${data.entries.length} records.`);
