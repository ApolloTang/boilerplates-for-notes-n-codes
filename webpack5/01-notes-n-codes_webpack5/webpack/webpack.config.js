const path = require('path')

const { merge } = require('webpack-merge')

const part_page = require('./webpack-part--page.js')
const part_loadCss = require('./webpack-part--load-css.js')
const part_loadImages = require('./webpack-part--load-images.js')
const part_loadFonts = require('./webpack-part--load-fonts.js')
const part_loadJs_BabelLoader = require('./webpack-part--load-js--babel-loader.js')
const cssloader_postcss = require('./webpack-part--cssloader--postcss/')


const commonConfig = ({ pathToEntryFile, absPathToFonts }) => merge([
  {
    entry: [ pathToEntryFile ],
    resolve: {
      alias: {
        '~': path.resolve(pathToEntryFile, '..')
      },
      extensions: ['*', '.ts', '.js', '...'],
      extensionAlias: {
       '.js': ['.js', '.ts'],
       '.cjs': ['.cjs', '.cts'],
       '.mjs': ['.mjs', '.mts']
      }
    },
  },
  part_page({title:'demo'}),
  // part_loadImages(),
  part_loadImages({ absPathToFonts }),
  part_loadFonts({ absPathToFonts }),
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

  const _opts = {
   ...opts,
   absPathToFonts: path.resolve(opts.pathToEntryFile, '../..', 'fonts')
  }

  switch (mode) {
    case 'production':
      return merge(commonConfig(_opts), productionConfig, {mode: !debug ? mode : 'none'})
    case 'development':
      return merge(commonConfig(_opts), developmentConfig, {mode: !debug ? mode : 'none'})
    default:
      throw new Error(`Trying to use an unknow mode, ${mode}`)
  }
}


module.exports = {
  getConfig
}
