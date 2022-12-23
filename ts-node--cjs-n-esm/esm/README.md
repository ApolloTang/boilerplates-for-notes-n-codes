# How to use this playground:

This playground has been configure to run ts-node with ECMMAScript module, see: https://stackoverflow.com/a/65163089/3136861



## Running ts-node with nodemon

Make sure `ts-node` and `nodemon` is installed globally, and you are using node version 18:

```
nvm use 18
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



## Transpile to commonjs and run with node.  

To run the code with node, you have to transpile it with `tsc` and *rename the output file extension to `.cjs`*:

```
nvm use 18
cd my-code
tsc foo.ts
mv foo.js foo.cjs  # Rename the output file extension to `.cjs
node foo.cjs
```

Renaming to `*.cjs` is neccessary because for two reasons: 

1. we cannot use `tsc --outFile <filename.cjs>`: 

```
$ tsc foo.ts --outFile foo.mjs
foo.ts:1:1 - error TS6131: Cannot compile modules using option 'outFile' unless the '--module' flag is 'amd' or 'system'.
```

2. We cannot force node to run `.js` as commonjs. See: https://github.com/nodejs/node/discussions/37857