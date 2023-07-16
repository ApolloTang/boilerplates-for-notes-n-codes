import chalk from  'chalk'
import { strict as assert } from 'node:assert';

// ---------------------------
// Demo for consuming Pure ESM
// ---------------------------
console.log(chalk.red('>>>>'))

// ------------------------
// Demo for using assertion
// ------------------------
//assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, "3"]], 4, 5]);
assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, 3]], 4, 5]);

