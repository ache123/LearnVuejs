const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const WebpackMerge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = WebpackMerge(baseConfig, {
  plugins: [
    //打包时需要的配置
    new UglifyJsWebpackPlugin()
  ]
})

