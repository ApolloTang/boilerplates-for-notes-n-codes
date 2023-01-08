# How to use this playground:



## Running ts-node with nodemon

Make sure `ts-node` and `nodemon` is installed globally.

```
cd my-code
nodemon -w ./foo.ts -x ts-node ./foo.ts
```

### To run ts-node despite of type error: 

**To execute despite of typescript error:**  add`--logError` before your entry file:

```
nodemon -w ./foo.ts -x ts-node --logError ./foo.ts
```

**To execute but silence typescript error:**  add`-T` before your entry file:

```
nodemon -w ./foo.ts -x ts-node -T ./foo.ts
```

The `-T ` is short for `--transpileOnly

Reference:

[https://stackoverflow.com/questions/60726445/how-to-use-ts-node-regardless-of-errors](https://stackoverflow.com/questions/60726445/how-to-use-ts-node-regardless-of-errors)



## comminjs consuming pure ESM package

This setup also allow comminjs consuming pure ESM package (see: [this](https://github.com/TypeStrong/ts-node/issues/1007)):

```json
// file: tsconfig.json

{
  "compilerOptions": {
    // ...

    "moduleResolution": "node",
    "target": "ESNext",
    "lib": ["ESNext"],
    "module": "ESNext"
  }
}
```





```ts
// file: foo.ts

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
```

