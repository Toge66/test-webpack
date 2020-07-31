const path = require('path')

module.exports = {
  entry: {
    app: './src/app.js',
    another: './src/another-module.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
