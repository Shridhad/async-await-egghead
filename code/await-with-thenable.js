const Bluebird = require("bluebird");

async function main() {
  console.log("Waiting...");
  await Bluebird.delay(2000);
  console.log("Done");
}

main();
