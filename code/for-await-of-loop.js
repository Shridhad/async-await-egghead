Symbol.asyncIterator = Symbol.asyncIterato || Symbol("asyncIterator");
const Bluebird = require("bluebird");

async function* someGenerator() {
  await Bluebird.delay(1000); yield 1;
  await Bluebird.delay(1000); yield 2;
  await Bluebird.delay(1000); yield 3;
}

async function main() {
  for await (const value of someGenerator()) {
    console.log(value);
  }
}

main();

/**
  as node does not support generators by default, use following commands to run this script
  > node run build
  > node dist/for-await-of-loop.js
*/
