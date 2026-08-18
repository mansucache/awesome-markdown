# Awesome Markdown [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<p align="center">
  <img src="./imgs/logo.svg" width="104">
  <p align="center">
    <a href="https://github.com/mansucache/awesome-markdown/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/mansucache/awesome-markdown?style=flat-square" alt="License">
    </a>
    <a href="https://github.com/mansucache/awesome-markdown/stargazers">
      <img src="https://img.shields.io/github/stars/mansucache/awesome-markdown?style=flat-square" alt="Stars">
    </a>
    <a href="https://github.com/mansucache/awesome-markdown/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/mansucache/awesome-markdown?style=flat-square" alt="Contributors">
    </a>
    <a href="https://github.com/mansucache/awesome-markdown/pulls">
      <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
    </a>
  </p>
</p>

语言 / Language：[简体中文](README.md) | [English](readme.en.md)

Markdown 是一种简单易学的轻量级标记语言，它让排版变得轻松、高效，让你能够专注写作。从简单的笔记、博客文章到复杂的项目文档，甚至是知识管理，Markdown 都是你的理想工具。



项目地址：https://github.com/mansucache/awesome-markdown



本项目精心整理了关于 **Markdown 的扩展语法、专业软件、高效工具和最佳实践**，旨在成为你的一站式 Markdown 资源库。

