# Document conversion: identify the input, then compare the output

[简体中文](document-to-markdown.zh-CN.md) · [Back to the catalog](../README.md)

A PDF with selectable text, a scan and a DOCX file present different problems. Producing a `.md` file proves that conversion ran; it does not establish correct reading order, tables, math, links or attachments.

Official sources were reviewed on 2026-09-12. This guide provides candidate comparisons and a shared fixture. **It is not a measured ranking: this repository has not run these converters and reports no accuracy or speed results.**

## Choose candidates by input and task

| Candidate | A useful starting task | Runtime and conditions to check | What this does not promise |
| --- | --- | --- | --- |
| [doc2md](https://github.com/sakuraqqq/doc2md) | Occasional conversion with local browser processing | Browser-local conversion and OCR; cache dependencies before offline use | Complete preservation of complex PDF tables or layout |
| [MarkItDown](https://github.com/microsoft/markitdown) | Extract text and structure from Office, PDF and other files in Python | Install format-specific extras; check OCR, document intelligence and LLM integrations separately | Every recognition feature in the base install, or high-fidelity page reconstruction |
| [Docling](https://github.com/docling-project/docling) | Analyze PDF structure and tables, exporting Markdown or structured data | Choose a pipeline, OCR engine and models; prepare required downloads and resources | Correct reconstruction of every layout, or identical resource needs across configurations |
| [MinerU](https://github.com/opendatalab/MinerU) | Extract complex PDFs, tables and formulas | Match the backend to the hardware, pin a version and check its custom license | Prereleases being equivalent to stable releases, or identical requirements across backends |
| [Marker](https://github.com/datalab-to/marker) | Batch PDF and other documents into Markdown/JSON while comparing content preservation | Check inference dependencies by mode/device; optional LLM assistance; separate code and model terms | No extra compute, network or cost when enabling LLMs, or code licensing covering model weights |
| [Pandoc](https://pandoc.org/) | Convert structure and formats from supported sources such as DOCX, HTML or Markdown | Check supported input formats; PDF is generally an output target, not a general PDF/OCR input route | Replacing a scanned-PDF recognition tool |

These are starting points. If the editable Word document is available, use the DOCX rather than printing it to PDF and asking a tool to reconstruct its structure. For a digital PDF, inspect its text layer first; for scans, compare recognition results.

## Compare six things with one fixture

The repository includes [fixture instructions](../examples/document-conversion/README.md), [HTML source](../examples/document-conversion/sample.html), [14 acceptance criteria](../examples/document-conversion/expected.md) and a [blank scorecard](../examples/document-conversion/scorecard.csv). The fixture covers Chinese/English text, amounts, lists, tables, superscripts/subscripts, code, columns, merged cells and a diagram.

1. **Freeze the input.** Print the HTML to one digital PDF as documented; record environment, page count and hash. Give every candidate that exact file instead of printing separate copies.
2. **Create a separate scan version.** Rasterize pages at a fixed resolution and combine them into a PDF without a text layer. Score the digital and scan inputs separately, not as one undifferentiated accuracy value.
3. **Record runtime conditions.** Pin tool version, backend, model, parameters, device and external-service use. Separate initial downloads/initialization from subsequent conversion time.
4. **Inspect content.** Check numbers, reading order, table columns, code indentation, mathematical meaning, links and attachments against the checklist. Identical Markdown bytes are not required.
5. **Return to the actual task.** For RAG, check whether the correct information can be located and retrieved. For editing, inspect usable headings and tables. For publishing, assess layout separately from Markdown extraction.
6. **Keep failures.** Record `pass`, `partial`, `fail` or `not-tested` with concrete errors. Do not score an unrun tool as zero or declare a winner from vendor benchmarks.

Browser-generated PDFs vary with fonts and print implementations. This repository supplies the source fixture and acceptance contract; retain the actual input PDF and hash for any comparison. No converter outputs are included.

## Example: all text is present, but the result still fails

In the fixture, `¥36.00` belongs to Paper and `¥18.50` to Folder. If both amounts survive in the wrong columns, text coverage might look good while table relationships have been lost.

The columns should read LEFT-1, LEFT-2, LEFT-3, then RIGHT-1, RIGHT-2, RIGHT-3. Alternating between columns line by line breaks the order. These are acceptance examples, not reported failures of any listed candidate.

## Sources and limits

[MarkItDown documentation](https://github.com/microsoft/markitdown) describes its text-analysis and LLM use cases. [Docling's format reference](https://github.com/docling-project/docling/blob/main/docs/usage/supported_formats.md) lists inputs and outputs; the [Pandoc manual](https://pandoc.org/MANUAL.html) documents supported formats. Follow installation and parameter documentation for the version you select.

[Marker](https://github.com/datalab-to/marker#commercial-usage) separates code and model-weight licensing. [MinerU](https://github.com/opendatalab/MinerU#license-information) uses a custom license with additional conditions. A public repository, local execution and free use in every context are different claims.

This fixture does not cover handwriting, rotated scans, every mathematical notation or very long documents. Validate shortlisted tools with your own appropriate files. See the [developer guide](markdown-for-developers.md) to display converted content and the [compatibility guide](markdown-compatibility.md) for migration.
