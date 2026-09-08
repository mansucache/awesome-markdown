import awesomeLint from 'awesome-lint/index.js';

// Explicit repository URL also works on local feature branches without an upstream.
for (const filename of ['README.md','README.zh-CN.md']) {
  await awesomeLint.report({filename,repoURL:'https://github.com/mansucache/awesome-markdown'});
}
