# Awesome Markdown

<p align="center">
  <img src="./imgs/logo.svg" height="96">
  <h1 align="center">Awesome Markdown</h1>
  <p align="center">
    <a href="https://github.com/bxiaopeng/awesome-markdown/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg?style=flat-square" alt="License">
    </a>
    <a href="https://github.com/bxiaopeng/awesome-markdown/stargazers">
      <img src="https://img.shields.io/github/stars/bxiaopeng/awesome-markdown?style=flat-square" alt="Stars">
    </a>
    <a href="https://github.com/bxiaopeng/awesome-markdown/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/bxiaopeng/awesome-markdown?style=flat-square" alt="Contributors">
    </a>
    <a href="https://github.com/bxiaopeng/awesome-markdown/pulls">
      <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
    </a>
  </p>
</p>


Markdown 是一种简单易学的轻量级标记语言，它让排版变得轻松、高效，让你能够专注写作。从简单的笔记、博客文章到复杂的项目文档，甚至是知识管理，Markdown 都是你的理想工具。



项目地址：https://github.com/mansucache/awesome-markdown



本项目精心整理了关于 **Markdown 的扩展语法、专业软件、高效工具和最佳实践**，旨在成为你的一站式 Markdown 资源库。

欢迎通过 [Issue](https://github.com/bxiaopeng/awesome-markdown/issues)  推荐你喜欢的 Markdown 工具或资源，让我们一起完善这个项目！

----

**图标说明**：

- ![](./imgs/github.svg) 表示 **开源软件** ，单击名称可进入 **开源** 仓库；<br>
- ![](./imgs/free.svg) 表示 **免费** 使用，或者个人 **免费** ，或大部分功能 **免费**。<br>
- ![](./imgs/doc.svg) 表示 **教程**，单击图标可打开 教程 地址。

----

**平台支持**：

![](./imgs/mac.svg) = **macOS**   ![](./imgs/windows.svg) =  **Windows** ![](./imgs/linux.svg) =  **Linux**  ![](./imgs/iphone.svg) =  **iPhone** ![](./imgs/android.svg) =  **Android** ![](./imgs/web.svg) = Web ![](./imgs/all.svg) =  **全平台**

**工具支持：**

![](./imgs/obsidian.svg) = Obsidian ![](./imgs/vscode.svg) = VS code  ![](./imgs/typora.svg)= Typora  ![](./imgs/terminal.svg) = 命令行工具



## 语法规范与扩展

> 为 Markdown 语言增加新功能或提供清晰规范的扩展语法。

- [CommonMark](https://github.com/thephpleague/commonmark) - 一个旨在为 Markdown 语法提供清晰、无歧义规范的项目。它通过制定一套统一的规则和测试套件，解决了不同解析器之间的兼容性问题，确保了 **Markdown** 文档在不同平台和工具中的一致性呈现。![](./imgs/github.svg)
- [GFM (GitHub Flavored Markdown)](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) - 是 **GitHub** 平台使用的 **Markdown** 方言，它是 **CommonMark** 的一个严格超集。它在基础语法之上增加了表格、任务列表、删除线、自动链接等扩展功能，极大提升了 **Markdown** 在项目协作和文档编写中的表现力与实用性。
- [Obsidian Flavored Markdown](https://help.obsidian.md/obsidian-flavored-markdown) -  Obsidian 笔记软件所采用的 **Markdown** 变体。它结合了 **CommonMark** 和 **GitHub Flavored Markdown** 的核心语法，并在此基础上增加了独特的扩展功能，如 **Wiki** 风格的双向链接、嵌入式引用、**LaTeX** 公式和 **Mermaid** 图表，使其成为构建个人知识库和数字花园的理想选择。
- [Pandoc's Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown) - 一种基于 **John Gruber** 原始语法的 **Markdown** 变体，增加了对表格、脚注和定义列表等多种新功能的支持。它旨在确保文档作为纯文本发布时仍保持可读性，同时提供非 **HTML** 的方式来表示重要的文档元素。用户可通过启用或禁用扩展来精细控制语法行为，实现从 **Markdown** 到多种输出格式（如 **Word**、**PDF**、**ePub**）的灵活转换。
- [R Markdown](https://github.com/rstudio/rmarkdown) - 一个 **R** 语言包，它允许用户在 **Markdown** 文档中嵌入 **R** 代码块及其输出结果，从而创建动态的、可重复的文档、报告、幻灯片和网页。它支持多种输出格式，如 **HTML、PDF** 和 **Word**，为数据科学家和分析师提供了一个将代码、结果与叙述性文本结合的强大工具。![](./imgs/github.svg)
- [Quarkdown](https://github.com/iamgio/quarkdown) - 一款现代化的 Markdown 排版系统，它在 **CommonMark** 和 **GFM** 基础上引入了函数、变量和脚本等图灵完备的扩展语法。该工具赋予 **Markdown** 强大的动态处理能力，能将内容无缝编译成书籍、文章或演示文稿等多种格式，适用于需要复杂排版和高度定制化的技术文档、学术论文和项目报告。![](./imgs/github.svg)

## 写作与编辑环境

### 专业 Markdown 编辑器

>  这些编辑器提供流畅、高效的 Markdown 写作体验。

- [Typora](https://typora.io/) - 一款所见即所得的 **Markdown** 编辑器，提供无缝的源代码与预览切换体验。它集成了大纲视图、全文检索和多格式导出功能（如 **PDF、HTML、Word**），并支持主题自定义与禅模式，为技术写作、博客和论文创作提供沉浸式专业体验。![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) [![](./imgs/doc.svg)](https://github.com/bxiaopeng/awesome-typora)
  - [Typora Plugin](https://github.com/obgnail/typora_plugin) - 一系列为 **Typora** 设计的插件，旨在增强其原生功能和使用体验。这些插件提供了诸如标签管理、文件搜索、自动编号和图表支持等功能，将一个纯粹的 **Markdown** 编辑器扩展为高度定制化的个人知识管理系统，适用于需要更多高级功能和工作流优化的用户。![](./imgs/github.svg)
  - [VLOOK](https://github.com/MadMaxChow/VLOOK) - 一款专为 **Typora** 设计的优雅 **Markdown** 主题包和增强插件。它提供了丰富的文档布局、内容标记、内容导航和演示辅助功能，旨在全方位提升 **Markdown** 文档的阅读和写作体验。该工具支持将文档导出为带有更多交互特性的 **HTML** 格式，特别适合技术文档、知识库和在线分享。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

- [Bear](https://bear.app/) - 一款适用于 **Apple** 生态的笔记应用，采用 **Markdown** 语法，以其强大的标签系统、优雅的界面和无缝的同步功能而闻名。它支持笔记内链接、丰富的自定义主题和多种格式导出，为个人知识管理、技术写作和日常记录提供流畅的沉浸式体验。![](./imgs/mac.svg) ![](./imgs/iphone.svg)
- [Markdown Monster](https://github.com/RickStrahl/MarkdownMonster) -一款功能丰富的 **Windows** 专属 **Markdown** 编辑器。它提供语法高亮、实时同步预览、内置文件浏览器和 **Git** 集成，并支持将文档直接发布到支持 **MetaWeblog** 和 **WordPress** 等协议的博客平台，适合需要高效写作、技术文档管理和博客发布的专业用户。![](./imgs/github.svg)![](./imgs/windows.svg)
- [Markor](https://github.com/gsantner/markor) -  一款轻量级的 **Android** 文本编辑器，支持 **Markdown**、**todo.txt** 和 **Zim** 等多种格式。它提供完全离线的使用体验，并集成语法高亮、预览、文件同步和加密功能，旨在为用户提供简单高效的笔记和待办事项管理，特别适合移动设备上的快速记录和整理。![](./imgs/github.svg) ![](./imgs/android.svg)
- [MarkEdit](https://github.com/MarkEdit-app/MarkEdit) -一款为 **macOS** 设计的开源 **Markdown** 编辑器。它提供类似 **macOS** 原生 **TextEdit** 的简洁、快速体验，强调隐私保护和轻量化设计。用户可通过脚本和 **CodeMirror** 扩展进行定制，如添加预览窗格或自定义主题，适合偏好原生应用体验并追求简洁、高效写作环境的用户。![](./imgs/github.svg)![](./imgs/mac.svg)
- [Cmd Markdown](https://www.zybuluo.com/mdeditor) - 一款强大的在线 **Markdown** 编辑器，提供实时预览、云端存储和版本历史功能。它支持流程图、时序图、甘特图、**LaTeX** 公式等扩展语法，并能将文档导出为 **PDF、HTML** 等格式，适用于需要跨平台同步、多人协作和专业文档排版的场景。![](./imgs/free.svg) ![](./imgs/web.svg)
- [Effie](https://www.effie.co/) - 一款整合了所见即所得 **Markdown** 编辑器和思维导图功能的写作工具。它提供了简洁的界面，支持多种文件格式的导入和导出，并提供跨平台同步。该工具旨在帮助用户在写作和思维整理之间无缝切换，特别适合创意写作、知识梳理和项目规划。![](./imgs/free.svg)
- [iA Writer](https://ia.net/writer) - 一款专注于纯文本写作的 **Markdown** 编辑器，以其独特的“专注模式”和简洁界面为用户提供无干扰的写作环境。它通过 **Markdown** 简化文档格式化，并支持跨设备文件同步、多种格式导出（如 **PDF、HTML**），是作家、博主和技术文档作者理想的专业工具。![](./imgs/mac.svg) ![](./imgs/windows.svg)![](./imgs/iphone.svg)
- [Lightpaper](https://getlightpaper.com/) - 一款专为 **Mac** 设计的轻量级 **Markdown** 编辑器。它提供简洁直观的界面，支持文件夹导航、实时预览和无干扰模式。其独特之处在于“**Shadow Notes**”和“**Scratch Notes**”功能，让用户能够快速记录和整理碎片化想法。它还支持语法高亮和数学公式渲染，适用于日常笔记、技术写作和文档整理。![](./imgs/mac.svg)
- [Ulysses](https://ulysses.app/) - 一款专为 **Apple** 生态系统设计的写作应用，采用 **Markdown** 语法进行内容格式化。它以无干扰的写作环境和强大的库管理功能为核心，提供独特的 “**Markdown XL**” 语法，支持注释、脚注和引用等高级功能。**Ulysses** 可通过 **iCloud** 在所有设备上同步内容，并能将文稿导出为 **PDF**、**Word**、**EPUB** 等多种格式，非常适合专业作家、学生和博主进行长篇写作和知识管理。![](./imgs/mac.svg) ![](./imgs/iphone.svg)

- [MarkFlowy](https://github.com/drl990114/MarkFlowy) - 一款支持“源码”和“所见即所得”两种编辑模式的 **Markdown** 写作工具。它内置 **ChatGPT** 助手，能帮助用户快速导出对话、翻译文章或生成摘要，并支持将文档导出为 **PDF、HTML** 等格式。该工具旨在通过 **AI** 功能提升写作效率，适用于需要快速生成、整理和发布内容的场景。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

- [mkeditor](https://github.com/versyxdigital/mkeditor) - 一款简约的桌面端 **Markdown** 编辑器。它支持 **Windows、macOS** 和 **Linux**，并提供网页版。其核心特色在于遵循 **CommonMark** 规范，提供可定制的样式、内置的实时预览渲染器，以及将 Markdown 导出为带样式的或纯净的 **HTML** 文件的功能。它同时支持深色和浅色模式，为用户提供简洁高效的写作环境。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/web.svg)

- [PanWriter](https://github.com/mb21/panwriter) - 一款专注于写作的桌面 **Markdown** 编辑器，其核心亮点在于深度集成 Pandoc，提供强大的导入导出功能，同时配备了一个能实时显示页面布局与分页效果的独特预览窗格。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

- [Quillpad](https://github.com/quillpad/quillpad) - 一款免费开源的笔记应用，作为 Quillnote 的社区分支，它专注于用户隐私和数据本地化。该工具支持 **Markdown** 笔记、任务列表、提醒和文件附件，并可通过笔记本和标签进行整理，适用于需要美观、安全笔记体验的用户。![](./imgs/github.svg) ![](./imgs/android.svg)

- [Ghostwriter](https://github.com/KDE/ghostwriter) - 一款适用于 Windows 和 Linux 的开源桌面 **Markdown** 编辑器，专注于提供无干扰的写作体验。它具备**实时预览**、**专注模式**（只高亮当前文本）和 **Hemingway 模式**（禁用删除键）等特色功能，还支持多种主题和将文档导出为 HTML、PDF 等格式，非常适合需要集中精力进行内容创作的用户。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

### 笔记与知识管理软件

> 将知识管理与 Markdown 相结合

- [Obsidian](https://obsidian.md/) - 一款强大的本地优先 **Markdown** 笔记应用。它以独特的双向链接和图形化知识网络功能，帮助用户构建和管理“第二大脑”，将零散的笔记连接成一个有机的知识体系。它还支持丰富的插件生态系统和高度自定义，非常适合需要深度知识管理、技术写作和学术研究的用户。![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [Notion](https://www.notion.com/) - 一款集笔记、任务、数据库和项目管理于一体的一站式工作空间。它支持 **Markdown** 语法，用户可通过可定制的“区块”（Blocks）灵活组合各种功能，构建个性化的工作流和知识库。**Notion** 适用于个人知识管理、团队协作、项目规划等多种场景，帮助用户在一个平台上高效组织和管理所有信息。![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg) ![](./imgs/web.svg)
- [AFFiNE](https://github.com/toeverything/AFFiNE) - 一款开源、本地优先的一体化工作空间，它融合了文档、白板和数据库功能。该工具深度支持 **Markdown** 语法，旨在为用户提供类似 **Notion** 和 **Miro** 的无缝协作体验，非常适合团队协作、项目管理和知识库构建。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/web.svg)
- [语雀](https://www.yuque.com/) - 蚂蚁集团旗下的一款文档与知识库工具，以“像书一样”的结构化知识管理方式和强大的团队协作能力而闻名。它深度支持 **Markdown** 语法，并提供了丰富的扩展功能，如流程图、时序图、**LaTeX** 公式等，适用于个人笔记、团队文档、知识库构建和项目协作。![](./imgs/free.svg)
- [有道云笔记](https://note.youdao.com/) - 网易出品的一款多平台笔记应用，支持**Markdown**语法，提供“实时同步预览”和“所见即所得”两种编辑模式。它集成了强大的 **AI** 功能，可进行内容创作、润色、摘要提炼等，同时还支持扫描、语音速记、多格式导入导出和云端同步，适用于个人知识管理、内容创作和团队协作。![](./imgs/free.svg)
- [印象笔记](https://www.yinxiangbiji.com/) - 一款支持跨设备同步的知识管理工具，它支持 **Markdown** 语法，提供实时预览功能，用户可快速创建和编辑笔记。它能帮助用户一键收集网页、微信文章等各类信息，并进行高效整理和分享，适用于个人知识库构建、文档管理和团队协作。![](./imgs/free.svg)
- [Memos](https://github.com/usememos/memos) - 一款现代、开源的自托管知识管理和笔记应用。它提供轻量而强大的 **Markdown** 支持，并能私密地捕捉和分享想法。Memos 强调快捷记录和**碎片化知识管理**，并支持标签、全文搜索和 RESTful API，是个人搭建专属知识库、进行**轻量级微博客**或**日志记录**的理想选择。![](./imgs/github.svg) ![](./imgs/web.svg)
- [Logseq](https://github.com/logseq/logseq) - 一款以隐私为先的开源知识管理工具，它以大纲笔记为核心，并深度支持 **Markdown** 语法。该工具通过双向链接、**PDF** 标注和白板功能，帮助用户构建和连接知识网络，特别适合用于每日日志、项目管理和学术研究。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg)
- [思源笔记](https://github.com/siyuan-note/siyuan) - 一款注重隐私的个人知识管理系统，它支持细粒度的块级引用和双向链接，为用户提供所见即所得的 **Markdown** 编辑体验。该工具内置大纲、表格、图表、**LaTeX** 公式等丰富功能，并支持本地存储和跨平台同步，适用于深度知识整理和项目管理。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) 
- [VNote](https://github.com/vnotex/vnote) - 一款基于 **Qt** 的免费开源笔记应用，专注于 **Markdown** 格式。它提供优秀的编辑体验和笔记管理功能，如语法高亮、实时预览、大纲视图和全文检索，适用于技术写作、代码笔记和日常文档整理。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [Zettlr](https://github.com/Zettlr/Zettlr) - 一款专业的 **Markdown** 写作工具，专注于 **Zettelkasten** 笔记法和学术写作。它集成了引文管理、多格式导出功能（如 **LaTeX**、**PDF**），并支持强大的全文搜索，帮助用户系统地管理笔记、参考文献和学术文档，适用于学生、研究人员和内容创作者。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [NoteGen](https://github.com/codexu/note-gen) - 一款轻量级跨平台 **Markdown** 笔记应用。它以 **AI** 为核心，支持多种记录方式，能将碎片化知识整理成结构化的可读笔记，并提供 **GitHub** 同步和 **RAG** 等高级功能。该工具旨在通过 **AI** 辅助，帮助用户快速捕捉、整理和检索信息，适用于内容创作者、开发者和知识管理爱好者。![](./imgs/github.svg)![](./imgs/mac.svg)![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [妙言](https://github.com/tw93/MiaoYan)- 一款为 macOS 设计的原生 **Markdown** 笔记应用，它采用 **Swift 5** 开发，提供安全、纯本地的编辑体验。它支持语法高亮、黑暗模式、**PPT** 模式、**LaTeX** 和 **Mermaid** 等丰富功能，为追求美观与极简的 **macOS** 用户提供高效、稳定的写作环境，特别适合技术文档、笔记整理和日常写作。![](./imgs/github.svg)![](./imgs/mac.svg)
- [Yank Note](https://github.com/purocean/yn) - 一款基于 **Monaco** 内核的 **Markdown** 编辑器，提供了类似 **VS Code** 的高度可扩展编辑体验。它支持版本控制、文档加密、代码块运行、多种图表嵌入以及 **AI Copilot** 等丰富功能，旨在通过集成化工具链提高开发者的写作与文档管理效率。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [QOwnNotes](https://github.com/pbek/QOwnNotes) - 一款开源的笔记和待办事项管理工具，它将笔记以 **Markdown** 纯文本文件存储，并能与 **Nextcloud/ownCloud** 等多个云服务无缝同步。它提供版本控制、标签管理和全文搜索等功能，确保了数据的安全性和可访问性，适用于注重隐私保护和跨平台同步的用户。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [MindForger](https://github.com/dvorka/mindforger) - 一款受人脑思维启发的个人知识管理工具，集成了 **Markdown** 编辑器和知识图谱导航器。这款开源软件旨在帮助用户高效地管理和组织笔记、想法，并提供大纲、拼写检查、标签和多种导出格式，以确保用户隐私并提升知识管理效率，适用于深度学习、研究和个人知识库的构建。![](./imgs/github.svg)![](./imgs/mac.svg)![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [Joplin](https://github.com/laurent22/joplin) - 一款注重隐私的开源笔记和待办事项应用，支持 **Markdown** 格式。它提供端到端加密，并能与 **Nextcloud**、**Dropbox** 和 **OneDrive** 等多种云服务同步。**Joplin** 强调“离线优先”体验，并通过丰富的插件和主题实现高度定制，是注重数据安全与灵活性的用户的理想选择。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [Inkdrop](https://www.inkdrop.app/) - 一款专为开发者设计的跨平台 **Markdown** 笔记应用。它以强大的 **Markdown** 编辑器、端到端加密和高度可定制的插件生态系统为核心，帮助开发者高效组织代码片段和技术笔记。通过云端同步功能，可确保在所有设备上安全访问，是开发者管理技术知识库的理想选择。![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [Tangent Notes](https://www.tangentnotes.com/) - 一款永久免费的开源笔记应用，它以“切线式写作”和可视化思维分支图为特色。所有笔记都以本地 **Markdown** 文件的形式存储，并支持双向链接、大纲视图和全文搜索，旨在通过非线性写作方式帮助用户捕捉和连接想法。![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [ima.copilot](https://ima.qq.com/) - 腾讯推出的智能工作台产品，定位于“会思考的知识库”。它能基于全网信息源和用户自己的知识库进行智能问答，并提供智能写作辅助功能，如报告、作文和文案的生成。该工具支持 Markdown 语法，能够将生成的专业内容快速格式化，适用于高效文档创作和知识管理。![](./imgs/free.svg) ![](./imgs/all.svg)
- [Notable](https://github.com/notable/notable) - 一款基于 **Markdown** 的笔记应用。它旨在提供一个功能强大、界面简洁的写作环境。该应用将笔记和附件直接存储在本地，方便同步和移植。其核心特色包括类似 **VS Code** 的 **Markdown** 编辑器（支持多光标、小地图等）、暗色主题、专注模式以及批量编辑和实时预览等功能，并支持无限嵌套的标签。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) 
- [Khoj](https://github.com/khoj-ai/khoj) - 一个开源的个人 AI 应用，它能在本地或云端与大型语言模型（LLM）对话，并支持通过语义搜索从包括 **Markdown** 在内的多种文档中获取答案，可跨平台使用，并能创建定制化的 AI 代理。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/obsidian.svg)
- [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) - 一个开源的 **Notion** 替代品，它提供了集笔记、项目管理和数据库于一体的工作区。该工具由 **Flutter** 和 **Rust** 构建，注重数据隐私和本地控制，并原生支持 **Markdown** 语法。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg)

#### 长篇写作

- [novelWriter](https://github.com/vkbo/novelWriter) - 一款专为小说和长篇写作设计的应用。它使用一种受 **Markdown** 启发的极简格式语法，并支持元数据、注释、大纲和交叉引用。该应用将整个项目分解为多个小型文本文件，便于组织和版本控制，适用于需要复杂结构管理的小说家和专业作者。![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

- [WonderPen（妙笔）](https://www.tominlab.com/wonderpen)-  一款专为长篇写作设计的应用，它通过树状目录组织文档，支持无限层级，便于管理复杂的项目。该工具支持 **Markdown** 格式，并提供多种导出格式（如 **PDF、Word、Epub**），还具备离线优先、云同步、文档快照和打字统计等功能，旨在为小说家、编剧和技术作者提供高效的创作环境。![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

## 办公与协作工具

> 在日常办公、文档协同和内容创作中使用的 Markdown 工具。

### 文档协同

- **飞书文档** - 字节跳动开发的一款企业协作与管理平台，深度支持 **Markdown** 语法，用户可利用快捷键快速创建标题、列表和代码块等，专注于内容创作。它提供多人实时协作、评论、版本历史和权限管理等功能，适用于团队文档、知识库和项目管理。![](./imgs/free.svg) ![](./imgs/all.svg)
- **企业微信文档** - 一套集成在企业微信中的在线协同办公工具。它深度支持 **Markdown** 语法，用户可通过智能工具或直接输入语法快速排版，方便创建和编辑文档。该工具支持多人实时协作、版本历史和权限管理，非常适合在企业内部进行团队文档、会议纪要和项目方案的编写与共享。![](./imgs/free.svg) ![](./imgs/all.svg)
- [石墨文档](https://shimo.im/) - 一款以**云端实时协作**为核心的在线办公服务软件。它支持**Markdown**语法，可实现标题、列表、引用和代码块等基础排版，并支持将文档导出为**Markdown**格式。石墨文档致力于为企业和组织提供全面的办公套件，包括文档、表格、幻灯片、白板和思维导图等，并强调数据安全和多终端同步。![](./imgs/free.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [腾讯文档](https://docs.qq.com/) - 一款由腾讯公司推出的**云端实时协作**办公套件。它集成了在线文档、表格、幻灯片等多种工具，支持多人实时编辑和评论，内容自动同步至云端。在 Markdown 方面，它原生支持基础语法，用户输入时会即时转换为富文本格式。此外，还内置了 **AI 写作助手**，帮助用户高效创作。![](./imgs/free.svg) ![](./imgs/all.svg)
- [Confluence](https://www.atlassian.com/software/confluence) - Atlassian 旗下的团队协作与知识管理平台。它为团队提供共享工作空间，用于创建、组织和分享项目文档、知识库和会议纪要等。Confluence 支持基础的 **Markdown** 语法，但会在输入时实时转换为富文本，方便快速排版，特别适合企业内部的知识沉淀与文档管理。 ![](./imgs/web.svg)
- [Boardmix](https://boardmix.com/)（博思白板）- 一款集多种创意工具于一体的在线协作白板。它在其文档功能中支持 **Markdown** 语法，方便用户进行快速排版，如创建标题、列表和代码块。用户还可以将文档导出为 **Markdown** 格式的文件，便于与 **Obsidian** 等其他应用互通，适用于团队头脑风暴、项目规划和知识整理。![](./imgs/free.svg) ![](./imgs/mac.svg)  ![](./imgs/windows.svg) ![](./imgs/web.svg)
- [Jupyter](https://github.com/jupyter/jupyter) - 一个旨在为交互式计算开发开源软件和服务的非营利项目。其核心产品是 **Jupyter Notebook**，一个基于网页的应用。它通过**Markdown**格式的文本单元格，支持用户创建和分享包含**实时代码、数学公式（LaTeX）、可视化图表和解释性文本**的文档。这为数据科学、机器学习和科学计算提供了强大的交互式开发环境。![](./imgs/mac.svg)
- [ONLYOFFICE DesktopEditors](https://github.com/ONLYOFFICE/DesktopEditors) - 一款开源的桌面办公套件，集成了文档、电子表格、演示文稿和 PDF 编辑器，并支持云端协作和多种格式转换，其中包括将文档转换为 **Markdown**。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [Seafile](https://github.com/haiwen/seafile) - 一款开源的企业级文件同步、共享和协作平台，旨在作为 Dropbox 和 Google Drive 的私有化替代方案。它提供文件同步、在线编辑和版本控制，并内置了支持 **Markdown** 的文档工具和知识库（Wiki）功能，专注于数据安全与用户隐私。![](./imgs/github.svg)

### 思维导图

- [markmap](https://github.com/markmap/markmap) - 一款将 **Markdown** 文本实时转换为思维导图的工具，它通过解析 **Markdown** 固有的层级结构，自动生成交互式、美观的可视化图表。它可作为在线工具、命令行接口或插件在 **VS Code** 和 **Obsidian** 中使用，适合快速梳理思路、项目规划和知识结构化。![](./imgs/github.svg)
- [XMind](https://xmind.com/) - 一款功能强大的思维导图和头脑风暴应用，支持多种思维结构，如鱼骨图、组织结构图和时间轴。它能够导入和导出 **Markdown** 格式的文件，方便用户将结构化的大纲文本转换为思维导图，或将思维导图内容整理成文档，适用于项目规划、知识整理和团队协作。![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [Drawnix](https://github.com/plait-board/drawnix) - 一款基于 **Plait** 框架的开源白板工具，集成了思维导图、流程图和自由画等功能。它支持将 **Markdown** 文本转换为思维导图、将 **Mermaid** 语法转换为流程图，并提供无限画布和插件架构，适用于高效协作和可视化思考。![](./imgs/github.svg) ![](./imgs/web.svg)

### 幻灯片

- [Slidev](https://github.com/slidevjs/slidev) - 一款面向开发者的幻灯片制作工具，它基于 **Markdown**，功能强大且高度可定制。它支持代码高亮、绘图、**LaTeX** 公式和多种导出格式，允许开发者用自己熟悉的语法快速创建演示文稿，并支持一键部署，适用于技术分享、在线课程和项目演示。![](./imgs/github.svg)

- [reveal.js](https://github.com/hakimel/reveal.js) - 一款开源的 **HTML** 演示框架，用于创建功能丰富、基于网页的幻灯片。它支持通过 **Markdown** 和 **HTML** 编写演示文稿，并可集成 **LaTeX** 公式、视频和代码高亮。其核心特色在于支持垂直嵌套的幻灯片、演讲者注释、**PDF** 导出以及丰富的 **API**，让用户可以轻松制作出动态且高度可定制的专业级演示文稿。![](./imgs/github.svg)

- [Marp](https://github.com/marp-team/marp) - 一款基于 **Markdown** 的幻灯片制作生态系统，它通过 **Marpit** 框架和 **Marp CLI** 等工具，让开发者能够用纯文本快速创建美观的演示文稿。该工具支持代码高亮、数学公式、图像等，并可导出为 **PDF** 和 **PPTX** 等多种格式，非常适合技术分享、产品演示和教学。![](./imgs/github.svg)
- [presenterm](https://github.com/mfontanini/presenterm) - 一款强大的命令行演示工具，允许用户用 **Markdown** 格式制作幻灯片，并在终端中直接运行。它支持代码高亮、图片、动图、**Mermaid** 图表、**LaTeX** 公式和自定义主题，并可将演示文稿导出为 **PDF** 和 **HTML** 格式，非常适合开发者和技术人员进行快速分享和演示。![](./imgs/github.svg)
- [mdp](https://github.com/visit1985/mdp) - 一款轻量级的命令行演示工具，它能将 **Markdown** 文件直接在终端中转换为幻灯片。它支持基本的 **Markdown** 语法、颜色和简单的排版，并以水平线作为幻灯片分隔符，非常适合开发者和技术人员进行快速、简洁的命令行演示。![](./imgs/github.svg)
- [deck](https://github.com/k1LoW/deck) - 一个命令行工具，可将 **Markdown** 格式的文档自动转换为 Google Slides 演示文稿，实现了内容与设计的解耦，并支持持续构建与实时预览。![](./imgs/github.svg)

### 便签与清单

- [锤子便签](https://cloud.smartisan.com/apps/note/md.html) - 一款以其优雅设计和独特功能而闻名的笔记应用。它支持 **Markdown** 格式，方便用户进行快速排版，并支持插入图片实现图文混排。其特色功能包括将笔记内容生成精美长图并分享到社交平台，以及云端同步，适用于日常记录、灵感捕捉和社交分享。![](./imgs/free.svg)![](./imgs/web.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [flomo](https://flomoapp.com/) - 一款专注于“卡片笔记”的笔记应用，其核心理念是“记录想法，而非整理想法”。它支持 **Markdown**，鼓励用户以简短、原子化的方式快速捕捉灵感，并通过标签和双向链接来组织和回顾内容。它非常适合进行碎片化知识管理和个人思考沉淀。![](./imgs/free.svg)![](./imgs/all.svg)
- [滴答清单](https://dida365.com/webapp)- 一款功能强大的效率工具，它将待办事项、日历、习惯追踪和番茄工作法等功能集于一身。在任务详情中，该工具支持使用 **Markdown** 语法进行排版，方便用户创建结构化的笔记和备注，帮助高效地管理时间和任务。![](./imgs/free.svg)![](./imgs/all.svg)
- [Tasks.md](https://github.com/BaldissaraMatheus/Tasks.md) - 一款基于 **Markdown** 文件的自托管看板式任务管理工具，它通过现代化的 Web 界面来创建卡片、泳道和标签，并将任务以文件夹和文件的形式存储在本地。![](./imgs/github.svg)

## 网站生成与排版

> 将 Markdown 文档转换成网站、电子书和简历等格式的工具。

### 静态网站

> 生成静态网站或项目文档

- [Docsify](https://github.com/docsifyjs/docsify) - 一款动态文档生成器，它可以直接将 **Markdown** 文件转换为网站，无需静态构建过程。它提供了主题、全文搜索和插件等功能，特别适合用于快速搭建项目文档、博客和个人主页，实现了“所见即所得”的文档网站发布体验。![](./imgs/github.svg)
- [MkDocs](https://github.com/mkdocs/mkdocs) - 一款快速、简洁的静态网站生成器，它能将 Markdown 文档转换成美观的网站，非常适合用于项目文档的构建，并可通过主题和插件进行扩展。![](./imgs/github.svg)
- [Zola](https://github.com/getzola/zola) - 一款由 **Rust** 编写的开源静态网站生成器。它以单个可执行文件提供，主打高性能和一体化体验。其核心特色在于**内置了 Sass 编译、图片处理和本地搜索**等功能，无需额外配置，用户只需用 **Markdown** 等格式编写内容，即可快速生成博客、文档网站和个人主页。![](./imgs/github.svg)
- [VitePress](https://github.com/vuejs/vitepress) - 一款基于 Vite 和 Vue 的静态网站生成器，它能将 Markdown 文件快速转换为美观、高性能的网站，特别适合用于构建项目文档，并支持在 Markdown 中直接使用 Vue 组件。![](./imgs/github.svg)
- [Hugo](https://github.com/gohugoio/hugo) - 一款由 **Go 语言**编写的开源静态网站生成器。它以“惊人的速度”而闻名，能够在毫秒级内构建大型网站。其核心特色在于支持 **Markdown** 等多种格式的内容，并具备丰富的模版、主题和短代码系统。作为一个单一的可执行文件，Hugo 易于部署，并支持实时预览，非常适合用来搭建博客、文档网站和个人主页。![](./imgs/github.svg)
- [Jekyll](https://github.com/jekyll/jekyll) - 一款由 **Ruby** 编写的开源静态网站生成器，也是 **GitHub Pages** 的核心引擎。它允许用户使用 **Markdown**、HTML 等纯文本格式来撰写内容，然后通过模板将这些内容转换为一个功能丰富的静态网站。其核心特色在于**无需数据库或复杂配置**，部署简单，并支持主题、插件等扩展，非常适合搭建个人博客、项目主页或文档站点。![](./imgs/github.svg)
- [Hexo](https://github.com/hexojs/hexo) - 一款由 **Node.js** 驱动的开源博客框架和静态网站生成器。它以“快速、简单、强大”为核心理念。其主要特色在于支持 **GitHub Flavored Markdown**、丰富的插件和主题生态系统，并能通过**一键部署**功能发布到 GitHub Pages 等平台，极大地简化了博客的搭建和管理流程。![](./imgs/github.svg)
- [Pelican](https://github.com/getpelican/pelican) - 一款由 **Python** 编写的开源静态网站生成器。它允许用户使用 **Markdown** 或 **reStructuredText** 等纯文本格式撰写内容，无需数据库或服务器端编程即可生成静态网站。其核心特色在于支持多种语言内容、提供 **Jinja2** 模板主题、自动生成 **RSS/Atom** 订阅源、使用 **Pygments** 进行代码高亮，并拥有一个活跃的插件生态系统，非常适合搭建博客和内容网站。![](./imgs/github.svg)
- [Docusaurus](https://github.com/facebook/docusaurus) - 一款由 **Facebook** 开源的静态网站生成器，专为快速构建漂亮的文档网站而设计。它基于 **React** 和 **MDX**，允许用户使用 **Markdown** 撰写文档内容。其核心特色在于提供了**开箱即用的文档功能、版本控制和国际化**支持。此外，它还支持博客、自定义页面和全文搜索，让开发者可以专注于内容写作，而无需从头构建网站。![](./imgs/github.svg)
### 电子书

> 生成和阅读电子书

- [mdBook](https://github.com/rust-lang/mdBook) - 一款由 **Rust** 语言编写的命令行工具，用于从 **Markdown** 文件快速创建现代化的在线书籍。其核心特色是**速度快、安全性高**，并集成了**全文搜索、代码块语法高亮**、可定制主题、预处理器以及多种格式输出等丰富功能。它被 Rust 官方项目用于创建其编程语言指南，是编写产品文档、教程和课程资料的理想选择。![](./imgs/github.svg)
- [HonKit](https://github.com/honkit/honkit) - 一个命令行工具，用于将 **Markdown** 文档生成为网站、**PDF** 或电子书，它是 **GitBook** 的一个现代化分支。它支持多语言书籍、搜索功能、自定义主题、插件扩展以及 **LaTeX** 公式等，并提供了简单易用的命令行界面，非常适合创建技术文档、教程和产品手册。。![](./imgs/github.svg)
- [GitBook](https://github.com/GitbookIO/gitbook) - 一个用于构建和管理技术文档的平台，它提供了强大的在线协作、分支工作流以及将 **Markdown** 文档转换成美观网站的功能。其核心特色在于**直观的编辑器、强大的版本控制**（类似于 Git）以及**实时发布**，非常适合团队协作撰写产品文档、API 手册和知识库。![](./imgs/github.svg)
- [bookdown](https://github.com/rstudio/bookdown) - 一个开源的 **R 语言包**，旨在帮助用户使用 **R Markdown** 轻松编写书籍和长篇文章。它的核心特色是支持多种输出格式（如 **PDF、HTML、EPUB** 和 **Word**），并能包含动态图表和交互式应用。此外，它支持多种编程语言（不限于 R），允许作者将代码、文本、公式和图表无缝集成，是编写技术书籍、论文和教程的理想工具。![](./imgs/github.svg)
- [Crowbook](https://github.com/crowdagger/crowbook) - Crowbook - 一款用 **Rust** 语言编写的工具，专为小说和虚构文学而设计。它可以将 **Markdown** 格式的书籍转换为 **HTML、LaTeX/PDF** 和 **EPUB**。其核心特色在于**自动处理排版细节**，如标题、章节和目录的生成，让作者可以专注于创作内容，无需为复杂的格式问题分心。![](./imgs/github.svg)
- [Koodo Reader](https://github.com/koodo-reader/koodo-reader) - 一款跨平台电子书阅读器，支持 **EPUB、PDF、Markdown** 等多种格式。其核心特色在于**云同步**、**AI 辅助阅读**和高度可定制的阅读界面。它允许用户在不同设备上无缝阅读，并提供强大的批注、高亮和笔记功能，是管理个人数字图书馆的理想工具。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [calibre](https://github.com/kovidgoyal/calibre) - 一款跨平台的开源电子书管理软件，被誉为电子书界的“瑞士军刀”。其核心功能包括电子书库管理、强大的**格式转换**、编辑和同步。它支持将 **Markdown**、PDF、Word 等多种文件格式转换成 **EPUB、MOBI** 等电子书格式。此外，它还内置了新闻下载和阅读器，可以轻松管理个人数字图书馆。![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [lue](https://github.com/superstarryeyes/lue) - 一款为命令行爱好者设计的**终端电子书阅读器**，支持 EPUB、PDF、**Markdown** 等多种格式，并集成了文本转语音功能、智能进度保存和高度可定制的终端界面，提供高效且沉浸式的阅读体验。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

### 模板

> 可直接复用的 Markdown 模板

- [LapisCV](https://github.com/BingyanStudio/LapisCV) - 一个简历模板项目，它允许用户在 VSCode、Typora 和 Obsidian 等支持 Markdown 的编辑器上，通过 Markdown 格式轻松创建和导出 PDF 格式的简历。![](./imgs/github.svg)

### 公众号

- [WeChat Markdown Editor(md)](https://github.com/doocs/md) - 一款简洁高效的在线 **Markdown** 编辑器。它能将 Markdown 文档实时转换为适合**微信图文**的格式，优化排版体验。其核心特色包括**主题自定义**、支持**多图床**、**内容管理**以及 **AI 助手**等功能，让用户能专注于写作，一键生成美观的微信文章。![](./imgs/github.svg) ![](./imgs/web.svg)
- [Markdown Nice](https://editor.mdnice.com/) - 一款在线 **Markdown** 编辑器和排版工具，它能将 **Markdown** 文本一键美化为适用于各种平台的富文本格式。其核心特色在于提供多种精美的主题模板和实时预览功能，特别适合用于**微信公众号、知乎、CSDN** 等平台的文章排版。用户可以轻松编辑，并一键复制排版好的内容，极大提高了内容创作者的工作效率。![](./imgs/web.svg)

## 编码与开发工具

> 在代码和开发场景中，用于编写、管理 Markdown 的工具。

### 编程工具

- [VS Code](https://github.com/microsoft/vscode) - 一款轻量但强大的源代码编辑器，它通过丰富的扩展生态系统支持几乎所有编程语言。其内置了对 **Markdown** 的全面支持，包括语法高亮、实时预览和多种快捷键，并可通过插件进一步增强其功能。VS Code 还集成了调试和 **Git** 版本控制功能，为开发者提供了一个高效、可定制的编程环境。![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
  - [Foam](https://github.com/foambubble/foam) - 一款基于 **VS Code** 和 **GitHub** 的个人知识管理系统。它通过双向链接和图形化知识网络来组织 **Markdown** 笔记，旨在成为 **Roam Research** 和 **Obsidian** 的开源替代品。其核心特色在于将 VS Code 变为一个强大的笔记编辑和管理环境，利用 Git 进行版本控制，并能轻松发布为静态网站，是构建个人“数字花园”的理想工具。![](./imgs/github.svg)
  - [Markdown All in One](https://github.com/yzhang-gh/vscode-markdown) - 一款为 **VS Code** 设计的扩展，它在 VS Code 内置 Markdown 支持的基础上提供了更丰富的功能。这款插件集成了**键盘快捷键、目录生成、列表编辑、表格格式化、数学公式**支持和批量打印为 HTML 等功能，极大地提升了在 **VS Code** 中编写 Markdown 文档的效率和体验。![](./imgs/github.svg)
  - [Marp for VS Code](https://github.com/marp-team/marp-vscode) - 一款 Visual Studio Code 扩展，它将 **VS Code** 变成了一个幻灯片制作工具。用户只需在 **Markdown** 文档中添加 `marp: true` 即可开始创建演示文稿。该扩展利用 **Marp Markdown** 语法，支持垂直和水平嵌套的幻灯片，并能将它们导出为 **PDF、PPTX、HTML** 或图像等多种格式。![](./imgs/github.svg)
- [Trae](https://www.trae.cn/) - 一款由字节跳动推出的 **AI IDE（集成开发环境）**。它旨在通过**自然语言**帮助开发者完成从代码编写、调试到部署的全流程任务。其核心特色在于将 **AI 能力深度集成到开发环境中**，提供智能代码补全、错误修复、测试用例生成等功能，显著提升开发效率。  ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [Cursor](https://cursor.com/) - 一款专为 **AI 时代**设计的代码编辑器，它集成了强大的 **AI 功能**。它能通过聊天、代码自动补全和智能重写等方式帮助开发者高效编写代码。其核心特色在于将 **GPT-4** 等大语言模型深度融合到编辑器中，让开发者可以用自然语言进行代码交互，显著提升开发效率和体验。  ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [RStudio](https://github.com/rstudio/rstudio) - 一款专为 **R 语言**设计的开源集成开发环境（IDE）。它集成了代码编辑器、控制台、绘图和文件管理等功能，为数据科学、统计分析和学术研究提供强大支持。它的核心特色在于对 **R Markdown** 的深度集成。它允许用户将 **Markdown** 文档与 **R 代码**、**LaTeX** 数学公式和图表相结合，一键生成高质量的报告、幻灯片和网页，实现了可重复性研究。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

### 代码片段管理

- [massCode](https://github.com/massCodeIO/massCode) - 一款免费开源的**代码片段管理器**，专为开发者设计。它允许用户在一个桌面应用中存储、组织和管理代码片段。massCode 支持 **Markdown**、**代码高亮**、文件夹分类和多种编程语言，并提供强大的搜索功能和云同步，帮助开发者更高效地管理他们的代码知识库。![](./imgs/github.svg)
- [Lepton](https://github.com/hackjutsu/Lepton) - 一款基于 **GitHub Gist** 的代码片段管理工具。它支持 **Markdown** 渲染和 **Jupyter Notebook**，让用户可以轻松地在本地管理、搜索和同步他们的代码片段。其核心特色在于与 **GitHub Gist** 的无缝集成，方便开发者在不同设备间同步和分享代码知识。![](./imgs/github.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

### 开发组件

- [Milkdown](https://github.com/Milkdown/milkdown) - 一款受 Typora 启发的所见即所得 Markdown 编辑器，它基于 ProseMirror 和 remark 构建，采用插件驱动架构，提供了高度可定制的编辑体验。![](./imgs/github.svg)
- [Rich](https://github.com/Textualize/rich/tree/master) - 一个在**终端**显示漂亮文本的 **Python 库**。它能为终端输出添加丰富的色彩和样式，并支持**渲染 Markdown、表格和进度条**等复杂内容。其核心特色在于能够将普通的命令行应用变得美观且易于阅读，广泛应用于 CLI 工具、日志输出和开发脚本中。![](imgs/github.svg)
- [Marked.js](https://github.com/markedjs/marked) - 一款快速、轻量级的 **JavaScript Markdown** 编译器。它能在浏览器、服务器和命令行中将 **Markdown** 高效地转换为 **HTML**。其核心特色在于**速度快、体积小**，且功能丰富，支持完整的 CommonMark 规范以及自定义选项，是开发者在项目中实现 Markdown 渲染的理想选择。![](./imgs/github.svg)

- [Vditor](https://github.com/Vanessa219/vditor) - 一款强大的浏览器端 **Markdown** 编辑器，它支持**所见即所得、即时渲染和分屏预览**三种编辑模式。其核心特色在于内置了**脑图、流程图**和多种导出功能，并提供丰富的 API，为开发者提供了高度可定制的集成方案，广泛应用于博客、论坛和内容管理系统。![](./imgs/github.svg)

- [Cherry Markdown Writer](https://github.com/Tencent/cherry-markdown) - 一款开箱即用的 **JavaScript Markdown** 编辑器。它轻量且易于扩展，支持在浏览器和 **Node.js** 环境中运行。其核心特色在于提供双栏编辑、纯预览和无工具栏等多种模式，并内置了图片缩放、表格图表、字体颜色和代码高亮等丰富功能，同时还具备**安全过滤和多主题选择**的特性，为开发者提供了灵活、功能强大的集成方案。![](./imgs/github.svg)
- [md-editor-v3](https://github.com/imzbf/md-editor-v3) - 一款专为 **Vue 3** 设计的 **Markdown** 编辑器组件。它使用 **JSX** 和 **TypeScript** 开发，支持**实时预览、深色主题、Prettier 内容美化**以及图片粘贴和上传等丰富功能。其核心特色在于提供了独立的预览和目录组件，方便开发者在不同场景下灵活使用，是 Vue 3 生态中构建内容编辑功能的理想选择。![](./imgs/github.svg)
- [markdown-it](https://github.com/markdown-it/markdown-it) - 一款快速且可扩展的 **Markdown** 解析器，由 **JavaScript** 编写。它旨在将 Markdown 文本高效地转换为 **HTML**。其核心特色在于遵循 **CommonMark** 规范，拥有极高的解析速度，并提供丰富的插件 **API**，使开发者能够轻松地扩展其功能，以满足各种复杂的 Markdown 渲染需求。![](./imgs/github.svg)
- [OverType](https://github.com/panphora/overtype) - 一款轻量级的 **Markdown** 编辑器库，通过在预览层上叠加不可见的输入区域，实现了完美的所见即所得（WYSIWYG）体验，并提供了主题、快捷键和可选工具栏等功能。![](./imgs/github.svg)
- [Turndown](https://github.com/mixmark-io/turndown) - 是一款使用 **JavaScript** 编写的 HTML 到 Markdown 转换器。它旨在与 [CommonMark](http://commonmark.org/) 兼容，并且提供了许多选项来定制输出样式，例如标题、水平线、列表项目符号和代码块样式等。![](./imgs/github.svg)
- [Markdown UI](https://github.com/BlueprintLabIO/markdown-ui) - 一个用于创建互动式用户界面的库，它允许你直接在 **Markdown** 文档中嵌入动态 UI 组件，如按钮、下拉菜单和表单。通过简单的 DSL 语法，它能够将静态文档即时转变为交互式体验，并且与任何前端框架兼容，特别适用于由 AI 生成内容和快速原型构建的场景。![](./imgs/github.svg)

## 转换工具

> 将 Markdown 转换为其他格式，反之亦然。

- [pandoc](https://github.com/jgm/pandoc) - 一款强大的**命令行工具**，可将文件从一种标记语言转换为另一种。它支持将 **Markdown、HTML、PDF、Docx** 等超过 40 种格式互相转换，被誉为文档转换领域的“瑞士军刀”。其核心特色在于**高度可扩展**和**配置灵活**，是学术写作、技术文档和电子书制作等场景中不可或缺的工具。![](./imgs/github.svg) ![](./imgs/terminal.svg)
  - [Eisvogel](https://github.com/Wandmalfarbe/pandoc-latex-template) - 一款简洁、美观的 **Pandoc LaTeX 模板**，专门用于将 Markdown 文件转换为 PDF 或 LaTeX 格式，特别适合创建计算机科学领域的讲义和练习册。![](./imgs/github.svg)
  - [patat](https://github.com/jaspervdj/patat) -  (Presentations Atop The ANSI Terminal) 是一款功能丰富的命令行演示工具。它支持多种输入格式（如 **Markdown**、rST、Org-mode 等），基于 Pandoc 进行转换，并提供了代码高亮、自动重载、演讲者笔记和图像支持等功能，让用户能够在终端中创建并展示专业的幻灯片。![](./imgs/github.svg)

- [feishu2md](https://github.com/Wsine/feishu2md) - 一款用 Go 语言编写的工具，能够将**飞书**文档转换为 **Markdown** 文件。它支持通过命令行、Docker 和在线版本等多种方式使用，并且可以批量下载文件夹或知识库中的文档。![](./imgs/github.svg)
- [noted.md](https://github.com/tejas-raskar/noted.md) - 一个命令行工具，它利用大语言模型（LLMs）将**手写笔记**（包括 PDF 和图片格式）转换为 Markdown 文件。该工具能够识别数学公式并将其正确格式化为 LaTeX，同时支持批量处理和自定义提示。![](./imgs/github.svg) ![](./imgs/terminal.svg)
- [MarkItDown](https://github.com/microsoft/markitdown) - 微软开源的一款强大的 **Python 工具**，用于将 **PDF、Word、Excel** 等多种文件格式转换为 **Markdown**。其核心特色在于能够高效处理复杂文档中的**表格和图片**，并将其结构化为 Markdown 格式。它特别适合用于**大语言模型**的训练数据准备和文本分析，极大地简化了文档处理的流程。![](./imgs/github.svg)
- [Jupytext](https://github.com/mwouts/jupytext) - 一款旨在将 **Jupyter Notebook** 转换为纯文本格式（如 **Markdown、Python** 等）的开源工具。它让用户可以使用自己喜欢的编辑器编辑 Notebook，并通过 **Git** 进行版本控制。其核心功能在于支持将 Notebook 以“成对文件”形式保存，即 `.ipynb` 文件与纯文本文件同步更新，从而简化了多人协作和冲突解决。![](./imgs/github.svg)
- [keep-it-markdown (KIM)](https://github.com/djsudduth/keep-it-markdown) - 一个开源的 Python 命令行脚本，它使用非官方的 Google Keep API，将你的 Keep 笔记批量转换为 **Markdown** 格式，并可导入至 Obsidian、Logseq、Notion 等多种笔记应用。![](./imgs/github.svg) ![](./imgs/terminal.svg)
- [YARLE (Yet Another RLE)](https://github.com/akosbalasko/yarle) - 一款强大的开源工具，可将 Evernote 的 `.enex` 笔记文件完整地转换为可定制的 **Markdown** 文件，支持元数据、内部链接、附件和富文本，并能适配 Obsidian、Logseq 等多种笔记应用。![](./imgs/github.svg) ![](./imgs/terminal.svg)
- [Trafilatura](https://github.com/adbar/trafilatura) - 一个基于 **Python** 的命令行工具和库，用于从网页中提取文本和元数据。它的主要功能包括网络爬取、下载、抓取和提取主要文本、元数据和注释。该工具能够将输出转换为多种常见格式，包括 **CSV**、**JSON**、**HTML**、**Markdown**、**TXT** 和 **XML**。![](./imgs/github.svg) ![](./imgs/terminal.svg)
- [Zotero Better Notes](https://github.com/windingwind/zotero-better-notes) - 一款用于 Zotero 的插件，旨在优化文献管理中的笔记工作流。它支持直接粘贴 **Markdown** 内容、通过模板自动生成笔记，并能将笔记导出为 **Markdown**、Word、PDF 等多种格式，适用于需要高效整合文献与笔记的研究人员。![](./imgs/github.svg)

### 转成图片

- [MD2Card](https://md2card.com/zh) - 一个在线工具，可以将 **Markdown** 文档**一键转换为精美的知识卡片**。其核心特色在于提供**超过 20 种卡片风格**，并支持完整的 **Markdown 语法**，包括表格、代码块和数学公式。该工具支持实时预览、图片导出和 **API 调用**，非常适合个人用户将学习笔记和内容整理成美观的卡片，也为企业和团队提供了私有部署方案。![](./imgs/web.svg)

- [md.hi-dhl.com](https://md.hi-dhl.com/) - 一个可以将 **Markdown** 文档**一键转换成“小红书风格”海报**的在线工具。其核心特色在于**自动适配排版、提供多种精美模板**，并能将 Markdown 文档中的标题、列表、图片等元素美化为引人注目的视觉内容，极大地简化了社交媒体内容的制作流程。![](./imgs/free.svg) ![](./imgs/web.svg)
- [Markdown To Image](https://github.com/gcui-art/markdown-to-image/tree/main) - 一款用于将 Markdown 文本渲染为漂亮图片的工具，尤其适合用于社交媒体分享。其核心特色在于能够将纯文本内容快速转化为具有视觉吸引力的图像，支持自定义样式、主题和排版，让用户可以轻松创建并分享美观的代码片段、笔记或文章。![](./imgs/github.svg)
- [Markdown To Image Serve](https://github.com/wxingheng/markdown-to-image-serve) - 一款高效的 Markdown 转图片服务，主要通过 API 接口将 Markdown 内容转换为精美图片。该服务基于 Go 语言和 JavaScript 开发，其核心特色在于能够作为独立的微服务部署，提供快速、稳定的图片生成能力，特别适合需要批量处理或在应用中集成 Markdown 渲染功能的场景。![](./imgs/github.svg)
- [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) - 一款功能强大的 HTML 到 Markdown 转换工具。它支持将复杂的 HTML 结构（包括整个网站）转换为简洁、可读的 Markdown。其核心特色在于提供了 Go 语言库、命令行工具、REST API 和在线演示，并能精确处理列表、表格、代码块等多种元素，同时支持定制化选项和插件，为开发者提供了灵活、高效的转换方案。![](./imgs/github.svg)

## 其他工具

### 命令行工具

> 在终端上使用 Markdown

- [mdq](https://github.com/yshavit/mdq) - 一款强大的**命令行工具**，它允许你像 **jq** 处理 **JSON** 一样，快速查询和筛选 **Markdown** 文档中的特定内容。其核心特色在于提供简洁的查询语法，能够提取标题、代码块、链接、表格等任意元素，尤其适合用于**自动化工作流**和批量处理 Markdown 文档。![](./imgs/github.svg) ![](./imgs/terminal.svg)![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [Glow](https://github.com/charmbracelet/glow) - 一款命令行 **Markdown** 阅读器，它能在终端中以美观的样式渲染 Markdown 文件。其核心特色在于可以自动发现**本地或 Git 仓库**中的 Markdown 文件，并提供**模糊搜索和目录导航**功能，让用户无需离开终端，即可方便快捷地阅读和管理所有 Markdown 文档。![](./imgs/github.svg) ![](./imgs/terminal.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [nb](https://github.com/xwmx/nb) - 一款命令行和本地网络笔记应用，它以**纯文本格式**存储笔记，支持 **Markdown、Org、LaTeX** 等多种格式。其核心特色在于集成了 **Git 版本控制、加密**、强大的**书签管理**和 **Pandoc 转换**等功能，让用户可以在终端中高效地记录、管理和同步笔记，是极客风格的知识管理工具。![](./imgs/github.svg) ![](./imgs/terminal.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [doxx](https://github.com/bgreenwell/doxx) - 一款为终端设计的 `.docx` 文件查看器，它可以将 Word 文档的内容在命令行中美观渲染，并支持 **Markdown**、CSV、JSON 等多种格式导出，为开发者和命令行用户提供高效的文件浏览、搜索和数据提取体验。![](./imgs/github.svg) ![](./imgs/terminal.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

### 检查与辅助

- [markdownlint](https://github.com/DavidAnson/markdownlint) - 一款用于检查 **Markdown** 语法和风格的 **Node.js** 静态分析工具。它通过一系列规则来帮助用户保持 Markdown 文件格式的一致性，避免潜在的解析问题。其核心特色在于基于 **micromark** 解析器，支持 **CommonMark** 和 **GFM** 规范，并能通过各种插件集成到 **VS Code、Vim、Emacs** 等编辑器中，是确保文档质量和风格统一的利器。![](./imgs/github.svg)
- [textlint](https://github.com/textlint/textlint) - 一款针对自然语言的 **lint 工具**，类似于 **ESLint**。它主要用于检查文本中的**语法、拼写和风格**问题。其核心特色在于不预装任何规则，用户可根据需求通过 **npm** 安装所需的规则包，并且默认支持 **Markdown** 和纯文本文件，还可以通过插件扩展到其他格式，是确保文档质量和写作规范的利器。![](./imgs/github.svg)
- [Marksman](https://github.com/artempyanykh/marksman) - 一款通过 **LSP（语言服务器协议）** 为 **Markdown** 文档提供智能辅助的工具。它能够集成到 **VS Code、Neovim** 和 **Emacs** 等多种代码编辑器中。其核心特色在于将**自动补全、跳转定义、查找引用和重构**等代码编辑器功能带到 Markdown 写作中。尤其值得一提的是，它支持 **Zettelkasten 式的 wiki 链接**，并能检测出断开的引用和重复的标题，极大地提升了笔记和文档管理的效率。![](./imgs/github.svg)

### AI 相关工具

- [ReadmeAI](https://github.com/eli64s/readme-ai) - 一款由 **AI** 驱动的 **README** 文件自动生成工具。用户只需提供代码仓库的 URL 或路径，它就能利用语言模型自动生成**结构清晰、内容详细**的 README 文件。其核心特色在于支持多种平台和自定义样式，旨在**简化文档编写流程**，让开发者可以专注于代码，而非文档。![](./imgs/github.svg)

- [Firecrawl](https://github.com/mendableai/firecrawl) - 一款 **API 服务**，能将任意网页抓取并转换为**干净的 Markdown** 或**结构化数据**。其核心特色在于**自动去除网页中的广告、导航栏**等干扰内容，提取出核心信息。它特别适合为 **AI 应用**提供高质量的数据，简化了数据处理流程。![](./imgs/github.svg)

- [ScrapeGraphAI](https://github.com/ScrapeGraphAI/Scrapegraph-ai) - 一款基于 **Python** 的网络爬虫库，它利用大型语言模型（LLM）和图逻辑来为网站、文档和 XML 文件创建爬取管道。它最突出的一个功能是 **Markdownify**，能够将任何网页转换为干净、格式化的 **Markdown**。![](./imgs/github.svg)

----

## 书籍

- [《了不起的 Markdown：大语言模型时代的通用语言》](https://book.douban.com/subject/37478156/) - 一本系统介绍大语言模型时代写作通用语言的实践指南，以“排版技巧—应用场景—语法规范—工具赋能—知识管理—智能协作”为主线，深度整合 Markdown 核心语法、工具生态与 AI 应用。也是国内第一本全面介绍 Obsidian 功能和实践的书籍。