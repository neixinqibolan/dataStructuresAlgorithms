const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 配置入口
  entry: './src/index.js',

  // 配置出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js?$/, // 匹配 js 或 jsx 文件
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: true
    })
  ],

  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: 8888
  }
}
