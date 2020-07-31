const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode: 'development',
  // devtool: 'inline-cheap-source-map',
  entry: {
    app: './src/app.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // new ManifestPlugin(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'hello htmlWebpackPlugin'
    })
  ]
}
