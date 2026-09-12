# Acceptance checklist / 预期内容

Evaluate meaning and relationships, not identical Markdown bytes. Do not require native Markdown to represent layout features it cannot encode.

检查含义与关系，不要求 Markdown 字节一致，也不要求普通 Markdown 完整表达页面版式。

| ID | Required content / 必须检查的内容 |
| --- | --- |
| T01 | Both page titles and sections 1–4 retain a usable hierarchy / 两页标题与 1–4 节有可辨层级 |
| T02 | MD-007, ¥1,234.50, -12.5%, 2026-09-12 and C++ remain exact / 标识、金额、符号与日期准确 |
| T03 | Chinese and English sentences survive without dropped or substituted characters / 中英文无漏字、乱码 |
| T04 | Receive → Inspect → Archive order, with Table/Attachment nested under Inspect / 列表顺序与子项关系保留 |
| T05 | CommonMark retains https://commonmark.org/ as its target / 链接文字与目标保持关联 |
| T06 | Paper: 3, ¥36.00; Folder: 2, ¥18.50; Total: 5, ¥54.50 remain in the right columns / 表格数据不串列 |
| T07 | E = mc² and H₂O remain unambiguous / 上下标含义不丢失，不强制 LaTeX 写法 |
| T08 | Python code retains indentation, symbols and the two numeric values / 代码缩进及内容保留 |
| T09 | Reference [1] remains associated with its reference text / 引用标识和注释正文可对应 |
| T10 | LEFT-1, LEFT-2, LEFT-3 precede RIGHT-1, RIGHT-2, RIGHT-3 / 双栏不逐行交错 |
| T11 | Plan A still covers Input and Review; Plan B covers Export / 合并单元格关系可辨，允许 HTML 或文字说明 |
| T12 | Figure 1 remains associated with Receive → Inspect → Archive / 图与图注对应，记录输出形式 |
| T13 | Any exported diagram asset is present and its relative link resolves / 若导出图片，附件与路径有效 |
| T14 | END-042 survives; no entire page or section is missing / 结束标记存在，无整页或整节遗漏 |

Mark T13 not applicable only when a different representation preserves the diagram relationship and no external asset is emitted. Record that decision. The fixture cannot establish behavior on handwriting, rotated scans, hundreds of pages or every mathematical notation.

图形关系由其他形式保留且未输出外部附件时，可将 T13 记为不适用并说明理由。本样本不覆盖手写、旋转扫描件、数百页文档或所有数学符号。
