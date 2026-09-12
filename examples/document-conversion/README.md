# Shared conversion fixture / 共用转换样本

This is an original, fictional fixture under the repository license. It contains no external assets or scripts. It is not a measured benchmark result.

本样本为原创虚构内容，采用仓库许可证，不包含外部资源或脚本。它是测试输入，不是实测报告。

## Prepare the same input / 准备同一份输入

1. Open [sample.html](sample.html) in a browser. Print to PDF using A4, 100% scale, and no browser headers/footers. Preview the pages and check that Chinese glyphs, the table and diagram are visible. Save as `born-digital.pdf` outside the repository or under ignored `reports/`.
2. Record browser/OS, print settings, fonts, page count and the PDF SHA-256. Use exactly that PDF for every converter; do not print a separate copy for each candidate.
3. To test scans, rasterize every page of that PDF at a fixed resolution, for example 200 DPI, then combine those page images into `scanned.pdf` with no OCR text layer. Record the rasterization tool/version and SHA-256. Confirm that text cannot be selected or extracted before calling it a scan fixture.
4. Copy [scorecard.csv](scorecard.csv) for each experiment. Retain input, raw outputs, attachments, commands/settings and logs together. Never overwrite the original input with a converter's output.

在浏览器中打开 HTML，按 A4、100% 比例、不带浏览器页眉页脚导出 PDF，先检查中文、表格和图形。固定这一份 PDF 后再比较工具，记录浏览器、字体、页数及文件哈希。扫描件应由同一份 PDF 的各页按固定分辨率栅格化后组成，不带 OCR 文字层；仅把文件改名为 scanned.pdf 不算扫描件测试。

## Score / 记录结果

Check [expected.md](expected.md) against the source and output. Use `pass`, `partial`, `fail` or `not-tested` with concrete notes. A different serialization can pass if it preserves the required meaning. Do not score an unrun tool as zero or infer accuracy from successful execution.

按预期清单逐项记录通过、部分保留、丢失或未测，并说明具体问题。未运行不记零分；程序退出成功不等于内容正确。不同 Markdown 写法保留相同含义时可以判为通过。

The repository ships only the HTML source, acceptance checklist and blank scorecard. It does not ship converted PDFs or results from the candidate tools. See the [English guide](../../guides/document-to-markdown.md) / [中文指南](../../guides/document-to-markdown.zh-CN.md).
