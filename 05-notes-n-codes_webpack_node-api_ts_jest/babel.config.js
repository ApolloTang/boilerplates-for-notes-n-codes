const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'usage',
        'modules': isTest ? 'commonjs' : false
      }
    ],
    "@babel/preset-typescript",
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties'
  ];

  return {
    presets,
    plugins
  };
}
