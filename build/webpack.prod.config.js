'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const prodConfig = require('../config').build;
const baseConf = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
function assetsPath(url) {
  return path.join(prodConfig.staticPath, url);
}

const prodConf = merge(baseConf, {
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: prodConfig.publicPath,
    filename: assetsPath('js/[name]-[hash:5].js'),
    chunkFilename: assetsPath('js/[name].[hash:5].js')
  },
  devtool: prodConfig.devtoolType,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: prodConfig.vueloaderConf
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
          {
            loader: 'css-loader',
            options: {
              modules:true,
              minimize: true
            }
          }, 'postcss-loader'],
          fallback: 'vue-style-loader'
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader', 'postcss-loader'],
          fallback: 'vue-style-loader'
        })
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        //在node_modules的js文件!
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        );
      }
    }),
    
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      children: true,
      async: true,
      minChunks: 3
    }),

    new ExtractTextPlugin({
      filename: assetsPath('css/[name].[contenthash].css'),
      allChunks: false
    }),

    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public/static'),
        to: prodConfig.staticPath,
        ignore: ['.*']
      }
    ]),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../public/index.html'),
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    }),
    new CleanWebpackPlugin(
      ['static/*'],　
      {
          root: path.resolve(__dirname, '../public'),       　　　　　　　　　
          verbose:  true,        　　　　　　　　
          dry:      false        　　　　　　
      }
    )
  ]
});
module.exports = prodConf;