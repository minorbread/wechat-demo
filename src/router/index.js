import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

//webpack按需加载组件
const home = r =>
  require.ensure([], () => r(require('../page/home/home')), 'home');
const commun = r =>
  require.ensure([], () => r(require('../page/commun/commun')), 'commun');
const wechat = r =>
  require.ensure([], () => r(require('../page/wechat/wechat')), 'wechat');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/commun',
      name: 'commun',
      component: commun
    },
    {
      path: '/wechat',
      name: 'wechat',
      component: wechat
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
});
