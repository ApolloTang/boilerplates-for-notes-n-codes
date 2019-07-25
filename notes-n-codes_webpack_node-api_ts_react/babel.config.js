module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'usage',
        'corejs': '3', // <----https://stackoverflow.com/questions/55251983/what-does-this-error-mean-with-usebuiltins-option-required-direct-setting-of
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
