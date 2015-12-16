module.exports = {
  context: __dirname + "/src",
  entry: "./ramda-validator.js",
  output: {
    path: __dirname + "/dist",
    filename: "ramda-validator.js",
    library: "RV",
    libraryTarget: "umd"
  },
  externals: {
    "ramda": {
      root: 'R',
      commonjs2: 'ramda',
      commonjs: 'ramda',
      amd: 'ramda'
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/, // include .js files
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        loader: "jshint-loader"
      }
    ],
    jshint: {
      emitErrors: true,
      failOnHint: false,
    }
  },
};
