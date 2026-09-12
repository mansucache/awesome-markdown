# Choose the Markdown layer your application needs

[简体中文](markdown-for-developers.zh-CN.md) · [Back to the catalog](../README.md)

For displaying Markdown, start with a renderer. For rewriting headings, extracting links or transforming content, compare parsers and processing pipelines. Editors, parsers and renderers solve different problems; a longer feature list does not make them interchangeable.

This guide is based on official documentation reviewed on 2026-09-12. The options below are starting points, not a performance ranking or a claim of hands-on testing of every component.

## Choose by task

| Task | Starting points | Check before choosing |
| --- | --- | --- |
| Display Markdown in React | [react-markdown](https://github.com/remarkjs/react-markdown) | Custom link/table components and required GFM or math plugins |
| Produce HTML outside React | [markdown-it](https://github.com/markdown-it/markdown-it), [Marked](https://github.com/markedjs/marked) | Required syntax, plugins and treatment of generated HTML |
| Extract headings, rewrite links or transform structure | [remark](https://github.com/remarkjs/remark) | Need for syntax-tree access and preservation of meaning after transforms |
| Edit Markdown inside an application | [Milkdown](https://github.com/Milkdown/milkdown), [md-editor-v3](https://github.com/imzbf/md-editor-v3) | Editing model, framework, image uploads and Markdown export fidelity |
| Display incremental AI output | [Streamdown](https://github.com/vercel/streamdown), [Markstream](https://github.com/Simon-He95/markstream-vue) | Streamdown targets React; choose the appropriate Markstream package and test incomplete blocks |
| Embed interactive components in maintained documentation | [MDX](https://mdxjs.com/) | Who authors and reviews content, and how the build handles its JavaScript |
| Add text-based diagrams | [Mermaid](https://mermaid.js.org/intro/) | Rendering support in the page, preview and export pipeline |
| Format files and check links before commits | [Prettier](https://prettier.io/docs/options#prose-wrap), [markdownlint](https://github.com/DavidAnson/markdownlint), [lychee](https://github.com/lycheeverse/lychee) | Configure formatting, lint rules and link checks separately; review network failures |

## Example: an AI answer area

Suppose an application needs paragraphs, code blocks, tables and math, plus a way to copy the complete answer. Define the contract first: the input is incrementally arriving Markdown; the outputs are the rendered page and the copyable source text.

1. **Match the framework.** In React, compare react-markdown with Streamdown; in Vue, consider the relevant Markstream package. Let representative input establish whether specialized streaming behavior helps.
2. **Preserve the source.** Display-time repair of unfinished content should not silently rewrite the user's stored document.
3. **Use identical input.** Pause in the middle of a heading, link, table row, math delimiter and code fence. Inspect layout, scroll position and the final result after streaming ends.
4. **Check copying and export separately.** A complete-looking page does not prove that copied Markdown or exported HTML retains the same information.
5. **Add only required extensions.** Configure highlighting, math and diagrams from the component documentation. Measure the actual page before optimizing loading or updates.

Reuse the repository's [parser fixture](../examples/compatibility/sample.md) for static syntax checks. It does not simulate network chunks or replace streaming integration tests.

## Trust affects the implementation

Set separate capabilities for user-submitted Markdown, maintained MDX documents and model-generated text. Supporting raw HTML does not require enabling every tag or evaluating user input as MDX.

The react-markdown [security notes](https://github.com/remarkjs/react-markdown#security) explain that plugins and configuration affect safety. The MDX [compiler documentation](https://mdxjs.com/packages/mdx/) describes conversion to JavaScript and evaluation APIs. Review handling of URLs, raw HTML and extension components instead of relying on a generic Markdown support claim.

## Minimum acceptance checks

- Test the syntax you depend on; distinguish CommonMark, GFM, MDX and plugin extensions.
- Check relative image paths, internal links and attachments after deployment.
- For editors, try import → edit → export → import again, recording lost information.
- Check responsiveness and memory with realistically sized documents rather than adopting advertised speed multipliers.
- Record package versions, plugins and configuration; repeat the same samples after upgrades.

See the [compatibility guide](markdown-compatibility.md) for syntax boundaries and the [document conversion guide](document-to-markdown.md) when the source is PDF or Office content.
