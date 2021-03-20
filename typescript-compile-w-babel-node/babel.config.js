module.exports = (api) => {
  api.cache(true)
  const presets = [
    [
      "@babel/preset-env",
      {
        "targets": { "node":"current" },
        // "debug": true,
        "modules": 'commonjs'
      }
    ], [
      '@babel/preset-typescript', {
        allowNamespaces: true
      }
    ]
  ]

  return {
    presets
  }
}
