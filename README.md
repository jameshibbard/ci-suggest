# ci-suggest
[![Build Status](https://travis-ci.org/danprince/ci-suggest.svg?branch=master)](https://travis-ci.org/danprince/ci-suggest)

Check changed files for flagged terms and offer suggestions with CI.

Install dependencies with `npm install` then run linter with `npm test`.

1. Fetch remote branch specified in `diff.sh` (would be moved to env-var later)
2. Find diff'd files between local stage and remote branch
3. Iterate over each one checking the regex in suggestions.js
4. Print out error messages for each discovered error.
5. Return 0 if no errors, otherwise return 1

To test this out, create file with a deliberate mistake, stage it and run the tests.

```bash
echo "Javascript is a silly language" > article.md
git add article.md
npm test
```
