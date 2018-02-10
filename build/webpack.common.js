'use strict';

const path = require('path');
const config = require('../config').build;

function resolve(url) {
  return path.join(__dirname, '..', url);
}

function assetsPath(_path) {
  return path.join(config.staticPath, _path);
}

//webpack 基本设置

module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'vue': 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        include: [resolve('src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: config.staticPath+'/img/[name].[hash:7].[ext]' 
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: config.staticPath + 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: config.staticPath + '/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  }
};
