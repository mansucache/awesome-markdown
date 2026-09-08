import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import MarkdownIt from 'markdown-it';
import { Marked } from 'marked';

export const sampleUrl = new URL('./sample.md', import.meta.url);
export const outputUrl = new URL('./output/', import.meta.url);

// No plugins, highlighters, browser scripts, or application post-processing.
export function renderSample(source) {
  return {
    'markdown-it-commonmark.html': new MarkdownIt('commonmark').render(source),
    'markdown-it-default.html': new MarkdownIt().render(source),
    'marked-gfm.html': new Marked({ gfm: true, breaks: false, async: false }).parse(source),
  };
}

export async function run({ check = false } = {}) {
  const outputs = renderSample(await readFile(sampleUrl, 'utf8'));
  if (!check) await mkdir(outputUrl, { recursive: true });
  const stale = [];
  for (const [name, html] of Object.entries(outputs)) {
    const target = new URL(name, outputUrl);
    if (check) {
      let existing;
      try {
        existing = await readFile(target, 'utf8');
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
      if (existing !== html) stale.push(name);
    } else {
      await writeFile(target, html);
    }
  }
  if (stale.length) throw new Error(`Stale or missing output: ${stale.join(', ')}. Run node examples/compatibility/run.mjs`);
  return Object.keys(outputs);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  if (args.some((arg) => arg !== '--check')) {
    console.error('Usage: node examples/compatibility/run.mjs [--check]');
    process.exitCode = 1;
  } else {
    try {
      const files = await run({ check: args.includes('--check') });
      console.log(`${args.includes('--check') ? 'Verified' : 'Generated'} ${files.length} compatibility outputs.`);
    } catch (error) {
      console.error(error.message);
      process.exitCode = 1;
    }
  }
}
