const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        'debug': false,
        'targets': {'ie':'11'},
        'useBuiltIns': 'usage',
        // 'corejs': 3,  // dynamic import is broken:
                         // https://github.com/babel/babel/issues/9872
                         // so we will use corejs@2 instead
        'corejs': 3,
        'modules': isTest ? 'commonjs' : false
      }
    ],
    "@babel/preset-typescript",
  ];

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
