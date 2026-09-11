<!-- lint disable no-file-name-mixed-case -->
<!-- Generated from data/catalog.json by npm run build. -->
<!-- lint disable double-link -->
<!-- Repeated navigation links are intentional; catalog URL uniqueness is checked separately. -->
# Awesome Markdown [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[English](README.md) | **简体中文**

Markdown 工具全景导航，覆盖写作、知识管理、开发、协作、格式转换与内容发布。

无论你用 Markdown 写文章、整理知识、维护技术文档，还是开发编辑器、处理 AI 输出，都可以从这里找到相应的工具、组件、规范与学习资源。

[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-blue.svg)](LICENSE) [![Catalog checks](https://github.com/mansucache/awesome-markdown/actions/workflows/lint.yml/badge.svg)](https://github.com/mansucache/awesome-markdown/actions/workflows/lint.yml)

## 完整分类

<!-- lint disable awesome-list-item -->

- [按你的任务找工具](#按你的任务找工具)
- [如何选择](#如何选择)
- [通过实例做选择](#通过实例做选择)
- [语法规范与扩展](#语法规范与扩展)
- [写作与编辑环境](#写作与编辑环境)
  - [专业 Markdown 编辑器](#专业-markdown-编辑器)
  - [笔记与知识管理软件](#笔记与知识管理软件)
  - [长篇写作](#长篇写作)
- [办公与协作工具](#办公与协作工具)
  - [文档协同](#文档协同)
  - [思维导图](#思维导图)
  - [幻灯片](#幻灯片)
  - [便签与清单](#便签与清单)
- [网站生成与排版](#网站生成与排版)
  - [静态网站](#静态网站)
  - [电子书](#电子书)
  - [模板](#模板)
  - [公众号](#公众号)
- [编码与开发工具](#编码与开发工具)
  - [编程工具](#编程工具)
  - [代码片段管理](#代码片段管理)
  - [开发组件](#开发组件)
- [转换工具](#转换工具)
  - [转成 Markdown](#转成-markdown)
  - [转成图片](#转成图片)
- [其他工具](#其他工具)
  - [命令行工具](#命令行工具)
  - [检查与辅助](#检查与辅助)
  - [AI 相关工具](#ai-相关工具)
- [书籍](#书籍)
- [参与完善](#参与完善)
- [更新](#更新)

<!-- lint enable awesome-list-item -->

## 按你的任务找工具

| 你想做什么                 | 从这里开始                                                                         |
| --------------------- | ----------------------------------------------------------------------------- |
| 写文章、做笔记、管理知识          | [专业 Markdown 编辑器](#专业-markdown-编辑器) · [笔记与知识管理软件](#笔记与知识管理软件) · [长篇写作](#长篇写作) |
| 多人协作、整理思路、管理任务        | [文档协同](#文档协同) · [思维导图](#思维导图) · [便签与清单](#便签与清单)                               |
| 写 README、维护技术文档       | [编程工具](#编程工具) · [检查与辅助](#检查与辅助)                                               |
| 在应用中解析、编辑或渲染 Markdown | [开发组件](#开发组件)                                                                 |
| 处理 AI 输出、提取文档与网页内容    | [AI 相关工具](#ai-相关工具) · [转成 Markdown](#转成-markdown)                             |
| 转换文档格式、生成内容图片         | [转换工具](#转换工具) · [转成图片](#转成图片)                                                 |
| 制作网站、电子书、幻灯片或公众号文章    | [静态网站](#静态网站) · [电子书](#电子书) · [幻灯片](#幻灯片) · [公众号](#公众号)                       |
| 在终端阅读、查询和处理文档         | [命令行工具](#命令行工具)                                                               |
| 查语法、找模板和学习资料          | [语法规范与扩展](#语法规范与扩展) · [模板](#模板) · [书籍](#书籍)                                   |

## 如何选择

**写作者与知识工作者**：关注文件保存、导出、同步方式，以及链接和附件能否随内容迁移。

**开发者**：区分独立应用、编辑器组件、解析库和 API，再确认框架与运行环境。

**转换与发布场景**：用自己的文档检查表格、公式、图片和链接的输出效果。

Markdown 原生文件、Markdown 输入快捷语法、Markdown 导入导出是不同的能力。支持其中一种，不代表其余能力也具备。

文字标签标注平台与工具环境。“提供免费方案”可能指基础功能或个人免费；“跨平台”不代表功能完全一致。开源标记对应链接中的项目，不代表相关云服务的全部功能都开源。

条目介绍以来源资料为依据，不代表所有应用均已实测。可查阅[核验记录](docs/review-log.zh-CN.md)与[历史及待核实条目](docs/catalog-history.zh-CN.md)。

## 通过实例做选择

先看[场景选型指南](guides/choosing-tools.zh-CN.md)，再试试[同一份 Markdown 在三种解析配置中的差异](guides/markdown-compatibility.zh-CN.md)。示例提供输入、输出和可复现步骤。

## 语法规范与扩展

检查语法兼容性时，先确认目标工具采用哪种规范；扩展语法在不同渲染器中可能呈现不同结果。

- [CommonMark](https://commonmark.org/) - 为 Markdown 解析与渲染提供明确的语法规范和测试套件，适合需要检查不同实现是否一致的开发者。<br>
  <span>`语法规范`</span>

- [GFM (GitHub Flavored Markdown)](https://github.github.com/gfm/) - GitHub 使用的 Markdown 方言，在 CommonMark 基础上增加表格、任务列表、删除线和自动链接等语法，编写 README 与 issue 时可据此查阅。<br>
  <span>`文档 / 教程`</span>

- [Obsidian Flavored Markdown](https://help.obsidian.md/obsidian-flavored-markdown) - Obsidian 的 Markdown 扩展，包含双向链接、嵌入引用、LaTeX 公式和 Mermaid 图表；将笔记迁移到其他工具前，应检查扩展语法的兼容性。<br>
  <span>`文档 / 教程`</span>

- [Pandoc's Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown) - Pandoc 使用的 Markdown 变体，支持表格、脚注和定义列表，适合需要将同一份文稿转换为 Word、PDF、EPUB 等格式的工作流。<br>
  <span>`文档 / 教程`</span>

- [R Markdown](https://github.com/rstudio/rmarkdown) - 在 Markdown 中嵌入 R 代码与运行结果，生成可重复计算的报告、幻灯片和网页，适合数据分析与研究写作。<br>
  <span>`开源` · `R`</span>

- [Quarkdown](https://github.com/iamgio/quarkdown) - 将函数、变量和脚本引入 Markdown 排版，可生成书籍、文章和演示文稿，适合需要程序化组织内容与布局的场景。<br>
  <span>`开源`</span>

## 写作与编辑环境

### 专业 Markdown 编辑器

先看你需要直接编辑源码、所见即所得，还是独立预览；再比较文档组织方式与导出能力。

- [Typora](https://typora.io/) - 将 Markdown 编辑与预览合在同一界面，支持大纲、全文检索以及 PDF、HTML、Word 导出，适合以文章和文档为主的桌面写作。<br>
  <span>`macOS` · `Windows` · `Linux` · [使用资料](https://github.com/mansucache/awesome-typora)</span>

  - [Typora Plugin](https://github.com/obgnail/typora_plugin) - 为 Typora 增加标签管理、文件搜索、自动编号和图表功能，适合需要在现有编辑器上扩展工作流的用户。<br>
    <span>`开源` · `Typora 扩展`</span>

  - [VLOOK](https://github.com/MadMaxChow/VLOOK) - 为 Typora 提供主题与增强功能，调整文档布局、内容导航和演示效果，适合需要统一文档呈现方式的写作者。<br>
    <span>`开源` · `Typora 扩展` · `macOS` · `Windows` · `Linux`</span>

- [mdedit.ai](https://mdedit.ai/) - 面向技术文档写作的 Markdown 工作区，集成实时预览、Mermaid 图表、AI 辅助写作、协作与发布。基础编辑免费，协作与 AI 功能按方案提供。<br>
  <span>`提供免费方案` · `macOS` · `Windows` · `Linux` · `Web`</span>

- [Bear](https://bear.app/) - 面向 Apple 设备的笔记应用，通过标签组织 Markdown 笔记并在设备间同步，适合将日常记录与文章素材放在一起管理。<br>
  <span>`macOS` · `iOS`</span>

- [Markdown Monster](https://github.com/RickStrahl/MarkdownMonster) - 面向 Windows 的 Markdown 编辑器，支持实时预览、Git 集成与博客发布；持续使用需要购买许可证。<br>
  <span>`Windows`</span>

- [Markor](https://github.com/gsantner/markor) - 在 Android 上编辑 Markdown、todo.txt 和 Zim 文本，支持离线使用，适合手机端记录笔记与维护纯文本清单。<br>
  <span>`开源` · `Android`</span>

- [MarkEdit](https://github.com/MarkEdit-app/MarkEdit) - 面向 macOS 的开源 Markdown 编辑器，可通过脚本和 CodeMirror 扩展定制，适合需要自行调整编辑行为的用户。<br>
  <span>`开源` · `macOS`</span>

- [轻阅 Markdown（Quillite Markdown）](https://github.com/liuhang798/quillite-markdown) - 以阅读为先的本地 Markdown 桌面应用，支持分栏编辑、图表、公式与文档导出。Windows 和 macOS 构建未签名；每日匿名活跃统计独立于产品改进计划开关。<br>
  <span>`开源` · `Windows` · `macOS` · `Linux` · [官网](https://qm.ssssa.cn/)</span>

- [Cmd Markdown](https://www.zybuluo.com/mdeditor) - 在浏览器中编辑和预览 Markdown，提供云端存储、版本历史及流程图等扩展语法，适合在线写作与文档整理。<br>
  <span>`提供免费方案` · `Web`</span>

- [Effie](https://www.effie.co/) - 将 Markdown 写作与思维导图结合，支持跨平台同步，适合先梳理思路再展开正文的写作过程。<!-- -->

- [iA Writer](https://ia.net/writer) - 围绕纯文本写作设计 Markdown 编辑环境，通过专注模式减少编辑时的干扰，适合以连续正文为主的写作。<br>
  <span>`macOS` · `Windows` · `iOS`</span>

- [Ulysses](https://ulysses.app/) - 面向 Apple 设备的写作应用，使用 Markdown XL 语法，支持 iCloud 同步与 PDF、Word、EPUB 导出；跨工具迁移时需留意其扩展语法。<br>
  <span>`macOS` · `iOS`</span>

- [MarkText](https://github.com/marktext/marktext) - 跨平台开源 Markdown 编辑器，支持实时预览和主题切换，适合需要桌面编辑界面的写作者。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux`</span>

- [StackEdit](https://github.com/benweet/stackedit) - 在浏览器中编辑 Markdown，并与 Google Drive、GitHub 等服务同步，适合围绕云端文件或仓库开展写作。<br>
  <span>`开源` · `Web`</span>

- [MacDown](https://github.com/MacDownApp/macdown) - 面向 macOS 的开源 Markdown 编辑器，支持实时预览和自定义渲染，适合需要调整预览效果的桌面写作。<br>
  <span>`开源` · `macOS`</span>

- [Marked 2](https://marked2app.com/) - 在 macOS 上预览与导出 Markdown，支持不同渲染引擎和自定义样式，可作为现有编辑器之外的预览工具。<br>
  <span>`macOS`</span>

- [MarkFlowy](https://github.com/drl990114/MarkFlowy) - 提供源码与所见即所得两种编辑模式，并支持 AI 辅助写作，适合需要在直接编辑文本与可视化写作间切换的用户。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux`</span>

- [mkeditor](https://github.com/versyxdigital/mkeditor) - 提供桌面与网页 Markdown 编辑环境，遵循 CommonMark 规范并支持深浅色模式，适合希望围绕标准语法写作的用户。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux` · `Web`</span>

- [PanWriter](https://github.com/mb21/panwriter) - 集成 Pandoc，并在预览中显示页面布局，适合需要同时关注正文内容与分页效果的文档写作。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux`</span>

- [Quillpad](https://github.com/quillpad/quillpad) - 面向 Android 的开源笔记应用，支持 Markdown、任务列表与附件，适合将手机端笔记和待办放在一起记录。<br>
  <span>`开源` · `Android`</span>

- [Ghostwriter](https://github.com/KDE/ghostwriter) - 提供专注模式、Hemingway 模式及文档导出的 Markdown 编辑器。官方下载以 Windows 和 Linux 为主，macOS 需另行配置构建。<br>
  <span>`开源` · `Windows` · `Linux`</span>

### 笔记与知识管理软件

关注内容保存方式、链接组织与迁移能力。以 Markdown 输入内容，并不意味着笔记以 .md 文件保存。

- [Persona](https://github.com/jayamitkatariya/personacli) - 将笔记、任务和 AI 聊天整合到本地个人工作空间，以 Markdown 文件保存内容，无需账号即可组织个人资料。<br>
  <span>`开源` · `CLI`</span>

- [Obsidian](https://obsidian.md/) - 以本地 Markdown 笔记为基础，通过双向链接和知识图谱连接内容，适合长期积累资料并建立笔记之间的关系。<br>
  <span>`提供免费方案` · `macOS` · `Windows` · `Linux` · `Android` · `iOS`</span>

- [Notion](https://www.notion.com/) - 将笔记、任务、数据库与项目管理组织在同一工作空间，编辑时可使用 Markdown 语法；选型时应分别确认输入语法与文件导出能力。<br>
  <span>`提供免费方案` · `macOS` · `Windows` · `Android` · `iOS` · `Web`</span>

- [AFFiNE](https://github.com/toeverything/AFFiNE) - 将文档、白板和数据库整合到本地优先的开源工作空间，适合需要在文字与可视化整理之间切换的知识管理。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux` · `Web`</span>

- [语雀](https://www.yuque.com/) - 以文档和知识库组织团队资料，适合建立有层次的内容目录并协作维护；迁移 Markdown 文档前需确认导入导出的范围。<!-- -->

- [有道云笔记](https://note.youdao.com/) - 提供跨平台笔记与 Markdown 写作，结合 AI 创作、润色和摘要功能，适合随手记录与后续整理。<!-- -->

- [印象笔记](https://www.yinxiang.com/) - 结合 Markdown 编辑、实时预览与跨设备同步，并支持收集网页和微信文章，适合围绕外部资料积累笔记。<!-- -->

- [Memos](https://github.com/usememos/memos) - 可自托管的开源笔记应用，通过 Markdown、标签和全文搜索管理短记录，适合持续积累零散想法。<br>
  <span>`开源` · `Web`</span>

- [Logseq](https://github.com/logseq/logseq) - 以大纲组织笔记，结合双向链接、PDF 标注和白板连接资料；不同版本的存储与迁移方式应分别确认。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux` · `Android`</span>

- [思源笔记](https://github.com/siyuan-note/siyuan) - 以内容块为单位组织和引用笔记，提供双向链接与所见即所得编辑，适合需要复用段落和关联资料的用户。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux`</span>

- [VNote](https://github.com/vnotex/vnote) - 基于 Qt 的 Markdown 笔记应用，提供语法高亮、实时预览和全文检索，适合在桌面环境中集中管理文档。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux`</span>

- [Zettlr](https://github.com/Zettlr/Zettlr) - 面向学术写作与 Zettelkasten 笔记法，集成引文管理和多格式导出，适合同时处理笔记、参考文献与长文稿。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux`</span>

- [NoteGen](https://github.com/codexu/note-gen) - 将碎片信息整理为 Markdown 笔记，结合 AI、GitHub 同步和 RAG，适合需要从记录继续检索和生成内容的用户。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux` · `Android` · `iOS`</span>

- [妙言](https://github.com/tw93/MiaoYan) - 面向 macOS 的 Markdown 笔记应用，支持深色模式、PPT 模式、LaTeX 与 Mermaid，适合包含公式和图表的日常写作。<br>
  <span>`开源` · `macOS`</span>

- [Yank Note](https://github.com/purocean/yn) - 基于 Monaco 编辑器，支持代码块运行与 AI Copilot，适合将代码、说明文字和运行结果放在同一份笔记中。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux`</span>

- [QOwnNotes](https://github.com/pbek/QOwnNotes) - 以 Markdown 纯文本保存笔记和待办，可与 Nextcloud 等服务同步，适合已有文件同步环境的用户。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux`</span>

- [MindForger](https://github.com/dvorka/mindforger) - 将 Markdown 编辑器与知识图谱导航结合，适合通过笔记关系浏览和整理个人知识。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux`</span>

- [Joplin](https://github.com/laurent22/joplin) - 开源 Markdown 笔记应用，支持端到端加密与多种同步服务，适合需要跨设备使用并管理同步方式的用户。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux` · `Android` · `iOS`</span>

- [Inkdrop](https://www.inkdrop.app/) - 面向开发者的 Markdown 笔记应用，支持端到端加密和插件定制，适合积累技术笔记并扩展编辑环境。<br>
  <span>`macOS` · `Windows` · `Linux` · `Android` · `iOS`</span>

- [Tangent Notes](https://www.tangentnotes.com/) - 以本地 Markdown 文件保存内容，通过可视化思维分支组织阅读和写作路径，适合沿着笔记关联展开探索。<br>
  <span>`开源` · `提供免费方案` · `macOS` · `Windows` · `Linux`</span>

- [ima.copilot](https://ima.qq.com/) - AI 知识工作空间，可将 Markdown 文件导入为可编辑笔记，并围绕收集的资料进行问答与写作。<br>
  <span>`Web`</span>

- [Notable](https://github.com/notable/notable) - 基于 Markdown 的笔记应用，提供类似 VS Code 的编辑界面和嵌套标签；官方说明只有旧版本开源。<br>
  <span>`macOS` · `Windows` · `Linux`</span>

- [Khoj](https://github.com/khoj-ai/khoj) - 从 Markdown 笔记中进行语义搜索并回答问题，支持本地或云端对话，适合为已有笔记增加 AI 检索入口。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux` · `Android` · `Obsidian 插件`</span>

- [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) - 结合笔记、项目与数据库的开源工作空间，支持 Markdown 文档导入导出；数据库使用 CSV 导出。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux` · `Android` · `iOS`</span>

### 长篇写作

重点比较章节组织、大纲、历史版本与最终导出格式。

- [novelWriter](https://github.com/saga-soft/novelWriter) - 为小说和长篇文稿提供大纲、元数据与注释，使用受 Markdown 启发的语法；采用前需确认与标准 Markdown 的差异。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux`</span>

- [WonderPen（妙笔）](https://www.tominlab.com/wonderpen) - 通过树状目录组织长篇文稿，支持 Markdown、云同步和文档快照，适合按章节展开并反复修改的写作。<br>
  <span>`macOS` · `Windows` · `Linux`</span>

## 办公与协作工具

### 文档协同

先确认协作与权限需求，再核对 Markdown 是输入语法、导入导出格式，还是实际保存格式。

- [飞书文档](https://www.feishu.cn/product/docs) - 协作云文档，可通过「下载为」导出 Markdown；导出保留正文结构，不包含评论。<br>
  <span>`Web`</span>

- [企业微信文档](https://doc.weixin.qq.com/) - 企业微信中的协作文档；智能文档可通过企业微信 CLI 导入 Markdown/MDX。<br>
  <span>`Web`</span>

- [石墨文档](https://shimo.im/) - 提供云端文档协作，团队空间支持 Markdown 文件预览；预览能力不等同于原生 Markdown 编辑与导出。<br>
  <span>`Web`</span>

- [腾讯文档](https://docs.qq.com/) - 在线协作文档；企业版 SaaS 的在线文档可通过专业工具栏使用基础 Markdown 格式。<br>
  <span>`Web`</span>

- [Confluence](https://www.atlassian.com/software/confluence) - 面向团队知识库和技术文档，支持将基础 Markdown 输入转换为富文本，适合已有 Atlassian 工作流的团队。<br>
  <span>`Web`</span>

- [Boardmix（博思白板）](https://boardmix.com/) - 协作白板，可导入 Markdown 文档并通过 AI 生成演示文稿。<br>
  <span>`Web`</span>

- [Jupyter](https://github.com/jupyter/jupyter) - 在交互式文档中组合代码、Markdown、LaTeX 公式和可视化结果，适合数据探索、研究记录与代码教学。<br>
  <span>`开源` · `跨平台`</span>

- [HedgeDoc](https://github.com/hedgedoc/hedgedoc) - 可自托管的协作式 Markdown 编辑器，支持多人实时编辑、图表和幻灯片模式，适合团队共同维护 Markdown 文档。<br>
  <span>`开源` · `Web`</span>

- [ONLYOFFICE DesktopEditors](https://github.com/ONLYOFFICE/DesktopEditors) - 桌面办公套件，可通过 Doc2md 插件将格式化文档转换为 Markdown 或 HTML。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux`</span>

- [Seafile](https://github.com/haiwen/seafile) - 提供文件同步、团队协作与支持 Markdown 的文档工具，适合围绕共享文件建立团队资料库。<br>
  <span>`开源`</span>

### 思维导图

区分由文字自动生成图形，与可继续手动编辑并导出的导图应用。

- [markmap](https://github.com/markmap/markmap) - 将 Markdown 标题与列表层级转换为交互式思维导图，提供 Web、CLI 和编辑器插件入口，适合直接复用已有大纲。<br>
  <span>`开源` · `VS Code 扩展` · `Obsidian 插件`</span>

- [XMind](https://xmind.com/) - 通过 Markdown 导入导出在文字大纲与思维导图之间转换，适合需要继续调整图形结构的用户。<br>
  <span>`提供免费方案` · `macOS` · `Windows` · `Linux` · `Android` · `iOS`</span>

- [Drawnix](https://github.com/plait-board/drawnix) - 基于 Plait 的开源白板，可将 Markdown 转为思维导图、Mermaid 转为流程图，适合将文本结构带入白板继续整理。<br>
  <span>`开源` · `Web`</span>

### 幻灯片

先确定最终需要网页、PDF、PPTX 还是终端演示，再选择制作工具。

- [Slidev](https://github.com/slidevjs/slidev) - 面向开发者的 Markdown 幻灯片工具，支持代码高亮、绘图与 LaTeX，适合技术演讲和代码讲解。<br>
  <span>`开源`</span>

- [reveal.js](https://github.com/hakimel/reveal.js) - 通过 HTML 与 Markdown 制作演示文稿，支持垂直嵌套、演讲者注释和 PDF 导出，适合需要定制网页演示效果的用户。<br>
  <span>`开源`</span>

- [Marp](https://github.com/marp-team/marp) - 以 Markdown 编写幻灯片，支持代码高亮、数学公式以及 PDF、PPTX 导出，适合从文本源文件生成演示交付物。<br>
  <span>`开源`</span>

- [presenterm](https://github.com/mfontanini/presenterm) - 在终端中播放 Markdown 幻灯片，支持代码高亮、Mermaid 与 LaTeX，适合围绕命令行开展技术演示。<br>
  <span>`开源` · `CLI`</span>

- [mdp](https://github.com/visit1985/mdp) - 以水平线分隔 Markdown 幻灯片并在终端展示，适合以文字为主的命令行演讲。<br>
  <span>`开源` · `CLI`</span>

- [deck](https://github.com/k1LoW/deck) - 通过命令行将 Markdown 转为 Google Slides，适合需要在 Google Slides 中继续协作的演示流程。<br>
  <span>`开源` · `CLI`</span>

### 便签与清单

先看记录与任务管理是否顺手；需要迁移时，单独确认 Markdown 导出能力。

- [锤子便签](https://cloud.smartisan.com/apps/note/md.html) - 支持 Markdown 排版并将笔记生成长图，适合把简短内容整理成可分享的图片。<br>
  <span>`提供免费方案` · `Web` · `Android` · `iOS`</span>

- [滴答清单](https://dida365.com/webapp) - 结合待办、日历和习惯追踪，任务详情支持 Markdown 排版，适合为任务补充结构化说明。<br>
  <span>`提供免费方案` · `跨平台`</span>

- [Tasks.md](https://github.com/BaldissaraMatheus/Tasks.md) - 以 Markdown 文件保存任务，通过自托管看板管理进度，适合希望保留文本文件工作流的任务管理。<br>
  <span>`开源`</span>

## 网站生成与排版

### 静态网站

本节包含静态构建工具与浏览器动态加载工具。按构建环境、主题需求和交互能力选择。

- [Docsify](https://github.com/docsifyjs/docsify) - 在浏览器中将 Markdown 加载为文档网站，无需预先构建页面，支持主题、搜索和插件，适合快速组织在线文档。<br>
  <span>`开源`</span>

- [MkDocs](https://github.com/mkdocs/mkdocs) - 从 Markdown 构建项目文档网站，可通过主题与插件扩展，适合围绕文档目录持续维护技术资料。<br>
  <span>`开源`</span>

- [Zola](https://github.com/getzola/zola) - 以 Rust 编写并提供单个可执行文件的静态网站生成器，内置 Sass、图片处理与本地搜索，适合需要集中管理构建工具的站点。<br>
  <span>`开源`</span>

- [VitePress](https://github.com/vuejs/vitepress) - 基于 Vite 与 Vue 构建文档网站，允许在 Markdown 中使用 Vue 组件，适合需要在说明文档中嵌入交互内容的项目。<br>
  <span>`开源` · `Vue`</span>

- [Hugo](https://github.com/gohugoio/hugo) - 基于 Go 的静态网站生成器，提供主题和短代码系统，适合通过 Markdown 持续发布博客与内容站点。<br>
  <span>`开源`</span>

- [Jekyll](https://github.com/jekyll/jekyll) - 基于 Ruby 的静态网站生成器，可用于 GitHub Pages，适合通过仓库维护 Markdown 内容并生成网站。<br>
  <span>`开源`</span>

- [Hexo](https://github.com/hexojs/hexo) - 基于 Node.js 的博客框架，支持 GFM、插件主题及 GitHub Pages 部署，适合以 Markdown 持续写博客。<br>
  <span>`开源`</span>

- [Pelican](https://github.com/getpelican/pelican) - 基于 Python 的静态网站生成器，支持多语言、Jinja2 主题和 RSS/Atom，适合需要内容订阅与模板定制的博客。<br>
  <span>`开源`</span>

- [Docusaurus](https://github.com/facebook/docusaurus) - 基于 React 与 MDX 的文档网站生成器，提供版本管理、国际化和搜索，适合长期维护多个版本或语言的项目文档。<br>
  <span>`开源` · `React`</span>

### 电子书

本节同时收录书稿生成与阅读管理工具；需要出版文件时，先核对输出格式。

- [mdBook](https://github.com/rust-lang/mdBook) - 通过命令行将 Markdown 章节生成在线书籍，集成搜索与代码高亮，适合技术教程和按章节阅读的文档。<br>
  <span>`开源` · `CLI`</span>

- [HonKit](https://github.com/honkit/honkit) - 从 Markdown 生成网站、PDF 或电子书，延续 GitBook 的工具链思路，适合维护已有的 Markdown 书稿。<br>
  <span>`开源` · `CLI`</span>

- [GitBook](https://github.com/GitbookIO/gitbook) - 基于其平台发布的文档网站的开源渲染前端，基于 Next.js；该仓库不等同于完整的在线创作平台，也不是旧版电子书构建 CLI。<br>
  <span>`开源` · `Node.js`</span>

- [bookdown](https://github.com/rstudio/bookdown) - 基于 R Markdown 编写书籍，支持 PDF、HTML、EPUB 与 Word 输出，适合包含分析代码和研究结果的长篇出版。<br>
  <span>`开源` · `R`</span>

- [Crowbook](https://github.com/crowdagger/crowbook) - 面向小说的书稿生成工具，可将 Markdown 转为 HTML、LaTeX/PDF 和 EPUB，适合从文本章节构建多格式版本。<br>
  <span>`开源` · `CLI`</span>

- [Koodo Reader](https://github.com/koodo-reader/koodo-reader) - 阅读 EPUB、PDF 和 Markdown 等文件，提供云同步与 AI 辅助阅读，适合集中管理不同格式的阅读材料。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux`</span>

- [calibre](https://github.com/kovidgoyal/calibre) - 电子书管理与转换工具，可通过 TXT 输入选项处理 Markdown，包括 ebook-convert 的 --formatting-type markdown 参数。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux`</span>

- [lue](https://github.com/paulilaaso/lue) - 在终端阅读 EPUB、PDF 与 Markdown 等文档，支持文本转语音和进度保存；Windows 通过 WSL 使用。<br>
  <span>`开源` · `CLI` · `macOS` · `Linux` · `Windows / WSL`</span>

### 模板

先确认目标编辑器与导出方式，再套用模板。

- [LapisCV](https://github.com/BingyanStudio/LapisCV) - 使用 Markdown 编写简历，并在 VS Code、Typora 或 Obsidian 中导出 PDF，适合通过文本持续维护简历内容。<br>
  <span>`开源`</span>

### 公众号

关注复制到目标平台后的排版、图片与代码块表现。

- [WeChat Markdown Editor(md)](https://github.com/doocs/md) - 将 Markdown 排版为微信图文，支持主题定制、图床与 AI 助手，适合将已有文稿整理为公众号内容。<br>
  <span>`开源` · `Web`</span>

- [Markdown Nice](https://editor.mdnice.com/) - 浏览器 Markdown 编辑器，可套用主题并将排版后的文章复制到微信公众号。<br>
  <span>`Web`</span>

## 编码与开发工具

### 编程工具

独立 IDE 与编辑器扩展分开列出。围绕现有开发环境选择，减少文档与代码之间的切换。

- [VS Code](https://github.com/microsoft/vscode) - 在代码工作区中编写和预览 Markdown，通过扩展增加导航、排版与发布功能；链接仓库为 Code - OSS。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux`</span>

  - [Foam](https://github.com/foambubble/foam) - 在 VS Code 与 GitHub 工作流中使用双向链接和知识图谱组织笔记，适合围绕文本仓库维护个人知识。<br>
    <span>`开源` · `VS Code 扩展`</span>

  - [Markdown All in One](https://github.com/yzhang-gh/vscode-markdown) - 为 VS Code 增加 Markdown 编辑快捷键、目录生成、预览等功能，适合减少文档编辑中的重复操作。<br>
    <span>`开源` · `VS Code 扩展`</span>

  - [Marp for VS Code](https://github.com/marp-team/marp-vscode) - 在 VS Code 中编写和预览 Markdown 幻灯片，并导出 PDF、PPTX 与 HTML，适合在开发环境中制作演示文稿。<br>
    <span>`开源` · `VS Code 扩展`</span>

- [Trae](https://www.trae.cn/) - AI 开发环境，SOLO 文档工具可生成和编辑 Markdown 项目文档；中国版现将编码产品标为 TraeCode。<br>
  <span>`macOS` · `Windows` · `Linux`</span>

- [Cursor](https://cursor.com/) - 将 AI 聊天、补全和重写融入代码编辑环境，适合在项目上下文中处理代码与说明文档；Markdown 扩展能力需按工作流确认。<br>
  <span>`macOS` · `Windows` · `Linux`</span>

- [RStudio](https://github.com/rstudio/rstudio) - 面向 R 的开发环境，集成 R Markdown，可生成可复现的报告、幻灯片与网页，适合将分析过程与文字说明共同维护。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux` · `R`</span>

### 代码片段管理

比较存储位置、分类方式以及代码与说明文字能否共同维护。

- [massCode](https://github.com/massCodeIO/massCode) - 本地优先的开发者工作空间，将代码片段、Markdown 笔记等工具放在一起，内容以纯文本文件保存。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux`</span>

- [Lepton](https://github.com/hackjutsu/Lepton) - 围绕 GitHub Gist 管理代码片段，支持 Markdown 渲染和 Jupyter Notebook，适合已有 Gist 收藏与分享习惯的开发者。<br>
  <span>`开源` · `macOS` · `Windows` · `Linux`</span>

### 开发组件

先区分要接入的是编辑界面、Markdown 解析、HTML 转换还是流式渲染；它们承担不同环节。

- [Milkdown](https://github.com/Milkdown/milkdown) - 基于 ProseMirror 与 remark 的所见即所得 Markdown 编辑器，适合在应用中接入并扩展编辑体验。<br>
  <span>`开源` · `JavaScript`</span>

- [Rich](https://github.com/Textualize/rich) - 在 Python 终端应用中渲染 Markdown、表格与进度条，适合为 CLI 工具提供结构化输出。<br>
  <span>`开源` · `Python`</span>

- [Marked.js](https://github.com/markedjs/marked) - 在浏览器、服务器或命令行将 Markdown 解析为 HTML 的 JavaScript 工具；输出不会自动进行 HTML 安全清理。<br>
  <span>`开源` · `JavaScript`</span>

- [Vditor](https://github.com/Vanessa219/vditor) - 浏览器端 Markdown 编辑器，提供所见即所得、即时渲染和分屏预览三种模式，并支持脑图与流程图，适合需要多种编辑模式的网页应用。<br>
  <span>`开源` · `JavaScript`</span>

- [Cherry Markdown Writer](https://github.com/Tencent/cherry-markdown) - 腾讯开源的 JavaScript Markdown 编辑器，支持浏览器和 Node.js 环境，提供主题与安全过滤能力，适合接入文档编辑场景。<br>
  <span>`开源` · `JavaScript`</span>

- [md-editor-v3](https://github.com/imzbf/md-editor-v3) - 面向 Vue 3 的 Markdown 编辑器组件，支持实时预览、深色主题和图片粘贴上传，适合在 Vue 应用中增加文档编辑入口。<br>
  <span>`开源` · `Vue`</span>

- [markdown-it](https://github.com/markdown-it/markdown-it) - 可扩展的 JavaScript Markdown 解析器，遵循 CommonMark 并提供插件 API，适合需要定制语法与渲染行为的应用。<br>
  <span>`开源` · `JavaScript`</span>

- [OverType](https://github.com/panphora/overtype) - 通过在预览层上叠加输入区域实现 Markdown 编辑，适合希望采用这种编辑交互方式的网页项目。<br>
  <span>`开源` · `JavaScript`</span>

- [Turndown](https://github.com/mixmark-io/turndown) - 将 HTML 转为 Markdown 的 JavaScript 工具，兼容 CommonMark 并支持输出定制，适合在应用中实现内容导入。<br>
  <span>`开源` · `JavaScript`</span>

- [Markdown UI](https://github.com/BlueprintLabIO/markdown-ui) - 通过 Markdown 描述按钮、下拉菜单和表单等交互组件，适合需要让文档承载操作入口的应用。<br>
  <span>`开源` · `JavaScript`</span>

- [Markstream](https://github.com/Simon-He95/markstream-vue) - 面向 AI 输出的流式 Markdown 渲染组件系列，按框架选用对应包；链接仓库中的 markstream-vue 面向 Vue 3 与 Nuxt。<br>
  <span>`开源` · `Vue` · `React` · `Svelte`</span>

- [Editor.md](https://github.com/pandao/editor.md) - 基于 CodeMirror、jQuery 与 Marked 的网页 Markdown 编辑器组件，支持实时预览、流程图和数学公式，接入时需考虑现有依赖。<br>
  <span>`开源` · `JavaScript`</span>

- [Markdown Here](https://github.com/adam-p/markdown-here) - 在 Chrome、Firefox 和 Thunderbird 等环境中，将输入的 Markdown 渲染为富文本，适合邮件与网页编辑场景。<br>
  <span>`开源`</span>

## 转换工具

先明确输入与输出。格式转换不保证版式完整保留，批量处理前应试转具有代表性的文件。

- [pandoc](https://github.com/jgm/pandoc) - 在 Markdown、HTML、PDF、Word 等文档格式之间转换，适合通过命令行组织多格式发布流程；复杂版式的转换效果需用实际文档检查。<br>
  <span>`开源` · `CLI`</span>

  - [Eisvogel](https://github.com/Wandmalfarbe/pandoc-latex-template) - 用于 Pandoc 的 LaTeX 模板，将 Markdown 输出为 PDF 或 LaTeX，适合需要统一文档版式的报告与手册。<br>
    <span>`开源`</span>

  - [patat](https://github.com/jaspervdj/patat) - 基于 Pandoc 在终端展示演示文稿，支持代码高亮和演讲者笔记，适合已有 Pandoc 工作流的命令行演示。<br>
    <span>`开源`</span>

### 转成 Markdown

按输入格式与运行方式选择，再用样例核对标题、表格、图片和公式。

- [doc2md](https://github.com/sakuraqqq/doc2md) - 在浏览器本地将 PDF、DOCX、XLSX、图片、TXT 和 HTML 转为 Markdown，无需上传文件，并支持 OCR。离线使用需先缓存资源；复杂 PDF 的表格与版式可能无法完整保留。<br>
  <span>`开源` · `Web` · `PWA` · [在线使用](https://sakuraqqq.github.io/doc2md/)</span>

- [feishu2md](https://github.com/Wsine/feishu2md) - 通过 Go 命令行工具将飞书或 Lark 文档下载为 Markdown，提供 Docker 等使用方式；项目目前在寻找维护者。<br>
  <span>`开源` · `CLI`</span>

- [noted.md](https://github.com/tejas-raskar/noted.md) - 通过 LLM 将手写笔记 PDF 与图片转为 Markdown，并将数学公式识别为 LaTeX，适合整理手写资料；采用前需确认模型配置与数据处理方式。<br>
  <span>`开源` · `CLI`</span>

- [MarkItDown](https://github.com/microsoft/markitdown) - 微软开源的 Python 工具，将 PDF、Word、Excel 等转换为 Markdown，面向文本分析与 LLM 流程，不以原始版式的高保真还原为目标。<br>
  <span>`开源` · `CLI` · `Python`</span>

- [Jupytext](https://github.com/jupytext/jupytext) - 将 Jupyter Notebook 与 Markdown 等纯文本格式衔接，适合通过 Git 查看差异并维护 Notebook 内容。<br>
  <span>`开源` · `CLI`</span>

- [keep-it-markdown (KIM)](https://github.com/djsudduth/keep-it-markdown) - 通过非官方 Google Keep API 导出笔记为 Markdown，适合迁移到其他笔记工具；接入时需考虑上游 API 的变化。<br>
  <span>`开源` · `CLI`</span>

- [YARLE (Yet Another RLE)](https://github.com/akosbalasko/yarle) - 将 Evernote 的 .enex 导出文件转为 Markdown，处理元数据、内部链接与附件，适合迁移已有笔记库。<br>
  <span>`开源` · `CLI`</span>

- [Trafilatura](https://github.com/adbar/trafilatura) - 从网页中提取正文与元数据，可输出 Markdown、JSON、CSV 和 HTML，适合批量准备网页文本资料。<br>
  <span>`开源` · `CLI` · `Python`</span>

- [Zotero Better Notes](https://github.com/windingwind/zotero-better-notes) - 在 Zotero 中通过 Markdown、模板和文献资料生成笔记，并导出为 Markdown、Word 或 PDF，适合连接文献管理与写作。<br>
  <span>`开源`</span>

- [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) - 基于 Go 将 HTML 结构转为 Markdown，适合在程序或批处理流程中转换网页内容。<br>
  <span>`开源` · `Go` · `CLI`</span>

### 转成图片

单次制作关注排版预览，批量生成关注 API、部署方式与主题定制。

- [MD2Card](https://md2card.com/zh) - 在浏览器中将 Markdown 排成知识卡片，提供多种风格与 API，适合将短内容制作成可分享的图片。<br>
  <span>`Web`</span>

- [Markdown To Image](https://github.com/gcui-art/markdown-to-image) - 将 Markdown 渲染为海报图片的 React 组件，并提供示例网页编辑器，支持定制样式与主题。<br>
  <span>`开源` · `React` · `Web`</span>

- [Markdown To Image Serve](https://github.com/wxingheng/markdown-to-image-serve) - 基于 Next.js 与 Puppeteer 的 Markdown 转图片服务，提供 API 和 Docker 部署，适合批量生成内容图片。<br>
  <span>`开源` · `API` · `Node.js`</span>

## 其他工具

### 命令行工具

按阅读、查询、笔记管理和格式转换等具体操作选择。

- [mdq](https://github.com/yshavit/mdq) - 像使用 jq 查询 JSON 一样查询 Markdown，可提取标题、代码块、链接和表格，适合在脚本中处理文档结构。<br>
  <span>`开源` · `CLI` · `macOS` · `Windows` · `Linux`</span>

- [Glow](https://github.com/charmbracelet/glow) - 在终端阅读 Markdown，并发现本地或 Git 仓库中的文档，适合不离开命令行查看 README 与说明文件。<br>
  <span>`开源` · `CLI` · `macOS` · `Windows` · `Linux`</span>

- [nb](https://github.com/xwmx/nb) - 在命令行与本地网页中管理纯文本笔记，支持 Markdown、Git 和加密；Windows 需通过 WSL、MSYS 或 Cygwin 等环境使用。<br>
  <span>`开源` · `CLI` · `macOS` · `Linux` · `Windows / Unix 环境`</span>

- [doxx](https://github.com/bgreenwell/doxx) - 在终端查看 .docx 文件，并导出为 Markdown、CSV 或 JSON，适合在命令行工作流中读取 Word 内容。<br>
  <span>`开源` · `CLI` · `macOS` · `Windows` · `Linux`</span>

### 检查与辅助

格式检查、自然语言检查和编辑器导航分别解决不同问题，可以按需组合。

- [markdownlint](https://github.com/DavidAnson/markdownlint) - 检查 Markdown 的语法与风格，可接入 Node.js 工作流和编辑器，适合统一团队文档格式。<br>
  <span>`开源` · `Node.js`</span>

- [textlint](https://github.com/textlint/textlint) - 通过规则检查自然语言文本中的语法、拼写和风格问题，适合为文档建立可重复执行的写作检查。<br>
  <span>`开源` · `CLI` · `Node.js`</span>

- [Marksman](https://github.com/artempyanykh/marksman) - 通过 LSP 为 Markdown 提供补全、跳转和 wiki 链接支持，适合为兼容 LSP 的编辑器增加文档导航能力。<br>
  <span>`开源`</span>

### AI 相关工具

区分内容生成与资料提取，并确认模型、API 或部署依赖。

- [ReadmeAI](https://github.com/eli64s/readme-ai) - 根据仓库地址或本地路径生成 README 草稿，适合为项目说明建立初稿；功能、安装步骤与示例仍需按项目实际情况核对。<br>
  <span>`开源`</span>

- [Firecrawl](https://github.com/firecrawl/firecrawl) - 通过 API 抓取网页并输出 Markdown 或结构化数据，适合为 AI 应用和检索流程准备网页内容。<br>
  <span>`开源` · `API`</span>

- [ScrapeGraphAI](https://github.com/ScrapeGraphAI/Scrapegraph-ai) - 基于 LLM 和图流程提取网页信息，可通过 Markdownify 将网页转为 Markdown，适合需要模型参与内容提取的流程。<br>
  <span>`开源` · `Python`</span>

## 书籍

适合希望按章节学习 Markdown 与相关工作流的读者。

- [《了不起的 Markdown：大语言模型时代的通用语言》](https://book.douban.com/subject/37478156/) - 介绍 Markdown 写作及其在大语言模型时代的应用，并涉及 Obsidian，适合希望通过中文书籍系统了解相关工作流的读者。<br>
  <span>`文档 / 教程`</span>

## 参与完善

欢迎通过 [Issue](https://github.com/mansucache/awesome-markdown/issues/new/choose) 推荐工具、纠正信息或分享实际使用体验。推荐时请说明解决的问题，以及与已有工具的区别；提交修改前请阅读[贡献指南](contributing.zh-CN.md)。

## 更新

查看[更新记录](CHANGELOG.md)，或[订阅提交记录（Atom）](https://github.com/mansucache/awesome-markdown/commits/main.atom)。

本清单采用 [CC0-1.0](LICENSE)。收录工具各自遵循其许可证。
