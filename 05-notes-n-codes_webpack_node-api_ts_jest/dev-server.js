const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const webpackConfigFn = require('./webpack.config.js');

const argv = process.argv
// const node_fullPath = argv[0]
// const thisFileName = argv[1]
const argv1 = argv[2]

const host = '0.0.0.0'
const port = '8888'

const devServerOpts = {
  host, port
  // port and host is required for WDS.addDevServerEntrypoints
  // Ref: https://github.com/webpack/webpack-dev-server/issues/1095
};

const webpackConfig = webpackConfigFn({ pathToEntryFile: argv1 })

webpackDevServer.addDevServerEntrypoints(webpackConfig, devServerOpts); //<-- this must invoke before compiler
                                                                        // https://stackoverflow.com/a/46871621/3136861
const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, devServerOpts);

server.listen(port, host, () => {
  console.log(`Starting server on http://${host}:${port}`);
});
