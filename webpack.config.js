const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  performance: {
    maxAssetSize: 10000000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|git)$/,
        loader: 'file-loader',
        options: {
          // name: '[path][name].[ext]',
          outputPath: 'images'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }
    ]
  }
};
