'use strict';

const fs = require('fs');
const path = require('path')

const directory = process.argv[2];
const extension = process.argv[3];

fs.readdir(directory, (err, allFiles) => {
  if (err) throw err;
  allFiles.filter(fileName => {
    return path.extname(fileName) === '.' + extension;
  }).forEach(fileName => {
    console.log(fileName);
  });
});