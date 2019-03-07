module.exports = (api) => {
  api.cache(true)
  const presets = [
    [
      "@babel/preset-env",
      {
        "targets": {"node":"current"},
        "modules": "commonjs"
      }
    ],
    "@babel/preset-typescript",
  ];

  const plugins = [
  ]

  return {
    presets,
    plugins
  }
}
