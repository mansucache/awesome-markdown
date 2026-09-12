# 文档转 Markdown：先分清输入，再比较结果

[English](document-to-markdown.md) · [返回清单](../README.zh-CN.md)

可选择文字的 PDF、扫描件与 DOCX 需要解决的问题不同。文件成功生成 `.md`，只能证明转换运行完成；还要检查阅读顺序、表格、公式、链接与附件是否保留。

本指南于 2026-09-12 核对官方资料，提供候选比较和共用样本。**以下不是实测排名：本仓库没有运行这些转换器，也没有提供准确率或速度结论。**

## 按输入和任务选候选

| 候选 | 适合先尝试的任务 | 运行方式与需要核对的条件 | 不能据此承诺什么 |
| --- | --- | --- | --- |
| [doc2md](https://github.com/sakuraqqq/doc2md) | 偶尔把文件转成 Markdown，希望在浏览器本地处理 | 浏览器本地转换与 OCR；离线前需缓存依赖资源 | 复杂 PDF 的表格和原始版式能完整保留 |
| [MarkItDown](https://github.com/microsoft/markitdown) | 在 Python 流程中提取 Office、PDF 等文件的文本与结构 | 按格式安装可选依赖；OCR、文档智能或 LLM 等扩展能力需分别确认 | 基础安装自动包含所有识别能力，或能高保真复原页面 |
| [Docling](https://github.com/docling-project/docling) | 需要分析 PDF 的结构、表格并输出 Markdown 或结构化数据 | 根据输入选择处理流程、OCR 引擎和模型；预备所需下载与运行资源 | 任意版式都能正确恢复，或所有配置都只需相同资源 |
| [MinerU](https://github.com/opendatalab/MinerU) | 对复杂 PDF、表格和公式进行提取 | 选择与硬件匹配的后端；固定版本并检查自定义许可证 | 预发布版等同稳定版，或所有后端都有相同安装和使用条件 |
| [Marker](https://github.com/datalab-to/marker) | 将 PDF 等文件批量转成 Markdown/JSON，比较文本、表格和公式保留情况 | 按模式与设备确认推理依赖；可选 LLM 辅助，代码与模型权重条款分开核对 | 开启 LLM 后仍然无需额外计算、联网或费用，或代码许可覆盖模型权重 |
| [Pandoc](https://pandoc.org/) | 已有 DOCX、HTML 或 Markdown 等可解析源文件，需要转换结构和输出格式 | 先查官方输入格式；PDF 通常是其输出方向，不是通用 PDF/OCR 输入方案 | 它能直接替代扫描 PDF 识别工具 |

这些是“从哪里开始”的建议。针对可编辑的 Word 文档，先用原始 DOCX；不要仅为统一入口把它打印成 PDF，再要求工具推回原来的结构。对于数字 PDF，先看是否存在可用文字层；对于扫描件，则需要比较识别结果。

## 用同一个样本检查六件事

仓库提供[共用转换样本](../examples/document-conversion/README.md)、[原始 HTML](../examples/document-conversion/sample.html)、[14 项预期内容](../examples/document-conversion/expected.md)和[空白记录表](../examples/document-conversion/scorecard.csv)。样本包含中英文、金额、列表、表格、上下标、代码、双栏、合并单元格与图形。

1. **固定输入。** 将 HTML 按说明打印成一份数字 PDF，记录环境、页数和哈希。所有候选使用同一个文件，不分别打印。
2. **单独制作扫描版本。** 将各页按同一分辨率栅格化，组合成没有文字层的 PDF。数字版与扫描版分别统计，不能混成一个“准确率”。
3. **记录运行条件。** 固定工具版本、后端、模型、参数、设备与是否访问外部服务。对比耗时时，将首次下载/初始化与后续转换分开记录。
4. **检查内容。** 按预期清单核对数字、阅读顺序、表格列、代码缩进、公式含义、链接和附件。不要求输出 Markdown 字节一致。
5. **回到实际用途。** 若用于 RAG，重点检查是否能定位、检索到正确内容；若用于继续编辑，检查标题与表格是否便于修改；若用于出版，另查排版，不用 Markdown 提取结果代替版式验收。
6. **保存失败样例。** 记录 `pass`、`partial`、`fail` 或 `not-tested`，附具体错误。未运行不记零分，也不根据项目自己的榜单给出优胜结论。

浏览器生成的 PDF 可能受字体与打印实现影响，因此这份仓库只提供源样本与验收合同。比较者应保留实际输入 PDF 和哈希；仓库不附转换器产出的结果。

## 示例：某个工具提取了所有文字，但仍然不合格

样本表格中的 `¥36.00` 属于“纸张”，`¥18.50` 属于“文件夹”。如果输出中数字都存在，却落到错误列里，文本覆盖率看起来可能很高，表格关系仍然丢失。

双栏也类似：应先出现 LEFT-1、LEFT-2、LEFT-3，再出现 RIGHT-1、RIGHT-2、RIGHT-3。逐行交错会破坏正文顺序。这里描述的是验收方法，不是已观察到某个候选工具失败。

## 依据与边界

[MarkItDown 文档](https://github.com/microsoft/markitdown)强调其文本分析与 LLM 使用方向；[Docling 格式说明](https://github.com/docling-project/docling/blob/main/docs/usage/supported_formats.md)列出输入与输出范围；[Pandoc 手册](https://pandoc.org/MANUAL.html)列出支持的格式。具体安装和参数以选定版本的官方文档为准。

[Marker](https://github.com/datalab-to/marker#commercial-usage)区分代码与模型权重许可；[MinerU](https://github.com/opendatalab/MinerU#license-information)使用带附加条件的自定义许可证。不要把仓库公开、可以本地运行和所有使用方式都免费混为一谈。

本样本不覆盖手写、旋转扫描件、所有数学符号和超长文档。确定候选后，再用自己真实且允许处理的文件验证。需要在应用中展示结果，见[开发者选型](markdown-for-developers.zh-CN.md)；跨工具迁移见[兼容性指南](markdown-compatibility.zh-CN.md)。
