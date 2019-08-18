const pathResolve = require('path').resolve

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = (
  { mode = 'development', presets = []} = { mode : 'development', presets: []},
  argv
) => {

  const configOut = {
    devtool: 'source-map',
    devServer: {
      port: 8888,
      historyApiFallback: true,
      stats: 'minimal'
    },
    mode: 'none',
    context: pathResolve(__dirname),
    entry: `./${argv.entryFile}`,
    output: {
      //  must specified output.publicPath otherwise
      //  devServer.historyApiFallback will not work
      publicPath: '/',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['*', '.mjs', '.js', '.ts']
    },
    module: {
      rules: [
        {
          test: /\.m?(j|t)s?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'lab',
      })
    ]
  }

  console.log('configOut: ', configOut)

  return configOut
}
