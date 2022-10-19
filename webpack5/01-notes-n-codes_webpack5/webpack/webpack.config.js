const path = require('path')

const { merge } = require('webpack-merge')

const part_page = require('./webpack-part--page.js')
const part_loadCss = require('./webpack-part--load-css.js')
const part_loadImages = require('./webpack-part--load-images.js')
const part_loadJs_BabelLoader = require('./webpack-part--load-js--babel-loader.js')
const cssloader_postcss = require('./webpack-part--cssloader--postcss/')

const ABS_PATH_TO_FONTS_DEFAULT = path.resolve(__dirname, '..', 'src/fonts')
const ABS_PATH_TO_SRC = path.resolve(__dirname, '..', 'src')

const commonConfig = ({ pathToEntryFile }) => merge([
  {
    entry: [ pathToEntryFile ],
    resolve: {
      extensions: ['*', '.ts', '.js', '...'],
      extensionAlias: {
       '.js': ['.js', '.ts'],
       '.cjs': ['.cjs', '.cts'],
       '.mjs': ['.mjs', '.mts']
      }
    },
  },
  part_page({title:'demo'}),
  part_loadImages(),
  part_loadJs_BabelLoader(),
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
