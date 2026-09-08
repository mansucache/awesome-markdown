# Test a Markdown document before moving it

[Back to the catalog](../README.md) · [简体中文](markdown-compatibility.zh-CN.md)

A parser can recognize a table and still leave task markers as text. A `mermaid` code fence can survive conversion without becoming a diagram. Before moving notes or choosing a renderer, test the features your documents actually use.

This small, reproducible example sends **one identical source file** to three parser configurations. It compares generated HTML, not applications, visual quality, speed, or full specification compliance.

## Reproduce the result

From the repository root, with Node.js 22 or newer:

```sh
npm ci
node examples/compatibility/run.mjs
node examples/compatibility/run.mjs --check
node --test tests/compatibility.test.mjs
```

The first run writes three HTML fragments under `examples/compatibility/output/`. `--check` compares those files with fresh output without rewriting them, and exits unsuccessfully if an output is missing or stale. The lockfile fixes the dependency versions; no network access is needed after installation.

Read the [shared Markdown source](../examples/compatibility/sample.md), [runner](../examples/compatibility/run.mjs), and [behavior tests](../tests/compatibility.test.mjs). The source includes headings, a pipe table, two tasks, `[[Migration notes]]`, a Mermaid fence, and `$E = mc^2$`.

## Exact configurations

| Output | Package version | Constructor |
| --- | --- | --- |
| [CommonMark preset](../examples/compatibility/output/markdown-it-commonmark.html) | markdown-it 15.0.1 | `new MarkdownIt('commonmark')` |
| [Default preset](../examples/compatibility/output/markdown-it-default.html) | markdown-it 15.0.1 | `new MarkdownIt()` |
| [GFM mode](../examples/compatibility/output/marked-gfm.html) | marked 18.0.12 | `new Marked({ gfm: true, breaks: false, async: false })` |

No plugins or application processing are installed in these renderers. markdown-it describes its configurable syntax and extensions in its [official documentation](https://markdown-it.github.io/markdown-it/). Marked documents its `gfm` option and instance configuration in [Advanced Usage](https://marked.js.org/using_advanced).

## What the executed sample shows

| Feature in this sample | markdown-it CommonMark | markdown-it default | Marked GFM |
| --- | --- | --- | --- |
| Headings | `<h1>` and `<h2>` | `<h1>` and `<h2>` | `<h1>` and `<h2>` |
| Pipe table | Pipe text in a paragraph | HTML `<table>` | HTML `<table>` |
| Task list | List text retains `[ ]` and `[x]` | List text retains `[ ]` and `[x]` | Two disabled checkbox inputs; second checked |
| Wiki link | Literal `[[Migration notes]]` | Literal `[[Migration notes]]` | Literal `[[Migration notes]]` |
| Mermaid fence | Code block tagged `language-mermaid` | Same | Same |
| Inline math | Literal `$E = mc^2$` | Same | Same |

The task-list difference matters when choosing a renderer: table support alone does not establish task-list support. None of these outputs resolves the wiki link, generates a diagram, or typesets the equation. A language class on `<code>` is metadata for further processing, not an SVG diagram.

## Use the result when migrating

1. Copy a representative document and list the features it depends on, including links to other notes.
2. Test that copy in the actual destination with its intended settings and plugins. This runner provides a baseline, not a substitute for that application test.
3. When a feature stays literal, decide whether to enable the destination's support or change the source. For example, replace a wiki link with an ordinary Markdown link to the destination file, then verify the target exists.
4. Keep the original until you have checked navigation, diagrams, equations, and exports in the destination.

The checked-in results cover **only this fixture, these versions, and these configurations**. They do not prove that an editor supports or lacks a feature, that Marked reproduces GitHub's whole rendering pipeline, or that all CommonMark/GFM syntax behaves identically. Changes to the fixture or dependencies require rerunning the example and reviewing the diff. The runner is for this trusted local fixture; it is not an HTML sanitization service.
