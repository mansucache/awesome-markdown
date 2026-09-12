# 在应用中接入 Markdown，先选对环节

[English](markdown-for-developers.md) · [返回清单](../README.zh-CN.md)

只需要显示一段 Markdown 时，可以从渲染组件开始；需要修改标题、提取链接或重写内容时，则应比较解析与转换工具。编辑器、解析器与渲染器承担不同任务，不能只按功能数量选型。

本指南依据官方资料整理，核对日期为 2026-09-12。下表是候选路线，不是性能排名，也不表示所有组件均已实测。

## 按任务选择

| 你要做什么 | 从哪里开始 | 选型前确认 |
| --- | --- | --- |
| 在 React 页面显示 Markdown | [react-markdown](https://github.com/remarkjs/react-markdown) | 是否需要自定义链接、表格组件，以及 GFM、公式插件 |
| 在非 React 环境生成 HTML | [markdown-it](https://github.com/markdown-it/markdown-it)、[Marked](https://github.com/markedjs/marked) | 所需语法、插件与输出 HTML 的处理方式 |
| 提取标题、修改链接、转换正文结构 | [remark](https://github.com/remarkjs/remark) | 是否需要访问语法树；变换后能否保留内容含义 |
| 在应用内编辑 Markdown | [Milkdown](https://github.com/Milkdown/milkdown)、[md-editor-v3](https://github.com/imzbf/md-editor-v3) | 编辑方式、框架要求、图片上传，以及 Markdown 导出是否保留所需结构 |
| 展示 AI 的逐段输出 | [Streamdown](https://github.com/vercel/streamdown)、[Markstream](https://github.com/Simon-He95/markstream-vue) | Streamdown 面向 React；Markstream 按框架选包，测试未完成的内容块 |
| 在自己维护的文档中嵌入交互组件 | [MDX](https://mdxjs.com/) | 内容由谁编写和审核；构建环境如何处理其中的 JavaScript |
| 给文档加入文本图表 | [Mermaid](https://mermaid.js.org/intro/) | 目标页面、预览器和导出链路是否都加载了图表渲染支持 |
| 在提交前整理格式并检查链接 | [Prettier](https://prettier.io/docs/options#prose-wrap)、[markdownlint](https://github.com/DavidAnson/markdownlint)、[lychee](https://github.com/lycheeverse/lychee) | 格式化、规则检查、链接检查分别配置；网络错误需要复核 |

## 一个具体例子：给应用加入 AI 回答区域

假设应用需要显示段落、代码块、表格与公式，同时允许用户复制完整回答。先写出输入和输出合同：输入是持续到达的 Markdown 文本，输出是页面显示效果与可复制的原文。

1. **先匹配框架。** React 项目可比较 react-markdown 与 Streamdown；Vue 项目可看 Markstream 对应包。流式专用组件是否必要，要由实际输入决定。
2. **保留原始文本。** 渲染层为了显示未完成内容所作的补全，不应未经确认就写回用户文档。
3. **用同一输入比较。** 分别在标题、链接、表格行、公式分隔符和代码围栏中间暂停。观察布局、滚动位置，以及流结束后的最终结果。
4. **分别检查复制和导出。** 页面看起来完整，不代表复制出的 Markdown 或导出的 HTML 包含相同信息。
5. **只接入需要的扩展。** 按组件文档配置代码高亮、公式和图表，测量真实页面的加载与更新时间后再优化。

可以复用仓库的[解析器样例](../examples/compatibility/sample.md)检查静态语法；它没有模拟网络分片，也不能替代流式组件的集成测试。

## 内容可信度会改变实现方式

普通用户提交的 Markdown、你自己维护的 MDX 文档，以及来自模型的文本，应该分别确定允许的能力。不要为了显示原始 HTML，就默认打开所有标签或把用户输入当作可执行的 MDX。

react-markdown 的[安全说明](https://github.com/remarkjs/react-markdown#security)明确指出插件和配置会影响安全性；MDX 的[编译器文档](https://mdxjs.com/packages/mdx/)说明它会把 MDX 转为 JavaScript，并提供求值能力。接入时需要审查 URL、原始 HTML 与扩展组件的处理方式，不能只看“支持 Markdown”这一项。

## 最小验收清单

- 用实际依赖的语法验证最终显示，不把 CommonMark、GFM、MDX 和插件扩展混为一谈。
- 检查相对图片地址、站内链接和附件在部署后的解析结果。
- 对编辑器做一次“导入 → 编辑 → 导出 → 再导入”，记录信息丢失的位置。
- 在接近真实长度的文档上检查响应与内存，避免套用项目宣传中的性能倍数。
- 记录包版本、插件和配置；升级后重跑相同样例。

更多语法边界见[兼容性指南](markdown-compatibility.zh-CN.md)；需要先把 PDF 或 Office 文档变成 Markdown 时，见[文档转换比较](document-to-markdown.zh-CN.md)。
