"use strict";
const fs = require('fs');
const clor = require('clor');
const suggestions = require('./suggestions');

function lintOne(suggestions, text) {
  const errors = suggestions.filter(s => {
    const matches = text.match(s.find);
    // could also exec to find index and count \n
    // to find line no. and column

    if(matches) {
      const occs = matches.length;
      const culprit = clor.underline.red(matches[0]);
      const fix = clor.bold.green(s.suggest);
      const more = occs > 1 ? ` (${occs} occurrences)` : '';

      console.error(
        `${culprit} should be ${fix}${more}.`
      );
    }

    return matches;
  });

  return errors.length > 0;
};

function lintAll(suggestions, filePaths) {
  const failed = filePaths.filter(p => {
    try {
      const buffer = fs.readFileSync(p);
      const file = buffer.toString();
      const failed = lintOne(suggestions, file);

      if(failed) {
        console.log(`In ${clor.blue(p)}\n`);
        return true;
      }
    } catch(ex) {
      console.error(`Could not read ${p}!`);
      console.error(ex);
      console.log('Continuing the build...');
    }

    return false;
  });

  if(failed.length > 0) {
    console.log(`There were ${failed.length} failures`);
    process.exit(1);
  } else {
    console.log('Tests passed!');
    process.exit(0);
  }
}

module.exports = {
  one: lintOne,
  all: lintAll
};

