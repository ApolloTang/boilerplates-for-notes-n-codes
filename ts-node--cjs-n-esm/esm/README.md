# How to use this playground:

This playground has been configure to run ts-node with ECMMAScript module, see: https://stackoverflow.com/a/65163089/3136861



## Development with ts-node using nodemon:

```bash
./tsnode-dev.sh ./src/foo.ts
```

The above will run `ts-node` on `./src/foo.ts` and watch `src/` folder.



## Transpile to commonjs and run with node.  

To run the code with node, you have to transpile it with tsc and rename the output file extension to .cjs: 

1. Open a terminal window and navigate to the directory containing the code.
2. Run the command `tsc <filename>.ts` to transpile the code.
3. Rename the output file extension from .js to .cjs.
4. Run the command `node <filename>.cjs` to execute the code.

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