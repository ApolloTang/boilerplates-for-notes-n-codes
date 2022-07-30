const { mode } = require('webpack-nano/argv')
const { merge } = require('webpack-merge')

const part_page = require('./webpack-part--page.js')
const part_devServer = require('./webpack-part--dev-server.js')
const part_tsLoader = require('./webpack-part--ts-loader.js')

const DEBUG_PROD = false

const commonConfig = merge([
  {
    entry: [ './src/main.ts' ]
  },
  part_page({title:'demo'}),
  part_tsLoader(),
])


const productionConfig = merge([
])


const developmentConfig = merge([
  {
    entry: [ 'webpack-plugin-serve/client' ]
  },
  part_devServer(),
])


const getConfig = (mode) => {
  switch (mode) {
    case 'production':
      return merge(commonConfig, productionConfig, {mode: !DEBUG_PROD ? mode : 'none'})
    case 'development':
      return merge(commonConfig, developmentConfig, {mode})
    default:
      throw new Error(`Trying to use an unknow mode, ${mode}`)
  }

}


const config = getConfig(mode)
// console.dir(config, {depth: 8})

module.exports = config
