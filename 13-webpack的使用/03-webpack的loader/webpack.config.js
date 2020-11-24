const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
        //style-loader负责将样式添加到DOM中
        //css-loader负责将css文件进行加载
        //使用多个loader时，是从右向左进行的
      }
    ]
  }
}