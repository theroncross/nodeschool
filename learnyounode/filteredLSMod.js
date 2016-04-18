'use strict;'

const fs = require('fs');
const path = require('path');

module.exports = function(directory, extension, callback) {
  fs.readdir(directory, (error, allFiles) => {
    if (error) {
      callback(error);
      return;
    }
    const filteredFiles = allFiles.filter(fileName => {
      return path.extname(fileName) === `.${extension}`;
    });
    callback(null, filteredFiles);
  });
};