欢迎通过 [Issue](https://github.com/mansucache/awesome-markdown/issues)  推荐你喜欢的 Markdown 工具或资源，让我们一起完善这个项目！

## Contents

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
  - [转成图片](#转成图片)
- [其他工具](#其他工具)
  - [命令行工具](#命令行工具)
  - [检查与辅助](#检查与辅助)
  - [AI 相关工具](#ai-相关工具)
- [书籍](#书籍)

---

#### 图标说明

![](./imgs/github.svg) 表示 **开源软件**，单击名称可进入 **开源** 仓库；<br>![](./imgs/free.svg) 表示 **免费** 使用，或者个人 **免费**，或大部分功能 **免费**。<br>![](./imgs/doc.svg) 表示 **教程**，单击图标可打开 教程 地址。

---

#### 平台支持

![](./imgs/mac.svg) = **macOS**   ![](./imgs/windows.svg) =  **Windows** ![](./imgs/linux.svg) =  **Linux**  ![](./imgs/iphone.svg) =  **iPhone** ![](./imgs/android.svg) =  **Android** ![](./imgs/web.svg) = Web ![](./imgs/all.svg) =  **全平台**

#### 工具支持

![](./imgs/obsidian.svg) = Obsidian ![](./imgs/vscode.svg) = VS code  ![](./imgs/typora.svg)= Typora  ![](./imgs/terminal.svg) = 命令行工具



## 语法规范与扩展

> 为 Markdown 语言增加新功能或提供清晰规范的扩展语法。

- [CommonMark](https://commonmark.org/) - 为 Markdown 语法提供清晰、无歧义的规范，通过统一的规则和测试套件保证不同解析器间的一致性呈现。![](./imgs/github.svg)
- [GFM (GitHub Flavored Markdown)](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) - GitHub 平台使用的 Markdown 方言，是 CommonMark 的严格超集，增加了表格、任务列表、删除线、自动链接等扩展。![](./imgs/doc.svg)
- [Obsidian Flavored Markdown](https://help.obsidian.md/obsidian-flavored-markdown) - Obsidian 采用的 Markdown 变体，在 CommonMark 和 GFM 基础上增加了双向链接、嵌入引用、LaTeX 公式和 Mermaid 图表。![](./imgs/doc.svg)
- [Pandoc's Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown) - 基于 John Gruber 原始语法的 Markdown 变体，支持表格、脚注和定义列表，可转换到 Word、PDF、ePub 等格式。![](./imgs/doc.svg)
- [R Markdown](https://github.com/rstudio/rmarkdown) - 一个 R 语言包，可在 Markdown 文档中嵌入 R 代码及其输出，创建动态、可重复的报告、幻灯片和网页。![](./imgs/github.svg)
- [Quarkdown](https://github.com/iamgio/quarkdown) - 在 CommonMark 和 GFM 基础上引入函数、变量和脚本等图灵完备扩展的现代化 Markdown 排版系统，可编译为书籍、文章和演示文稿。![](./imgs/github.svg)

## 写作与编辑环境

### 专业 Markdown 编辑器

> 这些编辑器提供流畅、高效的 Markdown 写作体验。

- [Typora](https://typora.io/) - 一款所见即所得的 Markdown 编辑器，支持大纲视图、全文检索和多格式导出（PDF、HTML、Word）。![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) [![](./imgs/doc.svg)](https://github.com/mansucache/awesome-typora)
  - [Typora Plugin](https://github.com/obgnail/typora_plugin) - 为 Typora 设计的系列插件，提供标签管理、文件搜索、自动编号和图表支持等功能。![](./imgs/github.svg)
  - [VLOOK](https://github.com/MadMaxChow/VLOOK) - 专为 Typora 设计的主题包和增强插件，提供丰富的文档布局、内容导航和演示辅助。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

- [Bear](https://bear.app/) - 一款 Apple 生态的 Markdown 笔记应用，以强大的标签系统、优雅的界面和无缝同步而闻名。![](./imgs/mac.svg) ![](./imgs/iphone.svg)
- [Markdown Monster](https://github.com/RickStrahl/MarkdownMonster) - 一款功能丰富的 Windows 专属 Markdown 编辑器，支持语法高亮、实时预览、Git 集成和博客发布。![](./imgs/github.svg)![](./imgs/windows.svg)
- [Markor](https://github.com/gsantner/markor) - 一款轻量级的 Android 文本编辑器，支持 Markdown、todo.txt 和 Zim，可完全离线使用并支持加密。![](./imgs/github.svg) ![](./imgs/android.svg)
- [MarkEdit](https://github.com/MarkEdit-app/MarkEdit) - 一款简洁、快速的开源 macOS Markdown 编辑器，可通过脚本和 CodeMirror 扩展定制。![](./imgs/github.svg)![](./imgs/mac.svg)
- [Cmd Markdown](https://www.zybuluo.com/mdeditor) - 一款在线 Markdown 编辑器，支持实时预览、云端存储、版本历史和流程图等扩展语法。![](./imgs/free.svg) ![](./imgs/web.svg)
- [Effie](https://www.effie.co/) - 一款整合所见即所得 Markdown 编辑与思维导图的写作工具，支持跨平台同步。![](./imgs/free.svg)
- [iA Writer](https://ia.net/writer) - 一款专注纯文本写作的 Markdown 编辑器，以独特的「专注模式」提供无干扰写作环境。![](./imgs/mac.svg) ![](./imgs/windows.svg)![](./imgs/iphone.svg)
- [Lightpaper](https://getlightpaper.com/) - 一款轻量级 Mac Markdown 编辑器，支持实时预览和 Shadow Notes、Scratch Notes 快速记录功能。![](./imgs/mac.svg)
- [Ulysses](https://ulysses.app/) - 一款 Apple 生态写作应用，提供独特的 Markdown XL 语法，支持 iCloud 同步和 PDF、Word、EPUB 导出。![](./imgs/mac.svg) ![](./imgs/iphone.svg)
- [MarkText](https://github.com/marktext/marktext) - 一款简单优雅的开源 Markdown 编辑器，支持实时预览与多种主题，适用于 macOS、Windows 和 Linux。![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [StackEdit](https://github.com/benweet/stackedit) - 一款开源的浏览器内 Markdown 编辑器，支持与 Google Drive、GitHub 等云端同步。![](./imgs/github.svg) ![](./imgs/web.svg)
- [MacDown](https://github.com/MacDownApp/macdown) - 一款受 Mou 启发的开源 macOS Markdown 编辑器，支持实时预览与自定义渲染。![](./imgs/github.svg) ![](./imgs/mac.svg)
- [Marked 2](https://marked2app.com/) - 一款 macOS 上的 Markdown 预览工具，支持多种渲染引擎、自定义样式与导出。![](./imgs/mac.svg)

- [MarkFlowy](https://github.com/drl990114/MarkFlowy) - 一款支持源码和所见即所得双模式的 Markdown 写作工具，内置 ChatGPT 助手。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

- [mkeditor](https://github.com/versyxdigital/mkeditor) - 一款简约的桌面端 Markdown 编辑器，遵循 CommonMark 规范，提供网页版和深浅色模式。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/web.svg)

- [PanWriter](https://github.com/mb21/panwriter) - 一款深度集成 Pandoc 的桌面 Markdown 编辑器，配备实时显示页面布局的独特预览窗格。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

- [Quillpad](https://github.com/quillpad/quillpad) - 一款免费开源的隐私优先笔记应用，支持 Markdown 笔记、任务列表和附件。![](./imgs/github.svg) ![](./imgs/android.svg)

- [Ghostwriter](https://github.com/KDE/ghostwriter) - 一款开源的无干扰 Markdown 编辑器，提供专注模式、Hemingway 模式和 HTML、PDF 导出。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

### 笔记与知识管理软件

> 将知识管理与 Markdown 相结合

- [Persona](https://github.com/jayamitkatariya/personacli) - 一款本地优先的个人工作空间，集笔记、任务与 AI 聊天于一体，以纯 **Markdown** 文件存储，无需账号与云服务。![](./imgs/github.svg) ![](./imgs/terminal.svg)
- [Obsidian](https://obsidian.md/) - 一款强大的本地优先 Markdown 笔记应用，以双向链接和知识图谱帮助你构建「第二大脑」。![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [Notion](https://www.notion.com/) - 一款集笔记、任务、数据库和项目管理于一体的一站式工作空间，支持 Markdown 语法和可定制区块。![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg) ![](./imgs/web.svg)
- [AFFiNE](https://github.com/toeverything/AFFiNE) - 一款开源、本地优先的一体化工作空间，融合文档、白板和数据库，深度支持 Markdown。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/web.svg)
- [语雀](https://www.yuque.com/) - 蚂蚁集团旗下的文档与知识库工具，以「像书一样」的结构化知识管理和团队协作而闻名。![](./imgs/free.svg)
- [有道云笔记](https://note.youdao.com/) - 网易出品的多平台笔记应用，支持 Markdown，并集成了 AI 创作、润色和摘要提炼。![](./imgs/free.svg)
- [印象笔记](https://www.yinxiang.com/) - 一款支持跨设备同步的知识管理工具，支持 Markdown 与实时预览，可一键收集网页和微信文章。![](./imgs/free.svg)
- [Memos](https://github.com/usememos/memos) - 一款开源的自托管笔记应用，支持轻量级 Markdown 记录、标签和全文搜索。![](./imgs/github.svg) ![](./imgs/web.svg)
- [Logseq](https://github.com/logseq/logseq) - 一款隐私优先的开源大纲笔记工具，通过双向链接、PDF 标注和白板构建知识网络。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg)
- [思源笔记](https://github.com/siyuan-note/siyuan) - 一款注重隐私的个人知识管理系统，支持块级引用、双向链接和所见即所得的 Markdown 编辑。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [VNote](https://github.com/vnotex/vnote) - 一款基于 Qt 的免费开源笔记应用，专注于 Markdown，提供语法高亮、实时预览和全文检索。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [Zettlr](https://github.com/Zettlr/Zettlr) - 一款专注 Zettelkasten 笔记法和学术写作的 Markdown 工具，集成引文管理和多格式导出。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [NoteGen](https://github.com/codexu/note-gen) - 一款以 AI 为核心的跨平台 Markdown 笔记应用，将碎片化知识整理为结构化笔记，支持 GitHub 同步和 RAG。![](./imgs/github.svg)![](./imgs/mac.svg)![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [妙言](https://github.com/tw93/MiaoYan) - 一款 macOS 原生 Markdown 笔记应用，支持黑暗模式、PPT 模式、LaTeX 和 Mermaid。![](./imgs/github.svg)![](./imgs/mac.svg)
- [Yank Note](https://github.com/purocean/yn) - 一款基于 Monaco 内核的 Markdown 编辑器，提供类似 VS Code 的体验，支持代码块运行和 AI Copilot。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [QOwnNotes](https://github.com/pbek/QOwnNotes) - 一款开源的笔记和待办工具，以 Markdown 纯文本存储，可与 Nextcloud 等云服务同步。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [MindForger](https://github.com/dvorka/mindforger) - 一款受人脑思维启发的知识管理工具，集成 Markdown 编辑器与知识图谱导航。![](./imgs/github.svg)![](./imgs/mac.svg)![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [Joplin](https://github.com/laurent22/joplin) - 一款注重隐私的开源笔记应用，支持 Markdown、端到端加密和多种云服务同步。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [Inkdrop](https://www.inkdrop.app/) - 一款专为开发者设计的 Markdown 笔记应用，支持端到端加密和插件定制。![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [Tangent Notes](https://www.tangentnotes.com/) - 一款永久免费的开源笔记应用，以「切线式写作」和可视化思维分支图为特色，本地 Markdown 存储。![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [ima.copilot](https://ima.qq.com/) - 腾讯推出的「会思考的知识库」，可基于全网和你自己的知识库智能问答，支持 Markdown 内容生成。![](./imgs/free.svg) ![](./imgs/all.svg)
- [Notable](https://github.com/notable/notable) - 一款基于 Markdown 的笔记应用，提供类似 VS Code 的编辑器、暗色主题和无限嵌套标签。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [Khoj](https://github.com/khoj-ai/khoj) - 一个开源的个人 AI 应用，可本地或云端对话，并通过语义搜索从你的 Markdown 笔记中获取答案。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/obsidian.svg)
- [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) - 一款开源的 Notion 替代品，集笔记、项目管理和数据库于一体，由 Flutter 和 Rust 构建。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg)

### 长篇写作

- [novelWriter](https://github.com/vkbo/novelWriter) - 一款专为小说和长篇写作设计的应用，采用受 Markdown 启发的极简语法，支持元数据、注释和大纲。![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

- [WonderPen（妙笔）](https://www.tominlab.com/wonderpen) - 一款通过树状目录组织文档的长篇写作应用，支持 Markdown、云同步和文档快照。![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

## 办公与协作工具

> 在日常办公、文档协同和内容创作中使用的 Markdown 工具。

### 文档协同

- [飞书文档](https://www.feishu.cn/product/docs) - 字节跳动开发的企业协作平台，深度支持 Markdown 语法，提供多人实时协作、评论和版本历史。![](./imgs/free.svg) ![](./imgs/all.svg)
- [企业微信文档](https://doc.weixin.qq.com/) - 集成在企业微信中的在线协同办公套件，支持 Markdown 排版、多人实时协作和权限管理。![](./imgs/free.svg) ![](./imgs/all.svg)
- [石墨文档](https://shimo.im/) - 一款云端实时协作的在线办公套件，支持 Markdown 编辑与导出。![](./imgs/free.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [腾讯文档](https://docs.qq.com/) - 腾讯推出的云端协作办公套件，支持多人实时编辑，原生支持 Markdown 基础语法并内置 AI 写作助手。![](./imgs/free.svg) ![](./imgs/all.svg)
- [Confluence](https://www.atlassian.com/software/confluence) - Atlassian 旗下的团队协作与知识管理平台，支持基础 Markdown 语法并实时转换为富文本。![](./imgs/web.svg)
- [Boardmix（博思白板）](https://boardmix.com/) - 一款在线协作白板，文档功能支持 Markdown 排版与导出，可与 Obsidian 互通。![](./imgs/free.svg) ![](./imgs/mac.svg)  ![](./imgs/windows.svg) ![](./imgs/web.svg)
- [Jupyter](https://github.com/jupyter/jupyter) - 一个交互式计算开源项目，通过 Markdown 文本单元格创建包含实时代码、LaTeX 公式和可视化图表的文档。![](./imgs/github.svg) ![](./imgs/all.svg)
- [HedgeDoc](https://github.com/hedgedoc/hedgedoc) - 一款开源协作式 Markdown 编辑器，支持多人实时编辑、图表与幻灯片模式，可自托管部署。![](./imgs/github.svg) ![](./imgs/web.svg)
- [ONLYOFFICE DesktopEditors](https://github.com/ONLYOFFICE/DesktopEditors) - 一款开源的桌面办公套件，集文档、表格、演示文稿和 PDF 编辑于一体，支持 Markdown 转换。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [Seafile](https://github.com/haiwen/seafile) - 一款开源的企业级文件同步与协作平台，内置支持 Markdown 的文档工具和知识库。![](./imgs/github.svg)

### 思维导图

- [markmap](https://github.com/markmap/markmap) - 一款将 Markdown 层级结构实时转换为交互式思维导图的工具，支持 Web、CLI 以及 VS Code 和 Obsidian 插件。![](./imgs/github.svg)
- [XMind](https://xmind.com/) - 一款功能强大的思维导图应用，支持导入导出 Markdown，可将结构化大纲转换为思维导图。![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [Drawnix](https://github.com/plait-board/drawnix) - 一款基于 Plait 框架的开源白板工具，支持将 Markdown 转换为思维导图、Mermaid 转换为流程图。![](./imgs/github.svg) ![](./imgs/web.svg)

### 幻灯片

- [Slidev](https://github.com/slidevjs/slidev) - 一款面向开发者的 Markdown 幻灯片工具，支持代码高亮、绘图、LaTeX 公式和一键部署。![](./imgs/github.svg)

- [reveal.js](https://github.com/hakimel/reveal.js) - 一款开源的 HTML 演示框架，支持用 Markdown 编写幻灯片，具备垂直嵌套、演讲者注释和 PDF 导出。![](./imgs/github.svg)

- [Marp](https://github.com/marp-team/marp) - 一款基于 Markdown 的幻灯片制作生态系统，支持代码高亮、数学公式，可导出为 PDF 和 PPTX。![](./imgs/github.svg)
- [presenterm](https://github.com/mfontanini/presenterm) - 一款命令行演示工具，支持 Markdown 幻灯片在终端运行，内置代码高亮、Mermaid 图表和 LaTeX。![](./imgs/github.svg)
- [mdp](https://github.com/visit1985/mdp) - 一款轻量级命令行演示工具，以水平线分隔 Markdown 幻灯片并在终端展示。![](./imgs/github.svg)
- [deck](https://github.com/k1LoW/deck) - 一个将 Markdown 文档自动转换为 Google Slides 演示文稿的命令行工具。![](./imgs/github.svg)

### 便签与清单

- [锤子便签](https://cloud.smartisan.com/apps/note/md.html) - 一款优雅的笔记应用，支持 Markdown 排版，可将笔记生成精美长图分享。![](./imgs/free.svg)![](./imgs/web.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [flomo](https://flomoapp.com/) - 一款「记录想法，而非整理想法」的卡片笔记应用，支持 Markdown、标签和双向链接。![](./imgs/free.svg)![](./imgs/all.svg)
- [滴答清单](https://dida365.com/webapp) - 一款集待办、日历、习惯追踪于一体的效率工具，任务详情支持 Markdown 排版。![](./imgs/free.svg)![](./imgs/all.svg)
- [Tasks.md](https://github.com/BaldissaraMatheus/Tasks.md) - 一款基于 Markdown 文件的自托管看板式任务管理工具。![](./imgs/github.svg)

## 网站生成与排版

> 将 Markdown 文档转换成网站、电子书和简历等格式的工具。

### 静态网站

> 生成静态网站或项目文档

- [Docsify](https://github.com/docsifyjs/docsify) - 一款动态文档生成器，无需构建即可将 Markdown 文件转换为网站，提供主题、全文搜索和插件。![](./imgs/github.svg)
- [MkDocs](https://github.com/mkdocs/mkdocs) - 一款快速、简洁的静态网站生成器，适合构建项目文档，可通过主题和插件扩展。![](./imgs/github.svg)
- [Zola](https://github.com/getzola/zola) - 一款 Rust 编写的单文件静态网站生成器，内置 Sass 编译、图片处理和本地搜索。![](./imgs/github.svg)
- [VitePress](https://github.com/vuejs/vitepress) - 一款基于 Vite 和 Vue 的静态网站生成器，适合构建项目文档，支持在 Markdown 中使用 Vue 组件。![](./imgs/github.svg)
- [Hugo](https://github.com/gohugoio/hugo) - 一款以速度闻名的 Go 静态网站生成器，毫秒级构建大型网站，拥有丰富的主题和短代码系统。![](./imgs/github.svg)
- [Jekyll](https://github.com/jekyll/jekyll) - 一款 Ruby 编写的静态网站生成器，也是 GitHub Pages 的核心引擎，无需数据库即可部署。![](./imgs/github.svg)
- [Hexo](https://github.com/hexojs/hexo) - 一款 Node.js 驱动的博客框架，支持 GFM、丰富的插件主题和一键部署到 GitHub Pages。![](./imgs/github.svg)
- [Pelican](https://github.com/getpelican/pelican) - 一款 Python 编写的静态网站生成器，支持多语言、Jinja2 主题和 RSS/Atom 订阅源。![](./imgs/github.svg)
- [Docusaurus](https://github.com/facebook/docusaurus) - Facebook 开源的文档网站生成器，基于 React 和 MDX，内置版本控制、国际化和全文搜索。![](./imgs/github.svg)
### 电子书

> 生成和阅读电子书

- [mdBook](https://github.com/rust-lang/mdBook) - 一款 Rust 编写的命令行工具，从 Markdown 快速创建在线书籍，集成全文搜索和代码高亮。![](./imgs/github.svg)
- [HonKit](https://github.com/honkit/honkit) - 一个将 Markdown 文档生成为网站、PDF 或电子书的命令行工具，是 GitBook 的现代化分支。![](./imgs/github.svg)
- [GitBook](https://github.com/GitbookIO/gitbook) - 一个构建和管理技术文档的平台，提供直观编辑器、Git 式版本控制和实时发布。![](./imgs/github.svg)
- [bookdown](https://github.com/rstudio/bookdown) - 一个开源的 R 语言包，用 R Markdown 编写书籍，支持 PDF、HTML、EPUB 和 Word 输出。![](./imgs/github.svg)
- [Crowbook](https://github.com/crowdagger/crowbook) - 一款 Rust 编写的工具，专为小说设计，可将 Markdown 书籍转换为 HTML、LaTeX/PDF 和 EPUB。![](./imgs/github.svg)
- [Koodo Reader](https://github.com/koodo-reader/koodo-reader) - 一款跨平台电子书阅读器，支持 EPUB、PDF、Markdown，提供云同步和 AI 辅助阅读。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [calibre](https://github.com/kovidgoyal/calibre) - 电子书界的「瑞士军刀」，支持库管理、格式转换（含 Markdown）和编辑同步。![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [lue](https://github.com/superstarryeyes/lue) - 一款终端电子书阅读器，支持 EPUB、PDF、Markdown，内置文本转语音和进度保存。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

### 模板

> 可直接复用的 Markdown 模板

- [LapisCV](https://github.com/BingyanStudio/LapisCV) - 一个简历模板项目，可在 VS Code、Typora 和 Obsidian 中通过 Markdown 创建并导出 PDF 简历。![](./imgs/github.svg)

### 公众号

- [WeChat Markdown Editor(md)](https://github.com/doocs/md) - 一款在线 Markdown 编辑器，可实时转换为微信图文格式，支持主题自定义、多图床和 AI 助手。![](./imgs/github.svg) ![](./imgs/web.svg)
- [Markdown Nice](https://editor.mdnice.com/) - 一款在线 Markdown 排版工具，一键美化为适合微信公众号、知乎、CSDN 的富文本。![](./imgs/web.svg)

## 编码与开发工具

> 在代码和开发场景中，用于编写、管理 Markdown 的工具。

### 编程工具

- [VS Code](https://github.com/microsoft/vscode) - 一款轻量但强大的代码编辑器，内置完整的 Markdown 支持（语法高亮、实时预览），可通过插件进一步增强。![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
  - [Foam](https://github.com/foambubble/foam) - 一款基于 VS Code 和 GitHub 的个人知识管理系统，以双向链接和知识图谱构建个人「数字花园」。![](./imgs/github.svg)
  - [Markdown All in One](https://github.com/yzhang-gh/vscode-markdown) - 一款 VS Code 扩展，提供目录生成、表格格式化、数学公式支持和批量打印为 HTML。![](./imgs/github.svg)
  - [Marp for VS Code](https://github.com/marp-team/marp-vscode) - 一款 VS Code 扩展，将编辑器变成幻灯片制作工具，可导出 PDF、PPTX 和 HTML。![](./imgs/github.svg)
- [Trae](https://www.trae.cn/) - 字节跳动推出的 AI IDE，通过自然语言帮助开发者完成从编码、调试到部署的全流程。![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [Cursor](https://cursor.com/) - 一款 AI 时代的代码编辑器，通过聊天、代码补全和智能重写帮助开发者高效编程。![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [RStudio](https://github.com/rstudio/rstudio) - 一款 R 语言开源 IDE，深度集成 R Markdown，一键生成可复现的报告、幻灯片和网页。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

### 代码片段管理

- [massCode](https://github.com/massCodeIO/massCode) - 一款免费开源的代码片段管理器，支持 Markdown、代码高亮、文件夹分类和云同步。![](./imgs/github.svg)
- [Lepton](https://github.com/hackjutsu/Lepton) - 一款基于 GitHub Gist 的代码片段管理工具，支持 Markdown 渲染和 Jupyter Notebook。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

### 开发组件

- [Milkdown](https://github.com/Milkdown/milkdown) - 一款受 Typora 启发的所见即所得 Markdown 编辑器，基于 ProseMirror 和 remark 构建。![](./imgs/github.svg)
- [Rich](https://github.com/Textualize/rich/tree/master) - 一个在终端显示漂亮文本的 Python 库，支持渲染 Markdown、表格和进度条。![](./imgs/github.svg)
- [Marked.js](https://github.com/markedjs/marked) - 一款快速、轻量级的 JavaScript Markdown 编译器，支持 CommonMark 规范，可在浏览器、服务器和命令行使用。![](./imgs/github.svg)

- [Vditor](https://github.com/Vanessa219/vditor) - 一款强大的浏览器端 Markdown 编辑器，支持所见即所得、即时渲染和分屏预览，内置脑图和流程图。![](./imgs/github.svg)

- [Cherry Markdown Writer](https://github.com/Tencent/cherry-markdown) - 腾讯出品的开箱即用 JavaScript Markdown 编辑器，支持浏览器和 Node.js，内置安全过滤和多主题。![](./imgs/github.svg)
- [md-editor-v3](https://github.com/imzbf/md-editor-v3) - 一款专为 Vue 3 设计的 Markdown 编辑器组件，支持实时预览、深色主题和图片粘贴上传。![](./imgs/github.svg)
- [markdown-it](https://github.com/markdown-it/markdown-it) - 一款快速且可扩展的 JavaScript Markdown 解析器，遵循 CommonMark 规范，提供丰富的插件 API。![](./imgs/github.svg)
- [OverType](https://github.com/panphora/overtype) - 一款轻量级 Markdown 编辑器库，通过在预览层上叠加输入区域实现完美的所见即所得。![](./imgs/github.svg)
- [Turndown](https://github.com/mixmark-io/turndown) - 一款 JavaScript 编写的 HTML 到 Markdown 转换器，兼容 CommonMark，提供丰富的输出定制选项。![](./imgs/github.svg)
- [Markdown UI](https://github.com/BlueprintLabIO/markdown-ui) - 一个用于在 Markdown 文档中嵌入按钮、下拉菜单和表单等动态 UI 组件的库。![](./imgs/github.svg)
- [Markstream](https://github.com/Simon-He95/markstream-vue) - 一个面向 AI 对话场景的流式 Markdown 渲染组件库，支持 Vue、React、Svelte 等框架。![](./imgs/github.svg)
- [Editor.md](https://github.com/pandao/editor.md) - 一款开源的可嵌入网页的 Markdown 编辑器组件，支持实时预览、流程图和 LaTeX 公式。![](./imgs/github.svg)
- [Markdown Here](https://github.com/adam-p/markdown-here) - 一款 Chrome、Firefox 和 Thunderbird 扩展，让你在 Gmail、GitHub 等网页中用 Markdown 写作并即时渲染。![](./imgs/github.svg)

## 转换工具

> 将 Markdown 转换为其他格式，反之亦然。

- [pandoc](https://github.com/jgm/pandoc) - 文档转换领域的「瑞士军刀」，支持 Markdown、HTML、PDF、Docx 等 40 多种格式互转。![](./imgs/github.svg) ![](./imgs/terminal.svg)
  - [Eisvogel](https://github.com/Wandmalfarbe/pandoc-latex-template) - 一款简洁美观的 Pandoc LaTeX 模板，用于将 Markdown 转换为 PDF 或 LaTeX。![](./imgs/github.svg)
  - [patat](https://github.com/jaspervdj/patat) - (Presentations Atop The ANSI Terminal) 一款基于 Pandoc 的命令行演示工具，支持代码高亮和演讲者笔记。![](./imgs/github.svg)

- [feishu2md](https://github.com/Wsine/feishu2md) - 一款 Go 语言工具，可将飞书文档转换为 Markdown 文件，支持 CLI、Docker 和在线使用。![](./imgs/github.svg)
- [noted.md](https://github.com/tejas-raskar/noted.md) - 一个利用 LLM 将手写笔记（PDF、图片）转换为 Markdown 的命令行工具，可识别数学公式为 LaTeX。![](./imgs/github.svg) ![](./imgs/terminal.svg)
- [MarkItDown](https://github.com/microsoft/markitdown) - 微软开源的 Python 工具，将 PDF、Word、Excel 等转换为 Markdown，适合 LLM 训练数据准备。![](./imgs/github.svg)
- [Jupytext](https://github.com/mwouts/jupytext) - 一款将 Jupyter Notebook 转换为 Markdown 等纯文本格式的工具，让 Notebook 可用 Git 版本控制。![](./imgs/github.svg)
- [keep-it-markdown (KIM)](https://github.com/djsudduth/keep-it-markdown) - 一个将 Google Keep 笔记批量转换为 Markdown 的 Python 命令行脚本，可导入 Obsidian 等应用。![](./imgs/github.svg) ![](./imgs/terminal.svg)
- [YARLE (Yet Another RLE)](https://github.com/akosbalasko/yarle) - 一款将 Evernote .enex 笔记完整转换为 Markdown 的工具，支持元数据、内部链接和附件。![](./imgs/github.svg) ![](./imgs/terminal.svg)
- [Trafilatura](https://github.com/adbar/trafilatura) - 一个基于 Python 的网页文本提取工具，输出支持 CSV、JSON、HTML 和 Markdown 等格式。![](./imgs/github.svg) ![](./imgs/terminal.svg)
- [Zotero Better Notes](https://github.com/windingwind/zotero-better-notes) - 一款 Zotero 插件，支持 Markdown 粘贴、模板生成笔记并导出为 Markdown、Word、PDF。![](./imgs/github.svg)

### 转成图片

- [MD2Card](https://md2card.com/zh) - 一个在线工具，将 Markdown 一键转换为精美知识卡片，提供 20 多种卡片风格和 API。![](./imgs/web.svg)

- [Markdown To Image](https://github.com/gcui-art/markdown-to-image/tree/main) - 一款将 Markdown 渲染为精美图片的工具，支持自定义样式和主题，适合社交媒体分享。![](./imgs/github.svg)
- [Markdown To Image Serve](https://github.com/wxingheng/markdown-to-image-serve) - 一款基于 Go 的 Markdown 转图片服务，可通过 API 批量生成图片。![](./imgs/github.svg)
- [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) - 一款 Go 语言 HTML 到 Markdown 转换工具，可将复杂 HTML 结构甚至整个网站转换为干净的 Markdown。![](./imgs/github.svg)

## 其他工具

### 命令行工具

> 在终端上使用 Markdown

- [mdq](https://github.com/yshavit/mdq) - 一款像 jq 处理 JSON 一样查询 Markdown 的命令行工具，可提取标题、代码块、链接和表格。![](./imgs/github.svg) ![](./imgs/terminal.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [Glow](https://github.com/charmbracelet/glow) - 一款命令行 Markdown 阅读器，在终端中美观渲染 Markdown，支持本地和 Git 仓库发现。![](./imgs/github.svg) ![](./imgs/terminal.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [nb](https://github.com/xwmx/nb) - 一款命令行和本地网络笔记应用，以纯文本存储，支持 Markdown、Git 版本控制和加密。![](./imgs/github.svg) ![](./imgs/terminal.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [doxx](https://github.com/bgreenwell/doxx) - 一款终端 .docx 文件查看器，可将 Word 文档渲染到命令行并导出为 Markdown、CSV、JSON。![](./imgs/github.svg) ![](./imgs/terminal.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

### 检查与辅助

- [markdownlint](https://github.com/DavidAnson/markdownlint) - 一款检查 Markdown 语法和风格的 Node.js 静态分析工具，可集成到 VS Code、Vim、Emacs。![](./imgs/github.svg)
- [textlint](https://github.com/textlint/textlint) - 一款类似 ESLint 的自然语言 lint 工具，检查文本中的语法、拼写和风格问题。![](./imgs/github.svg)
- [Marksman](https://github.com/artempyanykh/marksman) - 一款通过 LSP 为 Markdown 提供智能辅助的工具，支持自动补全、跳转定义和 Zettelkasten wiki 链接。![](./imgs/github.svg)

### AI 相关工具

- [ReadmeAI](https://github.com/eli64s/readme-ai) - 一款 AI 驱动的 README 自动生成工具，从仓库 URL 或路径生成结构清晰、内容详细的 README。![](./imgs/github.svg)

- [Firecrawl](https://github.com/mendableai/firecrawl) - 一款将任意网页抓取并转换为干净 Markdown 或结构化数据的 API 服务。![](./imgs/github.svg)

- [ScrapeGraphAI](https://github.com/ScrapeGraphAI/Scrapegraph-ai) - 一款基于 LLM 和图逻辑的 Python 爬虫库，其 Markdownify 功能可将网页转换为干净的 Markdown。![](./imgs/github.svg)

---

## 书籍

- [《了不起的 Markdown：大语言模型时代的通用语言》](https://book.douban.com/subject/37478156/) - 一本大语言模型时代 Markdown 写作的实践指南，也是国内第一本全面介绍 Obsidian 的书籍。 ![](./imgs/doc.svg)
