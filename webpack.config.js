const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'webpack-numbers.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: true
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    }
  }
};
