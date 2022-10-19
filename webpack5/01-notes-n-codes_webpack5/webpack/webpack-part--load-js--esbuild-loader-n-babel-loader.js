const loadJs_esBuildLoader_babelLoader = () => {

  const module = {
    rules: [
      {
        test: /\.m?(t|j)s$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'ts',
              target: 'es2015'
            }
          },
        ],
        exclude: [/node_modules/]
      }
    ]
  }

  return {
    module
  }
}


module.exports = loadJs_esBuildLoader_babelLoader
