<!-- Generated from data/catalog.json by npm run build. -->
<!-- lint disable double-link -->
<!-- Repeated navigation links are intentional; catalog URL uniqueness is checked separately. -->
# Awesome Markdown [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

**English** | [简体中文](README.zh-CN.md)

Markdown tools for writing, knowledge management, development, collaboration, conversion and publishing.

Find editors, libraries, extensions, services, specifications and learning resources for working with Markdown—from personal notes to application development.

[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-blue.svg)](LICENSE) [![Catalog checks](https://github.com/mansucache/awesome-markdown/actions/workflows/lint.yml/badge.svg)](https://github.com/mansucache/awesome-markdown/actions/workflows/lint.yml)

## Contents

<!-- lint disable awesome-list-item -->

- [Find a tool for your task](#find-a-tool-for-your-task)
- [How to choose](#how-to-choose)
- [Choose with an example](#choose-with-an-example)
- [Syntax Specifications and Extensions](#syntax-specifications-and-extensions)
- [Writing and Editing](#writing-and-editing)
  - [Dedicated Markdown Editors](#dedicated-markdown-editors)
  - [Notes and Knowledge Management](#notes-and-knowledge-management)
  - [Long-form Writing](#long-form-writing)
- [Office and Collaboration](#office-and-collaboration)
  - [Document Collaboration](#document-collaboration)
  - [Mind Mapping](#mind-mapping)
  - [Presentation](#presentation)
  - [Notes and Task Lists](#notes-and-task-lists)
- [Website Generation and Typesetting](#website-generation-and-typesetting)
  - [Static Site Generators](#static-site-generators)
  - [E-books](#e-books)
  - [Templates](#templates)
  - [WeChat Official Account](#wechat-official-account)
- [Coding and Development Tools](#coding-and-development-tools)
  - [Programming Tools](#programming-tools)
  - [Code Snippet Management](#code-snippet-management)
  - [Development Components](#development-components)
- [Conversion Tools](#conversion-tools)
  - [To Markdown](#to-markdown)
  - [Image Generation](#image-generation)
- [Miscellaneous](#miscellaneous)
  - [Command-line Tools](#command-line-tools)
  - [Checking and Assistance](#checking-and-assistance)
  - [AI-related Tools](#ai-related-tools)
- [Books](#books)
- [Updates](#updates)

<!-- lint enable awesome-list-item -->

## Find a tool for your task

| Your task                                    | Browse                                                                                                                                                                  |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Write and manage knowledge                   | [Dedicated Markdown Editors](#dedicated-markdown-editors) · [Notes and Knowledge Management](#notes-and-knowledge-management) · [Long-form Writing](#long-form-writing) |
| Collaborate, map ideas and manage tasks      | [Document Collaboration](#document-collaboration) · [Mind Mapping](#mind-mapping) · [Notes and Task Lists](#notes-and-task-lists)                                       |
| Maintain READMEs and technical documentation | [Programming Tools](#programming-tools) · [Checking and Assistance](#checking-and-assistance)                                                                           |
| Build a Markdown editor or renderer          | [Development Components](#development-components)                                                                                                                       |
| Handle AI output and extract source material | [AI-related Tools](#ai-related-tools) · [To Markdown](#to-markdown)                                                                                                     |
| Convert files or create images               | [Conversion Tools](#conversion-tools) · [Image Generation](#image-generation)                                                                                           |
| Publish a site, book or presentation         | [Static Site Generators](#static-site-generators) · [E-books](#e-books) · [Presentation](#presentation) · [WeChat Official Account](#wechat-official-account)           |
| Work in the terminal                         | [Command-line Tools](#command-line-tools)                                                                                                                               |
| Learn syntax and find templates              | [Syntax Specifications and Extensions](#syntax-specifications-and-extensions) · [Templates](#templates) · [Books](#books)                                               |

<a id="图标说明"></a>
<a id="平台支持"></a>
<a id="工具支持"></a>

## How to choose

**Writers and knowledge workers:** compare file storage, export, sync and the portability of links and attachments.

**Developers:** distinguish standalone apps, editor components, parsers and APIs; check framework and runtime requirements.

**Conversion and publishing:** test representative documents for tables, math, images and links before choosing a workflow.

Markdown files, Markdown typing shortcuts and Markdown import/export are different capabilities. Support for one does not imply the others.

Labels indicate platforms and integrations. “Free option” may mean a limited tier or personal use. “Cross-platform” does not mean feature parity. Open source applies to the linked project, not necessarily every related hosted service.

Descriptions are based on source material, not a claim that every app has been tested. See the [review log](docs/review-log.md) and [historical or pending entries](docs/catalog-history.md).

## Choose with an example

Start with the [scenario selection guide](guides/choosing-tools.md), then try [one Markdown file in three parser configurations](guides/markdown-compatibility.md). The example includes reproducible input, output and limitations.

<a id="语法规范与扩展"></a>

## Syntax Specifications and Extensions

Check the syntax specification used by the target tool. Extensions may render differently across implementations.

- [CommonMark](https://commonmark.org/) - A Markdown specification with a shared test suite for checking parser and renderer behavior across implementations.<br>
  <span>`Specification`</span>

- [GFM (GitHub Flavored Markdown)](https://github.github.com/gfm/) - GitHub's Markdown dialect, extending CommonMark with tables, task lists, strikethrough and autolinks. Use it when writing READMEs and issues.<br>
  <span>`Documentation`</span>

- [Obsidian Flavored Markdown](https://help.obsidian.md/obsidian-flavored-markdown) - Obsidian's Markdown extensions, including wiki links, embeds, math and Mermaid. Check extension compatibility before moving notes to another renderer.<br>
  <span>`Documentation`</span>

- [Pandoc's Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown) - A Markdown variant supporting tables, footnotes and definition lists for workflows that publish the same manuscript to Word, PDF and EPUB.<br>
  <span>`Documentation`</span>

- [R Markdown](https://github.com/rstudio/rmarkdown) - Combines R code, computed results and prose to produce reproducible reports, slides and websites for analysis and research.<br>
  <span>`Open source` · `R`</span>

- [Quarkdown](https://github.com/iamgio/quarkdown) - Adds functions, variables and scripting to Markdown typesetting to produce books, articles and presentations with programmable layouts.<br>
  <span>`Open source`</span>

<a id="写作与编辑环境"></a>

## Writing and Editing

<a id="专业-markdown-编辑器"></a>

### Dedicated Markdown Editors

Choose source editing, WYSIWYG or a separate previewer first; then compare document organization and export.

- [Typora](https://typora.io/) - Combines Markdown editing and preview in one interface, with outlines, search and PDF, HTML and Word export for desktop writing.<br>
  <span>`macOS` · `Windows` · `Linux` · [Usage guide](https://github.com/mansucache/awesome-typora)</span>

  - [Typora Plugin](https://github.com/obgnail/typora_plugin) - Adds tag management, file search, automatic numbering and diagrams to an existing Typora workflow.<br>
    <span>`Open source` · `Typora extension`</span>

  - [VLOOK](https://github.com/MadMaxChow/VLOOK) - A Typora theme and extension package for document layouts, navigation and presentation features.<br>
    <span>`Open source` · `Typora extension` · `macOS` · `Windows` · `Linux`</span>

- [mdedit.ai](https://mdedit.ai/) - A technical writing workspace with live preview, Mermaid, AI assistance, collaboration and publishing. Core editing is free; collaboration and AI depend on the plan.<br>
  <span>`Free option` · `macOS` · `Windows` · `Linux` · `Web`</span>

- [Bear](https://bear.app/) - An Apple-platform notes app that organizes Markdown notes with tags and syncs across devices for everyday notes and writing material.<br>
  <span>`macOS` · `iOS`</span>

- [Markdown Monster](https://github.com/RickStrahl/MarkdownMonster) - A Windows Markdown editor with syntax highlighting, live preview, Git integration and blog publishing. Continued use requires a paid license.<br>
  <span>`Windows`</span>

- [Markor](https://github.com/gsantner/markor) - Edits Markdown, todo.txt and Zim text on Android, including offline notes and plain-text task lists.<br>
  <span>`Open source` · `Android`</span>

- [MarkEdit](https://github.com/MarkEdit-app/MarkEdit) - An open-source macOS Markdown editor that can be customized with scripts and CodeMirror extensions.<br>
  <span>`Open source` · `macOS`</span>

- [Quillite Markdown](https://github.com/liuhang798/quillite-markdown) - A reading-first desktop app for local Markdown files, with split-pane editing, diagrams, math and document export. Windows and macOS builds are unsigned; daily anonymous activity telemetry is independent of the product improvement opt-in.<br>
  <span>`Open source` · `Windows` · `macOS` · `Linux` · [Website](https://qm.ssssa.cn/)</span>

- [Cmd Markdown](https://www.zybuluo.com/mdeditor) - A browser Markdown editor with live preview, cloud storage, version history and diagram syntax for online writing.<br>
  <span>`Free option` · `Web`</span>

- [Effie](https://www.effie.co/) - Combines Markdown writing and mind maps with cross-platform sync for turning outlines into prose.

- [iA Writer](https://ia.net/writer) - A plain-text Markdown writing environment with a focus mode for working on continuous prose.<br>
  <span>`macOS` · `Windows` · `iOS`</span>

- [Ulysses](https://ulysses.app/) - An Apple-platform writing app with Markdown XL, library sync and document export. Check its extended syntax when moving work between tools.<br>
  <span>`macOS` · `iOS`</span>

- [MarkText](https://github.com/marktext/marktext) - A cross-platform open-source desktop Markdown editor with live preview and theme switching.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux`</span>

- [StackEdit](https://github.com/benweet/stackedit) - A browser Markdown editor that syncs with services such as Google Drive and GitHub for cloud or repository-based writing.<br>
  <span>`Open source` · `Web`</span>

- [MacDown](https://github.com/MacDownApp/macdown) - An open-source macOS Markdown editor with live preview and customizable rendering.<br>
  <span>`Open source` · `macOS`</span>

- [Marked 2](https://marked2app.com/) - A macOS Markdown preview and export app with multiple rendering engines and custom styles, used alongside an existing editor.<br>
  <span>`macOS`</span>

- [MarkFlowy](https://github.com/drl990114/MarkFlowy) - Offers source and WYSIWYG editing with AI assistance for switching between direct text editing and visual writing.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux`</span>

- [mkeditor](https://github.com/versyxdigital/mkeditor) - A Markdown editor with desktop and web versions, CommonMark support and light and dark themes.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux` · `Web`</span>

- [PanWriter](https://github.com/mb21/panwriter) - A desktop Markdown editor with Pandoc integration and paginated preview for checking page layout while writing.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux`</span>

- [Quillpad](https://github.com/quillpad/quillpad) - An open-source Android notes app with Markdown, task lists and attachments for mobile notes and tasks.<br>
  <span>`Open source` · `Android`</span>

- [Ghostwriter](https://github.com/KDE/ghostwriter) - A Markdown editor with focus and Hemingway modes and document export. Official downloads emphasize Windows and Linux; macOS requires a separate build setup.<br>
  <span>`Open source` · `Windows` · `Linux`</span>

<a id="笔记与知识管理软件"></a>

### Notes and Knowledge Management

Check storage, linking and migration. Markdown typing shortcuts do not mean notes are saved as .md files.

- [Persona](https://github.com/jayamitkatariya/personacli) - A local workspace for notes, tasks and AI chat, storing content as Markdown files without requiring an account for note organization.<br>
  <span>`Open source` · `CLI`</span>

- [Obsidian](https://obsidian.md/) - Organizes local Markdown notes with links and a graph for building relationships across a long-lived collection of knowledge.<br>
  <span>`Free option` · `macOS` · `Windows` · `Linux` · `Android` · `iOS`</span>

- [Notion](https://www.notion.com/) - Combines notes, tasks, databases and project management with Markdown typing shortcuts. Check file import and export separately from input syntax.<br>
  <span>`Free option` · `macOS` · `Windows` · `Android` · `iOS` · `Web`</span>

- [AFFiNE](https://github.com/toeverything/AFFiNE) - An open-source, local-first workspace combining documents, whiteboards and databases for written and visual knowledge work.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux` · `Web`</span>

- [Yuque](https://www.yuque.com/) - Organizes team documents in structured knowledge bases. Check the supported import and export paths before migrating Markdown documents.

- [Youdao Note](https://note.youdao.com/) - Cross-platform notes and Markdown writing with AI drafting, rewriting and summarization for capture and later organization.

- [Yinxiang Biji](https://www.yinxiang.com/) - Combines Markdown editing and preview with device sync and web clipping for collecting source material alongside notes.

- [Memos](https://github.com/usememos/memos) - An open-source, self-hosted app for short Markdown notes, tags and full-text search.<br>
  <span>`Open source` · `Web`</span>

- [Logseq](https://github.com/logseq/logseq) - An outliner with linked notes, PDF annotation and whiteboards for developing ideas from individual blocks. Check storage and migration behavior for the edition you use.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux` · `Android`</span>

- [SiYuan](https://github.com/siyuan-note/siyuan) - A block-based knowledge workspace with references, linked notes and WYSIWYG editing for reusing passages across documents.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux`</span>

- [VNote](https://github.com/vnotex/vnote) - A Qt-based desktop Markdown notes app with syntax highlighting, live preview and full-text search.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux`</span>

- [Zettlr](https://github.com/Zettlr/Zettlr) - A writing workbench for academic and Zettelkasten workflows, with citation management and multi-format export.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux`</span>

- [NoteGen](https://github.com/codexu/note-gen) - Organizes captured material into Markdown notes with AI, GitHub sync and retrieval workflows for further writing.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux` · `Android` · `iOS`</span>

- [MiaoYan](https://github.com/tw93/MiaoYan) - A macOS Markdown notes app with dark mode, presentation mode, LaTeX and Mermaid for writing with formulas and diagrams.<br>
  <span>`Open source` · `macOS`</span>

- [Yank Note](https://github.com/purocean/yn) - A Monaco-based Markdown editor with executable code blocks and AI assistance for keeping code and explanations together.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux`</span>

- [QOwnNotes](https://github.com/pbek/QOwnNotes) - Stores notes and tasks as Markdown files and integrates with Nextcloud and ownCloud for existing file-sync workflows.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux`</span>

- [MindForger](https://github.com/dvorka/mindforger) - Combines Markdown editing with a knowledge graph for navigating relationships between personal notes.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux`</span>

- [Joplin](https://github.com/laurent22/joplin) - An open-source Markdown notes app with end-to-end encryption and multiple sync options for cross-device use.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux` · `Android` · `iOS`</span>

- [Inkdrop](https://www.inkdrop.app/) - A Markdown notes app for developers with encryption and plugins for collecting technical knowledge and extending the editor.<br>
  <span>`macOS` · `Windows` · `Linux` · `Android` · `iOS`</span>

- [Tangent Notes](https://www.tangentnotes.com/) - Stores local Markdown files and visualizes branching paths through connected notes for exploratory reading and writing.<br>
  <span>`Open source` · `Free option` · `macOS` · `Windows` · `Linux`</span>

- [ima.copilot](https://ima.qq.com/) - An AI knowledge workspace that imports Markdown files as editable notes and uses collected material for questions and writing.<br>
  <span>`Web`</span>

- [Notable](https://github.com/notable/notable) - A Markdown-based notes app with a VS Code-style editor and nested tags. Only older versions are open source.<br>
  <span>`macOS` · `Windows` · `Linux`</span>

- [Khoj](https://github.com/khoj-ai/khoj) - Adds semantic search and AI answers to Markdown notes and other documents, with local or cloud model options.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux` · `Android` · `Obsidian plugin`</span>

- [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) - An open-source workspace for notes, projects and databases, with Markdown document import and export; databases use CSV export.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux` · `Android` · `iOS`</span>

<a id="长篇写作"></a>

### Long-form Writing

Compare chapter organization, outlines, revision history and export formats.

- [novelWriter](https://github.com/saga-soft/novelWriter) - Organizes novels and long manuscripts with outlines, metadata and comments. Its Markdown-inspired syntax differs from standard Markdown.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux`</span>

- [WonderPen](https://www.tominlab.com/wonderpen) - Organizes manuscripts in a document tree with Markdown, sync and snapshots for chapter-based writing and revision.<br>
  <span>`macOS` · `Windows` · `Linux`</span>

<a id="办公与协作工具"></a>

## Office and Collaboration

<a id="文档协同"></a>

### Document Collaboration

Check collaboration and permissions, then distinguish Markdown input, import/export and actual storage.

- [Feishu Docs](https://www.feishu.cn/product/docs) - Collaborative cloud documents with Markdown export through Download as. Exports retain body structure but exclude comments.<br>
  <span>`Web`</span>

- [WeCom Docs](https://doc.weixin.qq.com/) - Collaborative documents in WeCom; its smart documents accept Markdown/MDX imports through the WeCom CLI.<br>
  <span>`Web`</span>

- [Shimo](https://shimo.im/) - A cloud collaboration suite whose team space can preview Markdown files. Preview support alone does not establish native Markdown editing or export.<br>
  <span>`Web`</span>

- [Tencent Docs](https://docs.qq.com/) - Online collaborative documents; the Enterprise SaaS editor documents basic Markdown formatting through its professional toolbar.<br>
  <span>`Web`</span>

- [Confluence](https://www.atlassian.com/software/confluence) - A team documentation platform with Markdown typing shortcuts that turn input into rich text, suited to existing Atlassian workflows.<br>
  <span>`Web`</span>

- [Boardmix](https://boardmix.com/) - A collaborative whiteboard that imports Markdown documents to generate AI slides.<br>
  <span>`Web`</span>

- [Jupyter](https://github.com/jupyter/jupyter) - Combines executable code, Markdown cells, math and visualizations in interactive notebooks for analysis, research and teaching.<br>
  <span>`Open source` · `Cross-platform`</span>

- [HedgeDoc](https://github.com/hedgedoc/hedgedoc) - A self-hostable collaborative Markdown editor with real-time editing, diagrams and presentation features for shared documents.<br>
  <span>`Open source` · `Web`</span>

- [ONLYOFFICE Desktop Editors](https://github.com/ONLYOFFICE/DesktopEditors) - A desktop office suite whose Doc2md plugin converts formatted documents to Markdown or HTML.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux`</span>

- [Seafile](https://github.com/haiwen/seafile) - A file-sync and collaboration platform with Markdown-related document tools for maintaining shared team knowledge.<br>
  <span>`Open source`</span>

<a id="思维导图"></a>

### Mind Mapping

Distinguish diagrams generated from text from apps that let you continue editing the map.

- [markmap](https://github.com/markmap/markmap) - Turns Markdown headings and lists into interactive mind maps, with web, CLI and editor integrations for reusing existing outlines.<br>
  <span>`Open source` · `VS Code extension` · `Obsidian plugin`</span>

- [XMind](https://xmind.com/) - Moves between Markdown outlines and editable mind maps through import and export.<br>
  <span>`Free option` · `macOS` · `Windows` · `Linux` · `Android` · `iOS`</span>

- [Drawnix](https://github.com/plait-board/drawnix) - An open-source Plait-based whiteboard that turns Markdown into mind maps and Mermaid into flowcharts.<br>
  <span>`Open source` · `Web`</span>

<a id="幻灯片"></a>

### Presentation

Choose the final delivery format first: web, PDF, PPTX, Google Slides or terminal.

- [Slidev](https://github.com/slidevjs/slidev) - A Markdown presentation tool for developers with code highlighting, drawing and LaTeX for technical talks.<br>
  <span>`Open source`</span>

- [reveal.js](https://github.com/hakimel/reveal.js) - An HTML presentation framework with Markdown input, nested slides, speaker notes and PDF export for customizable web presentations.<br>
  <span>`Open source`</span>

- [Marp](https://github.com/marp-team/marp) - Creates slides from Markdown with code highlighting, math and PDF or PPTX export for text-based presentation workflows.<br>
  <span>`Open source`</span>

- [presenterm](https://github.com/mfontanini/presenterm) - Runs Markdown presentations in the terminal with code highlighting, Mermaid and LaTeX support.<br>
  <span>`Open source` · `CLI`</span>

- [mdp](https://github.com/visit1985/mdp) - Displays text-focused Markdown slides in the terminal, using horizontal rules to separate slides.<br>
  <span>`Open source` · `CLI`</span>

- [deck](https://github.com/k1LoW/deck) - A CLI that turns Markdown into Google Slides for presentations that continue in Google's collaborative editor.<br>
  <span>`Open source` · `CLI`</span>

<a id="便签与清单"></a>

### Notes and Task Lists

Prioritize capture and task management, and check Markdown export if migration matters.

- [Smartisan Notes](https://cloud.smartisan.com/apps/note/md.html) - Formats Markdown notes and shares them as images for publishing short pieces of text.<br>
  <span>`Free option` · `Web` · `Android` · `iOS`</span>

- [TickTick](https://dida365.com/webapp) - Combines tasks, calendars and habit tracking, with Markdown formatting in task descriptions.<br>
  <span>`Free option` · `Cross-platform`</span>

- [Tasks.md](https://github.com/BaldissaraMatheus/Tasks.md) - A self-hosted Kanban board that stores task cards as Markdown files.<br>
  <span>`Open source`</span>

<a id="网站生成与排版"></a>

## Website Generation and Typesetting

<a id="静态网站"></a>

### Static Site Generators

Includes static builders and browser-loaded documentation tools. Choose by build environment, themes and interactive content.

- [Docsify](https://github.com/docsifyjs/docsify) - Loads Markdown into a documentation website in the browser without a prebuild step, with themes, search and plugins.<br>
  <span>`Open source`</span>

- [MkDocs](https://github.com/mkdocs/mkdocs) - Builds project documentation websites from Markdown with configurable themes and plugins.<br>
  <span>`Open source`</span>

- [Zola](https://github.com/getzola/zola) - A Rust-based static site generator distributed as a single binary, with Sass, image processing and local search.<br>
  <span>`Open source`</span>

- [VitePress](https://github.com/vuejs/vitepress) - A Vite- and Vue-based documentation generator that supports Vue components inside Markdown for interactive documentation.<br>
  <span>`Open source` · `Vue`</span>

- [Hugo](https://github.com/gohugoio/hugo) - A Go-based static site generator with themes and shortcodes for blogs and other Markdown-driven sites.<br>
  <span>`Open source`</span>

- [Jekyll](https://github.com/jekyll/jekyll) - A Ruby-based static site generator supported by GitHub Pages for publishing Markdown from a repository.<br>
  <span>`Open source`</span>

- [Hexo](https://github.com/hexojs/hexo) - A Node.js blog framework with GFM, themes, plugins and GitHub Pages deployment.<br>
  <span>`Open source`</span>

- [Pelican](https://github.com/getpelican/pelican) - A Python static site generator with multilingual content, Jinja2 themes and RSS or Atom feeds.<br>
  <span>`Open source`</span>

- [Docusaurus](https://github.com/facebook/docusaurus) - A React- and MDX-based documentation generator with versioning, internationalization and search.<br>
  <span>`Open source` · `React`</span>

<a id="电子书"></a>

### E-books

Includes book builders and reading managers. Check output formats when you need a publication file.

- [mdBook](https://github.com/rust-lang/mdBook) - Builds searchable online books from Markdown chapters, with code highlighting for tutorials and technical documentation.<br>
  <span>`Open source` · `CLI`</span>

- [HonKit](https://github.com/honkit/honkit) - Generates websites and books from Markdown, continuing the legacy GitBook toolchain for existing manuscripts.<br>
  <span>`Open source` · `CLI`</span>

- [GitBook](https://github.com/GitbookIO/gitbook) - The open-source frontend for published GitBook documentation. This repository is not the full hosted authoring platform or the deprecated book-building CLI.<br>
  <span>`Open source` · `Node.js`</span>

- [bookdown](https://github.com/rstudio/bookdown) - An R Markdown publishing package for books and reports in PDF, HTML, EPUB and Word, including executable analysis.<br>
  <span>`Open source` · `R`</span>

- [Crowbook](https://github.com/crowdagger/crowbook) - Builds fiction manuscripts from Markdown chapters into HTML, LaTeX/PDF and EPUB.<br>
  <span>`Open source` · `CLI`</span>

- [Koodo Reader](https://github.com/koodo-reader/koodo-reader) - An ebook manager and reader for multiple formats, with sync and AI-assisted reading.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux`</span>

- [calibre](https://github.com/kovidgoyal/calibre) - An ebook manager and converter that processes Markdown through its TXT input options, including ebook-convert --formatting-type markdown.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux`</span>

- [lue](https://github.com/paulilaaso/lue) - A terminal reader for EPUB, PDF, Markdown and other documents with text-to-speech and saved progress. Windows use is through WSL.<br>
  <span>`Open source` · `CLI` · `macOS` · `Linux` · `Windows via WSL`</span>

<a id="模板"></a>

### Templates

Check the supported editor and export route before adopting a template.

- [LapisCV](https://github.com/BingyanStudio/LapisCV) - A Markdown resume template for VS Code, Typora and Obsidian that produces PDF resumes.<br>
  <span>`Open source`</span>

<a id="公众号"></a>

### WeChat Official Account

Check formatting, images and code blocks after pasting into the publishing platform.

- [WeChat Markdown Editor (md)](https://github.com/doocs/md) - Formats Markdown for WeChat articles with themes, image hosting and AI assistance.<br>
  <span>`Open source` · `Web`</span>

- [Markdown Nice](https://editor.mdnice.com/) - A browser Markdown editor that applies themes and copies formatted articles into WeChat Official Accounts.<br>
  <span>`Web`</span>

<a id="编码与开发工具"></a>

## Coding and Development Tools

<a id="编程工具"></a>

### Programming Tools

Standalone development environments and extensions are listed separately. Start with the environment you already use.

- [VS Code](https://github.com/microsoft/vscode) - Edits and previews Markdown alongside source code, with extensions for formatting, navigation and publishing. The linked repository is Code - OSS.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux`</span>

  - [Foam](https://github.com/foambubble/foam) - Organizes linked Markdown notes and a knowledge graph within a VS Code and GitHub workflow.<br>
    <span>`Open source` · `VS Code extension`</span>

  - [Markdown All in One](https://github.com/yzhang-gh/vscode-markdown) - Adds Markdown editing shortcuts, tables of contents, preview and related features to VS Code.<br>
    <span>`Open source` · `VS Code extension`</span>

  - [Marp for VS Code](https://github.com/marp-team/marp-vscode) - Edits and previews Marp Markdown slides in VS Code and exports PDF, PPTX and HTML.<br>
    <span>`Open source` · `VS Code extension`</span>

- [Trae](https://www.trae.cn/) - An AI development environment whose SOLO document tool generates and edits Markdown project documents. The China edition now labels the coding product TraeCode.<br>
  <span>`macOS` · `Windows` · `Linux`</span>

- [Cursor](https://cursor.com/) - An AI code editor with chat, completion and rewriting for project code and documentation. Check Markdown extensions against your existing workflow.<br>
  <span>`macOS` · `Windows` · `Linux`</span>

- [RStudio](https://github.com/rstudio/rstudio) - An R development environment with R Markdown integration for reproducible reports, slides and web documents.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux` · `R`</span>

<a id="代码片段管理"></a>

### Code Snippet Management

Compare storage, organization and the ability to keep explanations beside code.

- [massCode](https://github.com/massCodeIO/massCode) - A local-first developer workspace combining code snippets, Markdown notes and other development tools, with content stored as plain files.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux`</span>

- [Lepton](https://github.com/hackjutsu/Lepton) - Manages GitHub Gist snippets with Markdown and Jupyter Notebook rendering for existing Gist collections.<br>
  <span>`Open source` · `macOS` · `Windows` · `Linux`</span>

<a id="开发组件"></a>

### Development Components

Identify the needed layer: editing interface, Markdown parsing, HTML conversion or streaming rendering.

- [Milkdown](https://github.com/Milkdown/milkdown) - A ProseMirror- and remark-based WYSIWYG Markdown editor framework for building an extensible editing interface.<br>
  <span>`Open source` · `JavaScript`</span>

- [Rich](https://github.com/Textualize/rich) - Renders Markdown, tables and progress bars in Python terminal applications.<br>
  <span>`Open source` · `Python`</span>

- [Marked.js](https://github.com/markedjs/marked) - A JavaScript Markdown-to-HTML parser for browser, server and CLI workflows. Its HTML output is not sanitized automatically.<br>
  <span>`Open source` · `JavaScript`</span>

- [Vditor](https://github.com/Vanessa219/vditor) - A browser Markdown editor with WYSIWYG, instant-rendering and split-preview modes plus diagram support.<br>
  <span>`Open source` · `JavaScript`</span>

- [Cherry Markdown Writer](https://github.com/Tencent/cherry-markdown) - A JavaScript Markdown editor for browser and Node.js environments with themes and extension points.<br>
  <span>`Open source` · `JavaScript`</span>

- [md-editor-v3](https://github.com/imzbf/md-editor-v3) - A Vue 3 Markdown editor component with live preview, dark theme and image paste/upload support.<br>
  <span>`Open source` · `Vue`</span>

- [markdown-it](https://github.com/markdown-it/markdown-it) - An extensible JavaScript Markdown parser with CommonMark support and plugin APIs for custom syntax and rendering.<br>
  <span>`Open source` · `JavaScript`</span>

- [OverType](https://github.com/panphora/overtype) - A Markdown editor library that overlays a textarea on rendered content for aligned editing and preview.<br>
  <span>`Open source` · `JavaScript`</span>

- [Turndown](https://github.com/mixmark-io/turndown) - Converts HTML to Markdown in JavaScript, with configurable rules for importing existing content.<br>
  <span>`Open source` · `JavaScript`</span>

- [Markdown UI](https://github.com/BlueprintLabIO/markdown-ui) - Describes interactive buttons, dropdowns and forms in Markdown for applications that need document-based controls.<br>
  <span>`Open source` · `JavaScript`</span>

- [Markstream](https://github.com/Simon-He95/markstream-vue) - A family of streaming Markdown renderers for AI output. Choose the package for your framework; markstream-vue targets Vue 3 and Nuxt.<br>
  <span>`Open source` · `Vue` · `React` · `Svelte`</span>

- [Editor.md](https://github.com/pandao/editor.md) - An embeddable browser Markdown editor based on CodeMirror, jQuery and Marked, with diagrams and math support.<br>
  <span>`Open source` · `JavaScript`</span>

- [Markdown Here](https://github.com/adam-p/markdown-here) - A browser and Thunderbird extension that renders Markdown as rich text for email and web editors.<br>
  <span>`Open source`</span>

<a id="转换工具"></a>

## Conversion Tools

Identify input and output first. Try representative files before converting a collection.

- [pandoc](https://github.com/jgm/pandoc) - Converts between Markdown, HTML, Word and other document formats in CLI publishing workflows. Test complex layouts with representative files.<br>
  <span>`Open source` · `CLI`</span>

  - [Eisvogel](https://github.com/Wandmalfarbe/pandoc-latex-template) - A Pandoc LaTeX template for turning Markdown into consistently typeset PDF or LaTeX reports and handouts.<br>
    <span>`Open source`</span>

  - [patat](https://github.com/jaspervdj/patat) - A Pandoc-based terminal presentation tool with code highlighting and speaker notes.<br>
    <span>`Open source`</span>

<a id="转成-markdown"></a>

### To Markdown

Choose by input format and execution environment; check headings, tables, images and formulas in the result.

- [doc2md](https://github.com/sakuraqqq/doc2md) - Locally converts PDF, DOCX, XLSX, images, TXT and HTML to Markdown in the browser, with OCR and no file upload. Offline use needs cached resources; complex PDF layout may be lost.<br>
  <span>`Open source` · `Web` · `PWA` · [Try online](https://sakuraqqq.github.io/doc2md/)</span>

- [feishu2md](https://github.com/Wsine/feishu2md) - Downloads Feishu or Lark documents as Markdown using a Go CLI, Docker or an online entry. The repository is seeking maintainers.<br>
  <span>`Open source` · `CLI`</span>

- [noted.md](https://github.com/tejas-raskar/noted.md) - Uses an LLM to turn handwritten PDFs and images into Markdown, including LaTeX equations. Check model setup and data handling before use.<br>
  <span>`Open source` · `CLI`</span>

- [MarkItDown](https://github.com/microsoft/markitdown) - Microsoft's Python converter for PDF, Word, Excel and other files, designed for text analysis and LLM workflows rather than high-fidelity layout reproduction.<br>
  <span>`Open source` · `CLI` · `Python`</span>

- [Jupytext](https://github.com/jupytext/jupytext) - Pairs Jupyter Notebooks with Markdown or other text formats for readable Git diffs and version control.<br>
  <span>`Open source` · `CLI`</span>

- [keep-it-markdown (KIM)](https://github.com/djsudduth/keep-it-markdown) - Exports Google Keep notes to Markdown through an unofficial Keep API for migration to other note tools.<br>
  <span>`Open source` · `CLI`</span>

- [YARLE (Yet Another RLE)](https://github.com/akosbalasko/yarle) - Converts Evernote .enex exports into Markdown with metadata, internal links and attachments.<br>
  <span>`Open source` · `CLI`</span>

- [Trafilatura](https://github.com/adbar/trafilatura) - Extracts web text and metadata into Markdown, JSON, CSV or HTML for batch content collection.<br>
  <span>`Open source` · `CLI` · `Python`</span>

- [Zotero Better Notes](https://github.com/windingwind/zotero-better-notes) - Connects Zotero notes, templates and references with Markdown sync and Markdown, Word or PDF export.<br>
  <span>`Open source`</span>

- [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) - A Go library and CLI for converting HTML to Markdown with customizable rules.<br>
  <span>`Open source` · `Go` · `CLI`</span>

<a id="转成图片"></a>

### Image Generation

For individual images, compare preview and layout. For batches, compare APIs, deployment and theme control.

- [MD2Card](https://md2card.com/zh) - Turns Markdown into shareable knowledge cards in the browser, with multiple styles and API access.<br>
  <span>`Web`</span>

- [Markdown To Image](https://github.com/gcui-art/markdown-to-image) - A React component and example web editor for rendering Markdown as customizable poster images.<br>
  <span>`Open source` · `React` · `Web`</span>

- [Markdown To Image Serve](https://github.com/wxingheng/markdown-to-image-serve) - A Next.js and Puppeteer service for generating images from Markdown through an API, with Docker deployment.<br>
  <span>`Open source` · `API` · `Node.js`</span>

<a id="其他工具"></a>

## Miscellaneous

<a id="命令行工具"></a>

### Command-line Tools

Choose the operation you need: reading, querying, note management or conversion.

- [mdq](https://github.com/yshavit/mdq) - Queries Markdown structure like jq queries JSON, extracting headings, code blocks, links and tables for scripts.<br>
  <span>`Open source` · `CLI` · `macOS` · `Windows` · `Linux`</span>

- [Glow](https://github.com/charmbracelet/glow) - Reads Markdown in the terminal and discovers documents in local directories and Git repositories.<br>
  <span>`Open source` · `CLI` · `macOS` · `Windows` · `Linux`</span>

- [nb](https://github.com/xwmx/nb) - Manages plain-text notes in a CLI and local web interface with Markdown, Git and encryption. Windows requires a Unix-compatible environment.<br>
  <span>`Open source` · `CLI` · `macOS` · `Linux` · `Windows via Unix environment`</span>

- [doxx](https://github.com/bgreenwell/doxx) - Views .docx files in the terminal and exports content as Markdown, CSV or JSON.<br>
  <span>`Open source` · `CLI` · `macOS` · `Windows` · `Linux`</span>

<a id="检查与辅助"></a>

### Checking and Assistance

Formatting checks, natural-language rules and editor navigation solve different problems and can be combined.

- [markdownlint](https://github.com/DavidAnson/markdownlint) - Checks Markdown syntax and style in Node.js and editor workflows for consistent document formatting.<br>
  <span>`Open source` · `Node.js`</span>

- [textlint](https://github.com/textlint/textlint) - Applies configurable rules to natural-language writing in Markdown and plain text.<br>
  <span>`Open source` · `CLI` · `Node.js`</span>

- [Marksman](https://github.com/artempyanykh/marksman) - An LSP server providing Markdown completion, navigation and wiki-link support for compatible editors.<br>
  <span>`Open source`</span>

<a id="ai-相关工具"></a>

### AI-related Tools

Distinguish content generation from extraction, and check model, API and deployment dependencies.

- [ReadmeAI](https://github.com/eli64s/readme-ai) - Generates a README draft from a repository URL or local path. Validate features, installation instructions and examples against the actual project.<br>
  <span>`Open source`</span>

- [Firecrawl](https://github.com/firecrawl/firecrawl) - An API and open-source project for extracting web content as Markdown or structured data for AI and retrieval workflows.<br>
  <span>`Open source` · `API`</span>

- [ScrapeGraphAI](https://github.com/ScrapeGraphAI/Scrapegraph-ai) - A Python library using LLMs and graph-based extraction pipelines to turn web and document content into structured outputs.<br>
  <span>`Open source` · `Python`</span>

<a id="书籍"></a>

## Books

For readers who prefer a chapter-based introduction to Markdown and related workflows.

- [《了不起的 Markdown：大语言模型时代的通用语言》](https://book.douban.com/subject/37478156/) - A Chinese-language guide to Markdown writing, Obsidian and language-model-assisted workflows.<br>
  <span>`Documentation`</span>

## Contributing

Recommend a tool, correct information or share a concrete usage experience through [an issue](https://github.com/mansucache/awesome-markdown/issues/new/choose). Explain the problem it solves and what makes it different from existing entries. See the [contribution guide](contributing.md).

## Updates

See [what changed](CHANGELOG.md) or [subscribe to commits (Atom)](https://github.com/mansucache/awesome-markdown/commits/main.atom).

This list is released under [CC0-1.0](LICENSE). Linked tools have their own licenses.
