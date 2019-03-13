module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'usage',
        'modules': false
      }
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties'
  ];

  return {
    presets,
    plugins
  };
}
