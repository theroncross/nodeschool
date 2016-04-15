'use strict';

function sumCLArgs(args) {
  let sum = 0;
  for (let i = 2; i < args.length; i++) {
    sum += Number(args[i]);
  }
  return sum;
}

console.log(sumCLArgs(process.argv));