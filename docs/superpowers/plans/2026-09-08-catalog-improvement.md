# Markdown catalog improvement implementation plan

**Goal:** Publish an English-first, bilingual Markdown catalog with task navigation, useful descriptions, traceable corrections and repeatable maintenance checks.

**Architecture:** A JSON catalog contains shared resource IDs, links, tags, bilingual descriptions and review notes. A deterministic generator produces both READMEs, the English compatibility entry and review records. GitHub remains the reading interface; a website is explicitly deferred.

**Tech stack:** Node.js 22 or newer, JSON, Markdown, GitHub Actions. Pin development dependencies in the lockfile. No production service.

**Spec:** The user-approved Chinese preview and task discussion; preserve the full ecosystem, including developer tools. The user explicitly chose to defer the website.

## Constraints

- English in README.md; Chinese in README.zh-CN.md; visible language switching.
- Preserve old English and Chinese section entrances where possible.
- Review all original 146 entries. Keep corrections and withdrawn entries traceable.
- Distinguish metadata checks, source review and executable examples. Do not imply every app has been tested.
- No external community posts, automatic deletions, paid services or deployment.

## Tasks

- [x] Audit linked primary sources; correct unsupported descriptions, product/platform labels and unrelated destinations.
- [x] Create the bilingual catalog and generator; retain all original records, including withdrawn entries.
- [x] Add task navigation, category guidance, a focused selection table, contribution and update entrances.
- [x] Write a bilingual, reproducible Markdown compatibility guide using a shared input fixture.
- [x] Add bilingual contribution instructions, issue forms and a PR checklist.
- [x] Add deterministic generation, link/anchor and catalog validation, example regression checks, and a weekly network report with retry but no automatic removal.
- [x] Run local CI-equivalent checks, render the two READMEs, inspect the final diff and prepare the result for review.

## Acceptance

Both languages contain the same active IDs, URLs, status and tags. Existing records are not silently lost. Generated files are reproducible. Internal links resolve. Meaningful tests cover corruption detection and the compatibility example. Network failures are reported separately from editorial accuracy. Publication and reader feedback are not claimed without evidence.

## Validation record

- Local `npm run verify`: 13 tests passed, both README lint checks passed, generated files and internal links valid.
- Both Markdown documents rendered with all 144 active URLs in catalog order; all former Chinese heading anchors retained.
- YAML syntax parsed for all issue forms and workflows; staged diff whitespace check completed.
- Live link sweep: 160/163 reachable, no repeated 404/410. Typora, WeCom Docs and Confluence had client access failures; separate web retrieval confirmed Typora and Confluence. The report remains local under `reports/`; failures do not trigger automatic removal.
- Website and external community posts remain outside this round.
