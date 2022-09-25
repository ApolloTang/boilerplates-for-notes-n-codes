const { merge } = require('webpack-merge')

const part_page = require('./webpack-part--page.js')
const part_loadCss = require('./webpack-part--load-css.js')
const cssloader_postcss = require('./webpack-part--cssloader--postcss/')


const commonConfig = ({ pathToEntryFile }) => merge([
  {
    entry: [ pathToEntryFile ]
  },
  part_page({title:'demo'}),
])


const productionConfig = merge([
])


const developmentConfig = merge([
  part_loadCss({
    loaders: [cssloader_postcss()]
  })
])


const getConfig = (opts) => {
  const mode = 'development'
  debug = false

  switch (mode) {
    case 'production':
      return merge(commonConfig(opts), productionConfig, {mode: !debug ? mode : 'none'})
    case 'development':
      return merge(commonConfig(opts), developmentConfig, {mode: !debug ? mode : 'none'})
    default:
      throw new Error(`Trying to use an unknow mode, ${mode}`)
  }
}


module.exports = {
  getConfig
}
