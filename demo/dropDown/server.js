const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config) // 实例化webpack
app.use(
  webpackDevMiddleware(compiler, {
    // 挂载webpack小型服务器
    publicPath: config.output.publicPath, // 对应webpack配置中的publicPath
    quiet: true, // 是否不输出启动时的相关信息
    stats: {
      colors: true, // 不同信息不同颜色
      timings: true // 输出各步骤消耗的时间
    }
  })
)
// 挂载HMR热更新中间件
app.use(webpackHotMiddleware(compiler))
// 所有请求都返回index.html
app.get('/', (req, res, next) => {
  const filename = path.join(config.output.publicPath, 'index.html')
  // 由于index.html是由html-webpack-plugin生成到内存中的，所以使用下面的方式获取
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});