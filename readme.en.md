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

Markdown is a lightweight markup language that makes formatting easy and efficient, letting you focus on writing. From simple notes and blog posts to complex project documentation and knowledge management, Markdown is your ideal tool.

This is a curated list of Markdown syntax extensions, software, tools, and best practices - your one-stop Markdown resource library.

Want to recommend a Markdown tool or resource? Open an [Issue](https://github.com/mansucache/awesome-markdown/issues) and help us improve this list together!

## Contents

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

---

#### Icons

![](./imgs/github.svg) Open source - click the name to visit the source repository.<br>![](./imgs/free.svg) Free to use (or free for personal use).<br>![](./imgs/doc.svg) Documentation - click the icon to open it.

---

#### Platforms

![](./imgs/mac.svg) = macOS   ![](./imgs/windows.svg) = Windows ![](./imgs/linux.svg) = Linux ![](./imgs/iphone.svg) = iPhone ![](./imgs/android.svg) = Android ![](./imgs/web.svg) = Web ![](./imgs/all.svg) = All platforms

#### Integrations

![](./imgs/obsidian.svg) = Obsidian ![](./imgs/vscode.svg) = VS Code ![](./imgs/typora.svg) = Typora ![](./imgs/terminal.svg) = Command-line tool

## Syntax Specifications and Extensions

> Syntax extensions and specifications that add new features or clarity to Markdown.

- [CommonMark](https://commonmark.org/) - A project aiming to provide a clear, unambiguous specification for Markdown syntax, ensuring consistent rendering across parsers and platforms. ![](./imgs/github.svg)
- [GFM (GitHub Flavored Markdown)](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) - The Markdown dialect used on GitHub, a strict superset of CommonMark adding tables, task lists, strikethrough, and autolinks. ![](./imgs/doc.svg)
- [Obsidian Flavored Markdown](https://help.obsidian.md/obsidian-flavored-markdown) - The Markdown variant used by Obsidian, adding wiki-style backlinks, embeds, LaTeX math, and Mermaid diagrams on top of CommonMark and GFM. ![](./imgs/doc.svg)
- [Pandoc's Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown) - A Markdown variant with tables, footnotes, and definition lists, enabling conversion to formats such as Word, PDF, and ePub. ![](./imgs/doc.svg)
- [R Markdown](https://github.com/rstudio/rmarkdown) - An R package for embedding R code and its output in Markdown documents, creating dynamic, reproducible reports, slides, and websites. ![](./imgs/github.svg)
- [Quarkdown](https://github.com/iamgio/quarkdown) - A modern Markdown typesetting system with Turing-complete extensions like functions, variables, and scripts, compiling Markdown into books, articles, and presentations. ![](./imgs/github.svg)

## Writing and Editing

### Dedicated Markdown Editors

> Editors that provide a smooth, efficient Markdown writing experience.

- [Typora](https://typora.io/) - A WYSIWYG Markdown editor with seamless source-preview switching, outline view, full-text search, and multi-format export. ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) [![](./imgs/doc.svg)](https://github.com/mansucache/awesome-typora)
  - [Typora Plugin](https://github.com/obgnail/typora_plugin) - A collection of plugins that extend Typora with tag management, file search, auto-numbering, and chart support. ![](./imgs/github.svg) ![](./imgs/typora.svg)

  - [VLOOK](https://github.com/MadMaxChow/VLOOK) - An elegant theme package and enhancement plugin for Typora, adding rich layouts, content navigation, and presentation aids. ![](./imgs/github.svg) ![](./imgs/typora.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

- [mdedit.ai](https://mdedit.ai/) - A Markdown workspace for technical writing with live preview, Mermaid diagrams, AI-assisted writing, collaboration, and publishing; core editing is free. ![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/web.svg)
- [Bear](https://bear.app/) - A Markdown note app for the Apple ecosystem, known for its powerful tagging system, elegant interface, and seamless sync. ![](./imgs/mac.svg) ![](./imgs/iphone.svg)
- [Markdown Monster](https://github.com/RickStrahl/MarkdownMonster) - A feature-rich Windows Markdown editor with syntax highlighting, live preview, Git integration, and direct publishing to blog platforms. ![](./imgs/github.svg) ![](./imgs/windows.svg)
- [Markor](https://github.com/gsantner/markor) - A lightweight Android editor supporting Markdown, todo.txt, and Zim, with full offline use, preview, sync, and encryption. ![](./imgs/github.svg) ![](./imgs/android.svg)
- [MarkEdit](https://github.com/MarkEdit-app/MarkEdit) - A fast, privacy-focused open-source Markdown editor for macOS, extensible via scripts and CodeMirror. ![](./imgs/github.svg) ![](./imgs/mac.svg)
- [Cmd Markdown](https://www.zybuluo.com/mdeditor) - A powerful online Markdown editor with real-time preview, cloud storage, version history, and support for flowcharts, sequence diagrams, and LaTeX. ![](./imgs/free.svg) ![](./imgs/web.svg)
- [Effie](https://www.effie.co/) - A writing tool that combines a WYSIWYG Markdown editor with mind mapping, supporting cross-platform sync. ![](./imgs/free.svg)
- [iA Writer](https://ia.net/writer) - A distraction-free Markdown editor focused on plain-text writing, with cross-device sync and multi-format export. ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/iphone.svg)
- [Lightpaper](https://getlightpaper.com/) - A lightweight Markdown editor for Mac with folder navigation, live preview, and unique Shadow Notes and Scratch Notes features. ![](./imgs/mac.svg)
- [Ulysses](https://ulysses.app/) - An Apple-ecosystem writing app with the Markdown XL syntax, iCloud sync, and export to PDF, Word, and EPUB. ![](./imgs/mac.svg) ![](./imgs/iphone.svg)
- [MarkText](https://github.com/marktext/marktext) - A simple, elegant open-source Markdown editor for Linux, macOS, and Windows, with live preview and multiple themes. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [StackEdit](https://github.com/benweet/stackedit) - An open-source in-browser Markdown editor with cloud sync to Google Drive and GitHub. ![](./imgs/github.svg) ![](./imgs/web.svg)
- [MacDown](https://github.com/MacDownApp/macdown) - An open-source Markdown editor for macOS inspired by Mou, with live preview and customizable rendering. ![](./imgs/github.svg) ![](./imgs/mac.svg)
- [Marked 2](https://marked2app.com/) - A Markdown previewer for macOS with multiple rendering engines, custom styles, and export. ![](./imgs/mac.svg)

- [MarkFlowy](https://github.com/drl990114/MarkFlowy) - A Markdown writer with both source and WYSIWYG modes, a built-in ChatGPT assistant, and export to PDF and HTML. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

- [mkeditor](https://github.com/versyxdigital/mkeditor) - A minimalist desktop Markdown editor for Windows, macOS, and Linux with a web version, following the CommonMark spec. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/web.svg)

- [PanWriter](https://github.com/mb21/panwriter) - A desktop Markdown editor deeply integrated with Pandoc, featuring a unique preview pane showing page layout and pagination. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

- [Quillpad](https://github.com/quillpad/quillpad) - A free, open-source, privacy-focused note app supporting Markdown notes, task lists, reminders, and attachments. ![](./imgs/github.svg) ![](./imgs/android.svg)

- [Ghostwriter](https://github.com/KDE/ghostwriter) - An open-source distraction-free Markdown editor with focus mode, Hemingway mode, and export to HTML and PDF. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

### Notes and Knowledge Management

> Combining knowledge management with Markdown.

- [Persona](https://github.com/jayamitkatariya/personacli) - A local-first personal workspace for notes, tasks, and AI chat, stored as plain Markdown files with no accounts or cloud. ![](./imgs/github.svg) ![](./imgs/terminal.svg)
- [Obsidian](https://obsidian.md/) - A powerful local-first Markdown note app with bidirectional links and a graph view, helping you build a "second brain". ![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [Notion](https://www.notion.com/) - An all-in-one workspace for notes, tasks, databases, and project management with Markdown support and customizable blocks. ![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg) ![](./imgs/web.svg)
- [AFFiNE](https://github.com/toeverything/AFFiNE) - An open-source, local-first workspace merging documents, whiteboards, and databases, with deep Markdown support. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/web.svg)
- [Yuque](https://www.yuque.com/) - A document and knowledge base tool from Ant Group with "book-like" structured knowledge management and strong team collaboration. ![](./imgs/free.svg)
- [Youdao Note](https://note.youdao.com/) - A multi-platform note app from NetEase with Markdown support, AI assistance, and cloud sync. ![](./imgs/free.svg)
- [Yinxiang Biji](https://www.yinxiang.com/) - A cross-device knowledge management tool with Markdown support, live preview, and web clipping. ![](./imgs/free.svg)
- [Memos](https://github.com/usememos/memos) - A modern, open-source, self-hosted knowledge management and note-taking app with lightweight Markdown support. ![](./imgs/github.svg) ![](./imgs/web.svg)
- [Logseq](https://github.com/logseq/logseq) - A privacy-first, open-source outliner with deep Markdown support, bidirectional links, PDF annotation, and whiteboards. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg)
- [SiYuan](https://github.com/siyuan-note/siyuan) - A privacy-focused personal knowledge management system with block-level references and a WYSIWYG Markdown experience. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [VNote](https://github.com/vnotex/vnote) - A free, open-source Qt-based note app focused on Markdown, with syntax highlighting, live preview, and full-text search. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [Zettlr](https://github.com/Zettlr/Zettlr) - A professional Markdown writing tool for Zettelkasten method and academic writing, with citation management and multi-format export. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [NoteGen](https://github.com/codexu/note-gen) - A lightweight cross-platform Markdown note app powered by AI, turning fragmented knowledge into structured notes with GitHub sync and RAG. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [MiaoYan](https://github.com/tw93/MiaoYan) - A native macOS Markdown note app built with Swift 5, offering syntax highlighting, dark mode, LaTeX, and Mermaid support. ![](./imgs/github.svg) ![](./imgs/mac.svg)
- [Yank Note](https://github.com/purocean/yn) - A Monaco-powered Markdown editor with version control, encryption, runnable code blocks, chart embedding, and AI Copilot. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [QOwnNotes](https://github.com/pbek/QOwnNotes) - An open-source note and todo manager storing notes as plain Markdown files, syncing with Nextcloud and other cloud services. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [MindForger](https://github.com/dvorka/mindforger) - A human-mind-inspired personal knowledge management tool combining a Markdown editor with a knowledge graph navigator. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [Joplin](https://github.com/laurent22/joplin) - A privacy-focused, open-source note app with Markdown, end-to-end encryption, and sync to Nextcloud, Dropbox, and OneDrive. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [Inkdrop](https://www.inkdrop.app/) - A cross-platform Markdown note app for developers, with end-to-end encryption and a customizable plugin ecosystem. ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [Tangent Notes](https://www.tangentnotes.com/) - A permanently free, open-source note app with "tangent writing" and visual thought branches, storing notes as local Markdown files. ![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [ima.copilot](https://ima.qq.com/) - Tencent's intelligent workspace, a "thinking knowledge base" that answers questions from the web and your own knowledge base, with Markdown support. ![](./imgs/free.svg) ![](./imgs/all.svg)
- [Notable](https://github.com/notable/notable) - A Markdown-based note app with a VS Code-like editor, dark theme, focus mode, and infinitely nestable tags. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [Khoj](https://github.com/khoj-ai/khoj) - An open-source personal AI app that chats with LLMs locally or in the cloud and answers from your Markdown notes via semantic search. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/obsidian.svg)
- [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) - An open-source Notion alternative built with Flutter and Rust, prioritizing data privacy with native Markdown support. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg)

### Long-form Writing

- [novelWriter](https://github.com/vkbo/novelWriter) - A novel-writing app using a Markdown-inspired minimal syntax, with metadata, annotations, outlines, and cross-references. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

- [WonderPen](https://www.tominlab.com/wonderpen) - A long-form writing app with a tree-structured document tree, Markdown support, cloud sync, and document snapshots. ![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

## Office and Collaboration

> Markdown tools for daily office work, document collaboration, and content creation.

### Document Collaboration

- [Feishu Docs](https://www.feishu.cn/product/docs) - ByteDance's enterprise collaboration platform with deep Markdown support, real-time co-editing, comments, and version history. ![](./imgs/free.svg) ![](./imgs/all.svg)
- [WeCom Docs](https://doc.weixin.qq.com/) - WeCom's built-in online collaboration suite with Markdown support, real-time co-editing, and enterprise permission management. ![](./imgs/free.svg) ![](./imgs/all.svg)
- [Shimo](https://shimo.im/) - A cloud-based real-time collaboration office suite with Markdown support and export, covering docs, sheets, slides, and mind maps. ![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [Tencent Docs](https://docs.qq.com/) - Tencent's cloud collaboration suite with native Markdown support and a built-in AI writing assistant. ![](./imgs/free.svg) ![](./imgs/all.svg)
- [Confluence](https://www.atlassian.com/software/confluence) - Atlassian's team collaboration and knowledge management platform with basic Markdown support converted to rich text as you type. ![](./imgs/web.svg)
- [Boardmix](https://boardmix.com/) - An online collaborative whiteboard whose document feature supports Markdown formatting and export to files compatible with Obsidian. ![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/web.svg)
- [Jupyter](https://github.com/jupyter/jupyter) - A non-profit project for interactive computing, combining live code, LaTeX math, visualizations, and Markdown text cells in notebooks. ![](./imgs/github.svg) ![](./imgs/all.svg)
- [HedgeDoc](https://github.com/hedgedoc/hedgedoc) - An open-source collaborative Markdown editor with real-time co-editing, diagrams, and slide mode, self-hostable. ![](./imgs/github.svg) ![](./imgs/web.svg)
- [ONLYOFFICE Desktop Editors](https://github.com/ONLYOFFICE/DesktopEditors) - An open-source desktop office suite with cloud collaboration and format conversion, including Markdown. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [Seafile](https://github.com/haiwen/seafile) - An open-source, self-hosted file sync and collaboration platform with a built-in Markdown wiki. ![](./imgs/github.svg)

### Mind Mapping

- [markmap](https://github.com/markmap/markmap) - A tool that visualizes Markdown's hierarchical structure as interactive mind maps, available as a web app, CLI, and VS Code and Obsidian plugins. ![](./imgs/github.svg) ![](./imgs/vscode.svg) ![](./imgs/obsidian.svg)

- [XMind](https://xmind.com/) - A powerful mind mapping and brainstorming app that imports and exports Markdown, supporting fishbone diagrams, org charts, and timelines. ![](./imgs/free.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [Drawnix](https://github.com/plait-board/drawnix) - An open-source whiteboard built on the Plait framework, converting Markdown to mind maps and Mermaid to flowcharts. ![](./imgs/github.svg) ![](./imgs/web.svg)

### Presentation

- [Slidev](https://github.com/slidevjs/slidev) - A developer-oriented presentation tool based on Markdown, with code highlighting, LaTeX, drawing, and one-click deployment. ![](./imgs/github.svg)

- [reveal.js](https://github.com/hakimel/reveal.js) - An open-source HTML presentation framework with Markdown authoring, vertical nesting, speaker notes, and PDF export. ![](./imgs/github.svg)

- [Marp](https://github.com/marp-team/marp) - A Markdown-powered presentation ecosystem with the Marpit framework and Marp CLI, exporting to PDF and PPTX. ![](./imgs/github.svg)
- [presenterm](https://github.com/mfontanini/presenterm) - A powerful terminal presentation tool using Markdown slides, with code highlighting, images, Mermaid charts, and LaTeX. ![](./imgs/github.svg) ![](./imgs/terminal.svg)

- [mdp](https://github.com/visit1985/mdp) - A lightweight command-line presentation tool that converts Markdown files into terminal slides separated by horizontal rules. ![](./imgs/github.svg) ![](./imgs/terminal.svg)

- [deck](https://github.com/k1LoW/deck) - A command-line tool that converts Markdown documents into Google Slides presentations, decoupling content from design. ![](./imgs/github.svg) ![](./imgs/terminal.svg)


### Notes and Task Lists

- [Smartisan Notes](https://cloud.smartisan.com/apps/note/md.html) - An elegant note app with Markdown support and a signature feature that turns notes into beautiful shareable images. ![](./imgs/free.svg) ![](./imgs/web.svg) ![](./imgs/android.svg) ![](./imgs/iphone.svg)
- [flomo](https://flomoapp.com/) - A card-based note app built on the idea of "capture ideas, not organize them", with Markdown, tags, and bidirectional links. ![](./imgs/free.svg) ![](./imgs/all.svg)
- [TickTick](https://dida365.com/webapp) - A powerful productivity tool combining todos, calendar, habit tracking, and Pomodoro, with Markdown support in task details. ![](./imgs/free.svg) ![](./imgs/all.svg)
- [Tasks.md](https://github.com/BaldissaraMatheus/Tasks.md) - A self-hosted Kanban-style task manager based on Markdown files, creating cards, lanes, and tags via a modern web interface. ![](./imgs/github.svg)

## Website Generation and Typesetting

> Tools that convert Markdown documents into websites, e-books, resumes, and more.

### Static Site Generators

> Generate static websites or project documentation.

- [Docsify](https://github.com/docsifyjs/docsify) - A dynamic documentation generator that turns Markdown files into a website without a build process, with themes, full-text search, and plugins. ![](./imgs/github.svg)
- [MkDocs](https://github.com/mkdocs/mkdocs) - A fast, simple static site generator for project documentation, extensible via themes and plugins. ![](./imgs/github.svg)
- [Zola](https://github.com/getzola/zola) - A single-binary static site generator in Rust with built-in Sass compilation, image processing, and local search. ![](./imgs/github.svg)
- [VitePress](https://github.com/vuejs/vitepress) - A Vite- and Vue-based static site generator for fast, beautiful documentation sites, with Vue components usable inside Markdown. ![](./imgs/github.svg)
- [Hugo](https://github.com/gohugoio/hugo) - A lightning-fast static site generator in Go, building large sites in milliseconds with a rich theme and shortcode system. ![](./imgs/github.svg)
- [Jekyll](https://github.com/jekyll/jekyll) - A Ruby static site generator powering GitHub Pages, with no database or complex configuration required. ![](./imgs/github.svg)
- [Hexo](https://github.com/hexojs/hexo) - A fast, simple, powerful Node.js blog framework with GFM support, a rich plugin ecosystem, and one-click deployment. ![](./imgs/github.svg)
- [Pelican](https://github.com/getpelican/pelican) - A Python static site generator with multilingual support, Jinja2 themes, RSS/Atom feeds, and Pygments code highlighting. ![](./imgs/github.svg)
- [Docusaurus](https://github.com/facebook/docusaurus) - Facebook's static site generator for beautiful documentation, with built-in versioning, i18n, and full-text search. ![](./imgs/github.svg)

### E-books

> Generate and read e-books.

- [mdBook](https://github.com/rust-lang/mdBook) - A Rust CLI for creating modern online books from Markdown, with full-text search and syntax highlighting, used by the Rust project. ![](./imgs/github.svg) ![](./imgs/terminal.svg)

- [HonKit](https://github.com/honkit/honkit) - A modern fork of GitBook for building websites, PDFs, and e-books from Markdown, with plugins and LaTeX support. ![](./imgs/github.svg) ![](./imgs/terminal.svg)

- [GitBook](https://github.com/GitbookIO/gitbook) - A platform for building and managing technical documentation, with Git-like version control and real-time publishing. ![](./imgs/github.svg)
- [bookdown](https://github.com/rstudio/bookdown) - An open-source R package for writing books and long-form articles with R Markdown, supporting PDF, HTML, EPUB, and Word output. ![](./imgs/github.svg)
- [Crowbook](https://github.com/crowdagger/crowbook) - A Rust tool for novels and fiction, converting Markdown books to HTML, LaTeX/PDF, and EPUB with automatic typesetting. ![](./imgs/github.svg) ![](./imgs/terminal.svg)

- [Koodo Reader](https://github.com/koodo-reader/koodo-reader) - A cross-platform e-book reader supporting EPUB, PDF, and Markdown, with cloud sync and AI-assisted reading. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [calibre](https://github.com/kovidgoyal/calibre) - The "Swiss Army knife" of e-books: library management, format conversion (including Markdown), editing, and syncing. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [lue](https://github.com/superstarryeyes/lue) - A terminal e-book reader for EPUB, PDF, and Markdown with text-to-speech, smart progress saving, and a customizable interface. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

### Templates

> Ready-to-use Markdown templates.

- [LapisCV](https://github.com/BingyanStudio/LapisCV) - A resume template project for creating and exporting PDF resumes from Markdown in VS Code, Typora, and Obsidian. ![](./imgs/github.svg)

### WeChat Official Account

- [WeChat Markdown Editor (md)](https://github.com/doocs/md) - A clean online Markdown editor that converts documents into WeChat-friendly formats in real time, with themes, image hosting, and AI assistance. ![](./imgs/github.svg) ![](./imgs/web.svg)
- [Markdown Nice](https://editor.mdnice.com/) - An online Markdown editor that beautifies Markdown into rich text for platforms like WeChat, Zhihu, and CSDN. ![](./imgs/web.svg)

## Coding and Development Tools

> Tools for writing and managing Markdown in coding and development scenarios.

### Programming Tools

- [VS Code](https://github.com/microsoft/vscode) - A lightweight but powerful code editor with comprehensive built-in Markdown support, extensible via plugins. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
  - [Foam](https://github.com/foambubble/foam) - A personal knowledge management system built on VS Code and GitHub, with bidirectional links and a knowledge graph. ![](./imgs/github.svg) ![](./imgs/vscode.svg)

  - [Markdown All in One](https://github.com/yzhang-gh/vscode-markdown) - A VS Code extension adding keyboard shortcuts, table of contents generation, table formatting, math support, and batch HTML export. ![](./imgs/github.svg) ![](./imgs/vscode.svg)

  - [Marp for VS Code](https://github.com/marp-team/marp-vscode) - A VS Code extension that turns the editor into a slide deck creator with Marp Markdown, exporting to PDF, PPTX, and HTML. ![](./imgs/github.svg) ![](./imgs/vscode.svg)

- [Trae](https://www.trae.cn/) - ByteDance's AI IDE that helps developers complete tasks from coding to deployment through natural language. ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [Cursor](https://cursor.com/) - An AI-first code editor with chat, code completion, and intelligent rewriting powered by large language models. ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [RStudio](https://github.com/rstudio/rstudio) - An open-source IDE for R with deep R Markdown integration, producing reproducible reports, slides, and websites. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

### Code Snippet Management

- [massCode](https://github.com/massCodeIO/massCode) - A free, open-source snippet manager for developers, supporting Markdown, syntax highlighting, folder organization, and cloud sync. ![](./imgs/github.svg)
- [Lepton](https://github.com/hackjutsu/Lepton) - A GitHub Gist-based snippet manager with Markdown rendering and Jupyter Notebook support. ![](./imgs/github.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

### Development Components

- [Milkdown](https://github.com/Milkdown/milkdown) - A Typora-inspired WYSIWYG Markdown editor built on ProseMirror and remark, with a plugin-driven architecture. ![](./imgs/github.svg)
- [Rich](https://github.com/Textualize/rich/tree/master) - A Python library for beautiful terminal output, rendering Markdown, tables, and progress bars. ![](./imgs/github.svg)
- [Marked.js](https://github.com/markedjs/marked) - A fast, lightweight JavaScript Markdown compiler for browser, server, and command-line use, supporting the CommonMark spec. ![](./imgs/github.svg)

- [Vditor](https://github.com/Vanessa219/vditor) - A powerful browser-side Markdown editor with WYSIWYG, instant rendering, and split-screen modes, plus mind maps and flowcharts. ![](./imgs/github.svg)

- [Cherry Markdown Writer](https://github.com/Tencent/cherry-markdown) - A lightweight, extensible JavaScript Markdown editor from Tencent for browser and Node.js, with security filtering and multiple themes. ![](./imgs/github.svg)
- [md-editor-v3](https://github.com/imzbf/md-editor-v3) - A Markdown editor component for Vue 3 with live preview, dark theme, Prettier integration, and image upload. ![](./imgs/github.svg)
- [markdown-it](https://github.com/markdown-it/markdown-it) - A fast, extensible CommonMark-compliant Markdown parser in JavaScript with a rich plugin API. ![](./imgs/github.svg)
- [OverType](https://github.com/panphora/overtype) - A lightweight Markdown editor library achieving perfect WYSIWYG by overlaying an invisible input area on the preview. ![](./imgs/github.svg)
- [Turndown](https://github.com/mixmark-io/turndown) - An HTML-to-Markdown converter in JavaScript, CommonMark-compatible with many output customization options. ![](./imgs/github.svg)
- [Markdown UI](https://github.com/BlueprintLabIO/markdown-ui) - A library for embedding dynamic UI components like buttons, dropdowns, and forms directly in Markdown documents. ![](./imgs/github.svg)
- [Markstream](https://github.com/Simon-He95/markstream-vue) - A streaming Markdown rendering component library for AI chat scenarios, supporting Vue, React, Svelte, and more. ![](./imgs/github.svg)
- [Editor.md](https://github.com/pandao/editor.md) - An open-source embeddable online Markdown editor component with live preview, flowcharts, and LaTeX math. ![](./imgs/github.svg)
- [Markdown Here](https://github.com/adam-p/markdown-here) - A Chrome, Firefox, and Thunderbird extension for writing email in Markdown and rendering it before sending. ![](./imgs/github.svg)

## Conversion Tools

> Convert Markdown to other formats, and vice versa.

- [pandoc](https://github.com/jgm/pandoc) - The "Swiss Army knife" of document conversion, supporting over 40 formats including Markdown, HTML, PDF, and Docx. ![](./imgs/github.svg) ![](./imgs/terminal.svg)
  - [Eisvogel](https://github.com/Wandmalfarbe/pandoc-latex-template) - A clean, beautiful Pandoc LaTeX template for converting Markdown to PDF or LaTeX. ![](./imgs/github.svg)
  - [patat](https://github.com/jaspervdj/patat) - (Presentations Atop The ANSI Terminal) A command-line presentation tool built on Pandoc, with code highlighting and speaker notes. ![](./imgs/github.svg)

### To Markdown

- [doc2md](https://github.com/sakuraqqq/doc2md) - A browser-based tool that converts PDF, DOCX, XLSX, images (OCR), TXT, and HTML to Markdown locally without uploading files, with PWA installation and offline use after resources are cached. ![](./imgs/github.svg) ![](./imgs/free.svg) ![](./imgs/web.svg)

- [feishu2md](https://github.com/Wsine/feishu2md) - A Go tool that converts Feishu documents to Markdown files, available via CLI, Docker, and online. ![](./imgs/github.svg) ![](./imgs/terminal.svg)

- [noted.md](https://github.com/tejas-raskar/noted.md) - A CLI tool that uses LLMs to convert handwritten notes (PDFs and images) into Markdown, recognizing math as LaTeX. ![](./imgs/github.svg) ![](./imgs/terminal.svg)
- [MarkItDown](https://github.com/microsoft/markitdown) - Microsoft's Python tool for converting PDF, Word, Excel, and more into Markdown, ideal for LLM training data preparation. ![](./imgs/github.svg) ![](./imgs/terminal.svg)

- [Jupytext](https://github.com/mwouts/jupytext) - An open-source tool that converts Jupyter notebooks to plain text like Markdown, enabling Git version control of notebooks. ![](./imgs/github.svg) ![](./imgs/terminal.svg)

- [keep-it-markdown (KIM)](https://github.com/djsudduth/keep-it-markdown) - A Python CLI that batch-converts Google Keep notes to Markdown for import into Obsidian, Logseq, Notion, and more. ![](./imgs/github.svg) ![](./imgs/terminal.svg)
- [YARLE (Yet Another RLE)](https://github.com/akosbalasko/yarle) - A powerful tool that converts Evernote .enex files to fully customizable Markdown with metadata, internal links, and attachments. ![](./imgs/github.svg) ![](./imgs/terminal.svg)
- [Trafilatura](https://github.com/adbar/trafilatura) - A Python CLI and library for extracting text and metadata from web pages, with output to CSV, JSON, HTML, and Markdown. ![](./imgs/github.svg) ![](./imgs/terminal.svg)
- [Zotero Better Notes](https://github.com/windingwind/zotero-better-notes) - A Zotero plugin that optimizes literature note workflows, with Markdown paste, template notes, and export. ![](./imgs/github.svg)

- [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) - A Go tool that converts complex HTML structures, including whole websites, into clean, readable Markdown. ![](./imgs/github.svg)

### Image Generation

- [MD2Card](https://md2card.com/zh) - An online tool that converts Markdown documents into beautiful knowledge cards with one click, offering 20+ card styles and API access. ![](./imgs/web.svg)

- [Markdown To Image](https://github.com/gcui-art/markdown-to-image/tree/main) - A tool that renders Markdown into beautiful images for social media sharing, with customizable styles and themes. ![](./imgs/github.svg)
- [Markdown To Image Serve](https://github.com/wxingheng/markdown-to-image-serve) - A fast Markdown-to-image service in Go, deployable as a microservice for batch processing. ![](./imgs/github.svg)

## Miscellaneous

### Command-line Tools

> Use Markdown in the terminal.

- [mdq](https://github.com/yshavit/mdq) - A command-line tool for querying Markdown documents like jq queries JSON, extracting headings, code blocks, links, and tables. ![](./imgs/github.svg) ![](./imgs/terminal.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [Glow](https://github.com/charmbracelet/glow) - A command-line Markdown reader that renders Markdown beautifully in the terminal, with local and Git repo discovery. ![](./imgs/github.svg) ![](./imgs/terminal.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [nb](https://github.com/xwmx/nb) - A command-line and local web note app storing plain-text notes with Markdown support, Git versioning, and encryption. ![](./imgs/github.svg) ![](./imgs/terminal.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)
- [doxx](https://github.com/bgreenwell/doxx) - A terminal .docx file viewer that renders Word documents in the command line and exports to Markdown, CSV, and JSON. ![](./imgs/github.svg) ![](./imgs/terminal.svg) ![](./imgs/mac.svg) ![](./imgs/windows.svg) ![](./imgs/linux.svg)

### Checking and Assistance

- [markdownlint](https://github.com/DavidAnson/markdownlint) - A Node.js static analysis tool for Markdown syntax and style, with integrations for VS Code, Vim, and Emacs. ![](./imgs/github.svg)
- [textlint](https://github.com/textlint/textlint) - A lint tool for natural language, similar to ESLint, checking grammar, spelling, and style in Markdown and plain text. ![](./imgs/github.svg) ![](./imgs/terminal.svg)

- [Marksman](https://github.com/artempyanykh/marksman) - An LSP-based tool bringing autocomplete, go-to-definition, and reference lookup to Markdown, including Zettelkasten wiki links. ![](./imgs/github.svg)

### AI-related Tools

- [ReadmeAI](https://github.com/eli64s/readme-ai) - An AI-powered README generator that creates structured, detailed README files from a repository URL or path. ![](./imgs/github.svg)

- [Firecrawl](https://github.com/mendableai/firecrawl) - An API service that scrapes any webpage into clean Markdown or structured data, ideal for AI applications. ![](./imgs/github.svg)

- [ScrapeGraphAI](https://github.com/ScrapeGraphAI/Scrapegraph-ai) - A Python scraping library using LLMs and graph logic, featuring Markdownify to convert any webpage to clean Markdown. ![](./imgs/github.svg)

---

## Books

- [《了不起的 Markdown：大语言模型时代的通用语言》](https://book.douban.com/subject/37478156/) - A practical guide to Markdown in the era of large language models, covering syntax, tools, and AI collaboration - the first Chinese book to comprehensively introduce Obsidian. ![](./imgs/doc.svg)
