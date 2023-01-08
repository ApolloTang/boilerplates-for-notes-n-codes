// ---------------------------
// Demo for consuming Pure ESM
// ---------------------------
declare module 'chalk'  // <-- see: https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam

// const c = require('chalk')   // <--- This will not work because chalk@5 is a pure ESM package.
// Below is solution from
//   https://stackoverflow.com/questions/70309135/chalk-error-err-require-esm-require-of-es-module
async function chalk() {
  return (await import("chalk")).default;
}
async function main(){
  console.log((await chalk()).red(">>>>"));
}
main()

// ------------------------
// Demo for using assertion
// ------------------------
const assert = require("node:assert").strict
// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, "3"]], 4, 5])
assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, 3]], 4, 5])
