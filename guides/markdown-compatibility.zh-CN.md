# 迁移 Markdown 前，先试一份文档

[返回资源目录](../README.zh-CN.md) · [English](markdown-compatibility.md)

解析器能显示表格，任务标记却可能仍是文字。`mermaid` 代码围栏转换后保留了，也不代表已经生成图表。迁移笔记或选择解析器前，先测试文档实际依赖的语法。

这个可复现的小实验把**同一份源文件**交给三种解析配置，比较生成的 HTML。它不比较应用、视觉效果、速度，也不是完整的规范符合性测试。

## 复现结果

在仓库根目录执行，需要 Node.js 22 或更新版本：

```sh
npm ci
node examples/compatibility/run.mjs
node examples/compatibility/run.mjs --check
node --test tests/compatibility.test.mjs
```

首次运行在 `examples/compatibility/output/` 下写入三个 HTML 片段。`--check` 将现有文件与重新生成的结果比较，不改写文件；输出缺失或过期时返回失败。依赖版本由锁文件固定，安装完成后运行实验不需要联网。

可以查看[共用 Markdown 样例](../examples/compatibility/sample.md)、[运行脚本](../examples/compatibility/run.mjs)和[行为测试](../tests/compatibility.test.mjs)。样例包含标题、管道表格、两个任务、`[[Migration notes]]`、Mermaid 代码围栏和 `$E = mc^2$`。

## 本次配置

| 输出 | 包版本 | 构造方式 |
| --- | --- | --- |
| [CommonMark 预设](../examples/compatibility/output/markdown-it-commonmark.html) | markdown-it 15.0.1 | `new MarkdownIt('commonmark')` |
| [默认预设](../examples/compatibility/output/markdown-it-default.html) | markdown-it 15.0.1 | `new MarkdownIt()` |
| [GFM 模式](../examples/compatibility/output/marked-gfm.html) | marked 18.0.12 | `new Marked({ gfm: true, breaks: false, async: false })` |

三种解析器配置都没有加载插件或应用层处理。markdown-it 的[官方文档](https://markdown-it.github.io/markdown-it/)说明其语法可以配置和扩展；Marked 的 [Advanced Usage](https://marked.js.org/using_advanced) 说明了 `gfm` 选项和实例配置。

## 实际运行结果

| 样例中的功能 | markdown-it CommonMark | markdown-it 默认 | Marked GFM |
| --- | --- | --- | --- |
| 标题 | `<h1>` 和 `<h2>` | `<h1>` 和 `<h2>` | `<h1>` 和 `<h2>` |
| 管道表格 | 段落中的管道文字 | HTML `<table>` | HTML `<table>` |
| 任务列表 | 列表文字保留 `[ ]` 和 `[x]` | 列表文字保留 `[ ]` 和 `[x]` | 两个禁用的复选框，第二个已勾选 |
| Wiki 链接 | 原样保留 `[[Migration notes]]` | 原样保留 `[[Migration notes]]` | 原样保留 `[[Migration notes]]` |
| Mermaid 围栏 | 带 `language-mermaid` 标记的代码块 | 同左 | 同左 |
| 行内公式 | 原样保留 `$E = mc^2$` | 同左 | 同左 |

选择解析器时，任务列表这一行尤其有用：支持表格不足以证明支持任务复选框。三种输出都没有解析 Wiki 链接、生成图表或排版公式。`<code>` 上的语言类名可以供后续处理使用，本身不是 SVG 图表。

## 迁移时怎么用

1. 复制一份有代表性的文档，列出它依赖的功能，包括指向其他笔记的链接。
2. 在实际目标应用中，使用准备采用的设置和插件测试副本。这个脚本提供基线，不能替代目标应用的验证。
3. 发现语法仍是文字时，决定启用目标应用的对应支持，还是修改源文件。例如把 Wiki 链接改成指向目标文件的普通 Markdown 链接，并检查目标文件确实存在。
4. 确认目标应用中的导航、图表、公式和导出结果后，再处理原件。

仓库中的结果**只覆盖这份样例、这些版本和这些配置**。它不能证明某个编辑器支持或不支持某项功能，不能代表 GitHub 的完整渲染流程，也不能证明所有 CommonMark/GFM 语法表现一致。修改样例或升级依赖后，需要重新运行并审阅差异。脚本只处理这份可信的本地样例，不提供 HTML 安全清洗服务。
