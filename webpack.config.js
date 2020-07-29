const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  performance: {
    maxAssetSize: 512000
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
      }
    ]
  }
};
