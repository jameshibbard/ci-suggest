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

## Is that a private key?!?
There's no way to add an SSH key to public Travis Repo
The only way to add an SSH to Travis for public repos is through an encrypted file or env var. Neither of these will be exposed to pull requests, which is the whole point of this project. Instead, generate and add a read-only deploy key to the repo then add it to git.

If this is moved over to a private CI platform in the future, it'll be possible to add the key there instead.
