const isTest = String(process.env.NODE_ENV) === 'test'
const isProd = String(process.env.NODE_ENV) === 'production'
const isBabelNode = String(process.env.BABEL_ENV) === 'babelNode'

const modulesType = ( isBabelNode, isTest ) => {
  switch (true) {
    case (isBabelNode): {
      return 'commonjs'
    }
    case (isTest): {
      return 'commonjs'
    }
    default:
      return false
  }
}

module.exports = (api) => {
  api.cache(true)
  const presets = [
    [
      '@babel/preset-env',
      {
        'debug': false,
        'targets': isBabelNode ? {'node':'current'} :  {'ie':'11'},
        'useBuiltIns': 'usage',
        // 'corejs': 3,  // dynamic import is broken:
                         // https://github.com/babel/babel/issues/9872
                         // so we will use corejs@2 instead
        'corejs': 3,
        'modules': modulesType(isBabelNode, isTest)
      }
    ],
    "@babel/preset-typescript",
  ]

  const plugins = [
    '@babel/proposal-class-properties',
    // Next two line:
    // not sure if we still need to handle syntax-dynamic-import, sofar it works without it
      // '@babel/plugin-syntax-dynamic-import',
      // isTest ? 'babel-plugin-dynamic-import-node' : null
  ].filter(Boolean)

  return {
    presets,
    plugins
  }
}
