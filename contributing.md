# Contributing

**English** | [简体中文](contributing.zh-CN.md)

Recommend tools, correct descriptions or share a reproducible experience through [an issue](https://github.com/mansucache/awesome-markdown/issues/new/choose). Issues may be written in English or Chinese. Authors are welcome to recommend their own work; disclose your affiliation.

## What belongs here

We cover the Markdown ecosystem: writing, knowledge management, development, collaboration, conversion and publishing, including applications, libraries, extensions, services and specifications. A resource must have a clear Markdown use case, an official link and a concrete distinction from existing entries. Popularity is not an admission requirement.

Describe what the tool does and when it helps. Distinguish native Markdown files, typing shortcuts, import, export and rendering. State relevant limits; do not infer the whole product is open source because one repository is public. Avoid unsupported claims about pricing, platforms, quality or compatibility. Link to primary documentation for claims that need checking.

## Submit a change

1. Use Node.js 22 or newer and run `npm ci --ignore-scripts`.
2. Edit `data/catalog.json`. Keep existing IDs stable. Add both English and Chinese names and descriptions, a category, supported labels and dated review evidence. Follow a similar existing entry; label definitions live in `scripts/validate.mjs`.
3. Run `npm run build` to regenerate both homepages, the old English entry point and review/history pages.
4. Run `npm run verify`. Include the reason for the change and source links in your pull request.

If you cannot provide both translations, open an issue with the information you have. Maintainers can help complete the record before merging. Do not edit generated files alone: the next build replaces them.

## Evidence and corrections

`metadata` means a basic source check, `source-review` means the noted capability was checked against sources, and `tested` requires reproducible steps with versions and results. A reachable URL alone is not a test. Use `needs-review` with `pending` for unresolved entries. Withdrawn records stay in the data with a reason and sources, so decisions can be revisited.

For experiences, include the tool version, environment, a small input, expected result and actual result. Remove personal data from examples. See [maintenance](docs/maintenance.md) and the [review log](docs/review-log.md).

Contributions to this list are released under [CC0-1.0](LICENSE). Each linked tool retains its own license.
