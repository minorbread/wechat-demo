const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common.js');
const devConfig = require('../config').dev;

const devConf = merge(commonConfig, {
  output: {
    filename: '[name].js',
    publicPath: devConfig.publicPath
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: devConfig.vueloaderConf
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules:true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devtool: devConfig.devtoolType,
  devServer: {
    // 热模块更新
    hot: true,
    historyApiFallback: true,
    host: devConfig.host,
    port: devConfig.port,
    proxy: devConfig.proxyTable,
    compress: true,
    quiet: true,
    inline: true,
    overlay: {
      errors: true,
      warnings: false
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
});
module.exports = devConf;
