import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {validateCatalog, validateMarkdownLinks} from '../scripts/validate.mjs';
const base=JSON.parse(readFileSync(new URL('../data/catalog.json',import.meta.url),'utf8'));
test('bilingual catalog is valid',()=>assert.deepEqual(validateCatalog(base),[]));
test('duplicate IDs and missing translations cannot pass',()=>{
  const data=structuredClone(base);
  data.entries[1].id=data.entries[0].id;
  data.entries[0].description.zh='';
  const errors=validateCatalog(data).join('\n');
  assert.match(errors,/Duplicate entry id/);
  assert.match(errors,/description.zh/);
});
test('orphaned or cross-category child cannot pass',()=>{
  const data=structuredClone(base);
  data.entries[0].parent='missing';
  assert.match(validateCatalog(data).join('\n'),/parent/);
});
test('unreviewed removals and unsupported tags cannot pass',()=>{
  const data=structuredClone(base);
  data.entries[0].status='withdrawn';
  data.entries[0].review.note.en='';
  data.entries[1].tags.push('best-ever');
  const errors=validateCatalog(data).join('\n');
  assert.match(errors,/review.note.en/);
  assert.match(errors,/Unknown tag/);
});
test('Markdown link checks handle Chinese anchors and ignore fenced examples',()=>{
  const good='# Root\n\n## 转成 Markdown\n\n[go](#转成-markdown)\n\n```md\n[demo](#missing)\n```\n';
  assert.deepEqual(validateMarkdownLinks(good,new Set(['file.md'])) ,[]);
  assert.match(validateMarkdownLinks(good+'\n[bad](#missing)',new Set()).join('\n'),/missing/);
  assert.match(validateMarkdownLinks('[bad](lost.md)',new Set()).join('\n'),/lost.md/);
});
