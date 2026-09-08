# 按场景选择 Markdown 工具

[English](choosing-tools.md) | [简体中文](choosing-tools.zh-CN.md)

这里用 16 个候选展示如何比较工具，不是覆盖所有工具的排名。选择依据来自项目资料；除独立的解析器示例外，没有宣称完成应用实测。更多候选见[完整清单](../README.zh-CN.md)。

| 任务 | 候选与官方入口 | 用途 | 选择前检查 |
| --- | --- | --- | --- |
| 桌面写作 | [Typora](https://typora.io/) | 将 Markdown 编辑与预览合在同一界面，支持大纲、全文检索以及 PDF、HTML、Word 导出，适合以文章和文档为主的桌面写作。 | 是否习惯编辑与预览合一？检查所需导出的依赖。 |
| 手机写作 | [Markor](https://github.com/gsantner/markor) | 在 Android 上编辑 Markdown、todo.txt 和 Zim 文本，支持离线使用，适合手机端记录笔记与维护纯文本清单。 | 这是 Android 端候选，先确定文件如何在设备间流转。 |
| 关联笔记 | [Obsidian](https://obsidian.md/) | 以本地 Markdown 笔记为基础，通过双向链接和知识图谱连接内容，适合长期积累资料并建立笔记之间的关系。 | 试着把双链和附件迁移到目标渲染器。 |
| 研究写作 | [Zettlr](https://github.com/Zettlr/Zettlr) | 面向学术写作与 Zettelkasten 笔记法，集成引文管理和多格式导出，适合同时处理笔记、参考文献与长文稿。 | 用自己的参考文献库和交付格式试一遍。 |
| 团队共写 | [HedgeDoc](https://github.com/hedgedoc/hedgedoc) | 可自托管的协作式 Markdown 编辑器，支持多人实时编辑、图表和幻灯片模式，适合团队共同维护 Markdown 文档。 | 谁负责部署、备份与维护？ |
| 云端协作 | [飞书文档](https://www.feishu.cn/product/docs) | 协作云文档，可通过「下载为」导出 Markdown；导出保留正文结构，不包含评论。 | 导出一份真实文档，注意评论不在导出范围内。 |
| 嵌入编辑器 | [Milkdown](https://github.com/Milkdown/milkdown) | 基于 ProseMirror 与 remark 的所见即所得 Markdown 编辑器，适合在应用中接入并扩展编辑体验。 | 评估在应用中接入与开发扩展的成本。 |
| Vue 编辑器 | [md-editor-v3](https://github.com/imzbf/md-editor-v3) | 面向 Vue 3 的 Markdown 编辑器组件，支持实时预览、深色主题和图片粘贴上传，适合在 Vue 应用中增加文档编辑入口。 | 确认 Vue 3 环境与图片上传接口的接入要求。 |
| 解析 Markdown | [markdown-it](https://github.com/markdown-it/markdown-it) | 可扩展的 JavaScript Markdown 解析器，遵循 CommonMark 并提供插件 API，适合需要定制语法与渲染行为的应用。 | 明确预设与插件，用自己的语法样例检查输出。 |
| 渲染 AI 输出 | [Markstream](https://github.com/Simon-He95/markstream-vue) | 面向 AI 输出的流式 Markdown 渲染组件系列，按框架选用对应包；链接仓库中的 markstream-vue 面向 Vue 3 与 Nuxt。 | 选对框架包，测试流式输出尚未完成的代码块。 |
| 临时转换 | [doc2md](https://github.com/sakuraqqq/doc2md) | 在浏览器本地将 PDF、DOCX、XLSX、图片、TXT 和 HTML 转为 Markdown，无需上传文件，并支持 OCR。离线使用需先缓存资源；复杂 PDF 的表格与版式可能无法完整保留。 | 离线前缓存资源，检查复杂 PDF 表格。 |
| 自动提取 | [MarkItDown](https://github.com/microsoft/markitdown) | 微软开源的 Python 工具，将 PDF、Word、Excel 等转换为 Markdown，面向文本分析与 LLM 流程，不以原始版式的高保真还原为目标。 | 检查提取后的结构，不以保留原页面版式为前提。 |
| 文本幻灯片 | [Marp](https://github.com/marp-team/marp) | 以 Markdown 编写幻灯片，支持代码高亮、数学公式以及 PDF、PPTX 导出，适合从文本源文件生成演示交付物。 | 交付前检查导出的 PDF 或 PPTX。 |
| 技术演讲 | [Slidev](https://github.com/slidevjs/slidev) | 面向开发者的 Markdown 幻灯片工具，支持代码高亮、绘图与 LaTeX，适合技术演讲和代码讲解。 | 在实际演示环境中测试代码与公式。 |
| 文档网站 | [MkDocs](https://github.com/mkdocs/mkdocs) | 从 Markdown 构建项目文档网站，可通过主题与插件扩展，适合围绕文档目录持续维护技术资料。 | 确认主题与插件的维护要求。 |
| 交互文档 | [VitePress](https://github.com/vuejs/vitepress) | 基于 Vite 与 Vue 构建文档网站，允许在 Markdown 中使用 Vue 组件，适合需要在说明文档中嵌入交互内容的项目。 | 先确认文档确实需要嵌入 Vue 交互组件。 |

## 带着一个样本做决定

先写清要交付什么，再选两款候选。用同一份含表格、图片、链接和必要扩展语法的文档，检查编辑、导出和迁移的全过程。记录工具版本与失败的部分，避免只比较宣传页。

可以从[三种解析配置的兼容性示例](markdown-compatibility.zh-CN.md)开始。它展示语法差异如何影响输出，不代表上表应用的测试结果。条目依据见[核验记录](../docs/review-log.zh-CN.md)。
