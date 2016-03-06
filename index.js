"use strict";

const fs = require('fs');
const lint = require('./lint');
const suggestions = require('./suggestions');

process.stdin.resume();
process.stdin.setEncoding('utf8');

let paths = [];

process.stdin.on('data', function(chunk) {
  paths = paths.concat(chunk.split('\n'));
});

process.stdin.on('end', function() {
  const validPaths = paths
    .filter(p => p.length > 0)
    .filter(p => fs.statSync(p).isFile());

  lint.all(suggestions, validPaths);
});

