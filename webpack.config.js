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
  }
};
