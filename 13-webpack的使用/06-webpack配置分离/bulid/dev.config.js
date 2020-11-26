const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = webpackMerge(baseConfig, {
  //开发时需要的配置
  devServer: {
    contentBase: './dist',
    inline: true
  }

})