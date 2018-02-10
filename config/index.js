const _path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const baseVueLoaderConf = {
  //引入postcss插件
  postcss: {
    config: {
      path: _path.resolve('../')
    }
  },
  //转为require调用,让webpack处理目标资源!
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
};
const devVueLoaderConf = Object.assign({}, baseVueLoaderConf, {
  loaders: {
    css: ['vue-style-loader', 'css-loader'],
    less: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader']
  },
  cssSourceMap: true
});

const buildVueLoaderConf = Object.assign({}, baseVueLoaderConf, {
  loaders: ExtractTextPlugin.extract({
    use: ['css-loader', 'postcss-loader', 'less-loader'],
    fallback: 'vue-style-loader'
  }),
  cssSourceMap: false
});

module.exports = {
  dev: {
    publicPath: '/',
    devtoolType: 'cheap-module-eval-source-map',
    host: '127.0.0.1',
    port: '8080',
    proxyTable: {},
    vueloaderConf: devVueLoaderConf
  },
  build: {
    publicPath: '/',
    devtoolType: 'source-map',
    staticPath: 'static',
    vueloaderConf: buildVueLoaderConf
  }
};
