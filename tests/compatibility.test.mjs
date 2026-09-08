import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { renderSample, run, sampleUrl } from '../examples/compatibility/run.mjs';

const outputs = renderSample(await readFile(sampleUrl, 'utf8'));

test('the sample table requires the extensions enabled in these configurations', () => {
  assert.doesNotMatch(outputs['markdown-it-commonmark.html'], /<table>/);
  assert.match(outputs['markdown-it-commonmark.html'], /\| Format \| Portable\? \|/);
  for (const name of ['markdown-it-default.html', 'marked-gfm.html']) {
    assert.match(outputs[name], /<table>/);
    assert.match(outputs[name], /<td>Check the renderer<\/td>/);
  }
});

test('only marked GFM emits checkbox inputs for the sample tasks', () => {
  for (const name of ['markdown-it-commonmark.html', 'markdown-it-default.html']) {
    assert.doesNotMatch(outputs[name], /<input/);
    assert.match(outputs[name], /<li>\[ \] Check the destination<\/li>/);
    assert.match(outputs[name], /<li>\[x\] Keep the source<\/li>/);
  }
  const inputs = outputs['marked-gfm.html'].match(/<input[^>]*>/g);
  assert.equal(inputs.length, 2);
  assert.ok(inputs.every((input) => /type="checkbox"/.test(input) && /disabled/.test(input)));
  assert.doesNotMatch(inputs[0], /checked/);
  assert.match(inputs[1], /checked/);
});

test('headings work, but wiki links, diagrams, and math need more than these parsers', () => {
  for (const html of Object.values(outputs)) {
    assert.match(html, /<h1>One document, three configurations<\/h1>/);
    assert.match(html, /<h2>Math<\/h2>/);
    assert.match(html, /See \[\[Migration notes\]\]\./);
    assert.doesNotMatch(html, /<a\b/);
    assert.match(html, /<pre><code class="language-mermaid">flowchart LR/);
    assert.doesNotMatch(html, /<svg\b/);
    assert.match(html, /Inline math: \$E = mc\^2\$\./);
    assert.doesNotMatch(html, /<math\b|class="katex/);
  }
});

test('checked-in HTML matches the locked parsers and shared fixture', async () => {
  assert.equal((await run({ check: true })).length, 3);
});
