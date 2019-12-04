
Install:

```bash
$ yarn
```


There are multiple project in `src/` folder, the npm scripts to run playground and test on individual project are as follow:

```bash
$ yarn dev /src/path-to-project/   # start webpack playround for the specified project

$ yarn t1 /src/path-to-project/    # run jest on the specified project
$ yarn t1:w /src/path-to-project/  # run jest on the specified project and watch for change

$ yarn n /src/path-to-project/     # run node on the specified project
$ yarn n:w /src/path-to-project/   # run node on the specified project and watch for change
```

For example:

```bash
$ yarn dev /src/redux-async
```

The above will start webpack dev server on project under path `/src/redux-async/index.ts`, and open it in browser with url: `http://0.0.0.0:<port>/`.
The port number is calculated (up to 10 instances).

The following command run on all projects:

```bash
$ yarn t:coverage    # run jest coverage of all project
$ yarn t:clearCache  # reset jest's cache
$ yarn t:debug       # run jest with node inspector to debug all project (more details at: https://nodejs.org/en/docs/guides/debugging-getting-started/)
$ yarn lint          # run eslint on all project
$ yarn tsc           # check for type error on all project
$ yarn tsc:w         # check for type error on all project in watch mode
```



