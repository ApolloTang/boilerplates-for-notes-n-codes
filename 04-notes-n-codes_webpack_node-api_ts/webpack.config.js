const pathResolve = require('path').resolve
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({pathToEntryFile}) => {

  const configOut = {
    devtool: 'source-map',
    mode: 'none',
    context: pathResolve(__dirname),
    entry: `./${pathToEntryFile}`,
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
          use: [
            { loader: 'babel-loader' }
          ],
          exclude: /node_modules/  // <---- very important
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'lab',
      })
    ]
  }

  // console.log(configOut)
  return configOut
}
