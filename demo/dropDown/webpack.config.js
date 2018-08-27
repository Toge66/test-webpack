require('babel-polyfill')

const path = require('path') // 获取绝对路径用
const webpack = require('webpack') // webpack核心
const HtmlWebpackPlugin = require('html-webpack-plugin') // 动态生成html插件
const autoprefixer = require('autoprefixer')

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './src/demo.js' // 项目入口
  ],
  output: {
    path: '/', // 将打包好的文件放在此路径下，dev模式中，只会在内存中存在，不会真正的打包到此路径
    publicPath: '/', // 文件解析路径，index.html中引用的路径会被设置为相对于此路径
    filename: 'bundle.js' //编译后的文件名字
  },
  devtool: 'inline-source-map', // 报错的时候在控制台输出哪一行报错
  context: __dirname, // entry 和 module.rules.loader 选项相对于此目录开始解析
  module: {
    rules: [{
      // .js .jsx用babel解析
      test: /\.js?$/,
      use: ['babel-loader'],
      include: path.resolve(__dirname, 'src')
    }, {
      // .css 解析
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]_[hash:base64:5]'
          }
        },
        'postcss-loader'
      ]
    }, { // .less 解析 (用于解析antd的LESS文件)
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        { loader: 'less-loader', options: { javascriptEnabled: true } },
      ],
      include: path.resolve(__dirname, 'node_modules')
    }, {
      // .less 解析
      test(filePath) {
        return /\.less$/.test(filePath) && !/\.module\.less$/.test(filePath)
      },
      use: [
        'style-loader',
        'css-loader',
        { loader: 'less-loader', options: { javascriptEnabled: true } }
      ],
      include: path.resolve(__dirname, 'src')
    }, {
      // .css 解析
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]_[hash:base64:5]'
          }
        },
        'postcss-loader'
      ]
    }, {
      test: /\.module.less$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader', options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[local]___[hash:base64:5]',
          }
        },
        {
          loader: 'postcss-loader', options: {
            sourceMap: true,
            plugins: [
              autoprefixer({
                browsers: [
                  'last 2 versions',
                  'Firefox ESR',
                  '> 1%',
                  'ie >= 9',
                  'iOS >= 8',
                  'Android >= 4'],
              }),
            ]
          }
        },
      ],
      include: path.resolve(__dirname, 'src')
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      //根据模板插入css/js等生成最终HTML
      filename: 'index.html', //生成的html存放路径，相对于 output.path
      inject: true // 是否将js放在body的末尾
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'] //后缀名自动补全
  }
}