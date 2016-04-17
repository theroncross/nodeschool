'use strict';

const fs = require('fs');

const path = process.argv[2];
fs.readFile(path, (err, data) => {
  if (err) throw err;
  const newLines = data.toString().split('\n').length - 1;
  console.log(newLines);
});
