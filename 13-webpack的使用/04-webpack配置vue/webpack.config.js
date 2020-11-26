const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
        //style-loader负责将样式添加到DOM中
        //css-loader负责将css文件进行加载
        //使用多个loader时，是从右向左进行的
        //所以是先加载，再添加样式到dom
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片小于limit时，会将图片编译成base64的字符串
              //当加载的图片大于limit时，需要使用file-loader进行加载
              limit: 8196,
              //配置打包后的图片都放在img文件夹中，打包后图片的命名进行设置
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    //alias别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    //使导入时省略后缀
    extensions: ['.js', '.css', '.vue']
  }

}