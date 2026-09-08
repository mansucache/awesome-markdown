# Maintaining the catalog / 维护说明

## One source, two languages

`data/catalog.json` is the source of truth. Keep IDs stable and translate meaning, including limitations. `npm run build` generates README.md (English), README.zh-CN.md (Chinese), readme.en.md (legacy English entry point), and bilingual review/history pages. Chinese category anchors are retained in the English homepage for old links.

数据是唯一条目来源。修改条目后生成双语文件，不手工维护两份清单。旧英文文件与原中文分类锚点保留兼容入口。

```sh
npm ci --ignore-scripts
npm run build
npm run verify
npm run example
npm run links
```

## Review scope / 核验范围

Review dates record when the stated check took place, not an expiry guarantee. Basic metadata checks do not validate every feature. Recheck primary documentation when changing a platform, pricing or capability claim. Record precisely what was reviewed. Reserve `tested` for documented experiments with versions, inputs and results.

确认停用、域名改作他用或不满足 Markdown 收录范围时，保留记录并改为 `withdrawn`；来源不足时使用 `pending` 和 `needs-review`。更新核验日期时同时说明本次实际检查范围，不把自动链接检查当成功能实测。

## Automation / 自动检查

Pull requests and pushes to main run catalog validation, generation drift checks, internal link and anchor validation, parser fixtures and awesome-lint. Repeated navigation links are intentional; catalog URLs have a separate uniqueness check. The conventional locale filename and Chinese punctuation need narrow lint exceptions in generated Markdown.

The weekly link workflow and manual `npm run links` write a report under ignored `reports/`. Repeated 404/410 responses are marked unavailable. Access blocks, rate limits and network errors need human review. Reports never remove entries or rewrite review dates. Inspect redirects and replacement URLs before changing a record. GitHub repository checks may use `GITHUB_TOKEN` only with api.github.com.

每周报告只提示检查，不自动删条目。403、429 或超时不代表项目停用。工作流异常可从 Actions 查看并下载报告，不自动向贡献者发送消息。

## Reproducible examples / 示例维护

When parser versions or fixtures change, run `npm run example`, inspect the output differences, update both compatibility guides and run `npm run verify`. The checked HTML is for a trusted fixture, not a sanitizer for untrusted Markdown.

## Community feedback / 社区反馈

Use the recommendation, correction and experience forms to collect specific tasks and evidence. Start discussion around the selection guide or a reproducible compatibility result. Track which feedback produces useful corrections; avoid submitting the same promotional message across communities. A website and external promotion are separate future work.

[English catalog](../README.md) · [中文版](../README.zh-CN.md)
