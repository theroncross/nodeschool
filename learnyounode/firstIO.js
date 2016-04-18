'use strict';

const fs = require('fs');

const path = process.argv[2];
const contents = fs.readFileSync(path).toString();
const newLines = contents.split('\n').length - 1;

console.log(newLines);
