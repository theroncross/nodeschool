'use strict;'

const extensionFilter = require('./ExtensionFilter');

const path = process.argv[2];
const fileType =  process.argv[3];

listFiles(path, fileType);

function listFiles(directory, extension) {
  extensionFilter(directory, extension, (error, data) => {
    if (error) throw err;
    data.forEach(file => {
      console.log(file);
    })
  })
};
