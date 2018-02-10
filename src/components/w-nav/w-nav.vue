<template>
  <div class="w-nav" @click="active">
    <router-link class="w-navItem" to="/wechat"><span :class="change(isActive.msg, 'a-wechat', 'a-w')" ><i :class="change(isActive.msg, 'a-wechat', 'a-wechat', 'wechat')" :style="backgroundSpan"></i>微信</span></router-link>
    <router-link class="w-navItem" to="/commun"><span :class="change(isActive.msg, 'a-commun', 'a-c')" ><i :class="change(isActive.msg, 'a-commun', 'a-commun', 'commun')" :style="backgroundSpan"></i>通讯录</span></router-link>
    <router-link class="w-navItem" to="/#"><span :class="change(isActive.msg, 'a-see', 'a-s')" ><i :class="change(isActive.msg, 'a-see','a-see', 'see')" :style="backgroundSpan"></i>发现</span></router-link>
    <router-link class="w-navItem" to="/#"><span :class="change(isActive.msg, 'a-me', 'a-m')" ><i :class="change(isActive.msg, 'a-me','a-me', 'me')" :style="backgroundSpan"></i>我</span></router-link>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
export default {

  name: 'w-nav',

  data () {
    return {
      backgroundSpan: {
        backgroundImage: 'url(' + require('../../public/img/icon.png') + ')',
      },
      isActive: {
        msg: ''
      },
    }
  },
  methods: {
    change: function (active, class1, class2, class3) {
      return class1.indexOf(active)!=-1 ? class2:class3
    },
    active: function (event) {
      if (!event) {
        Vue.set(this.isActive,'msg', 'wechat')
        return;
      }
      var activeTarget, activeClass;
      activeTarget = event.target
      if (activeTarget.childNodes.length > 0 || activeTarget.childNodes[0]) {
        activeClass = activeTarget.childNodes[0].className || activeTarget.childNodes[0].childNodes[0].className
      } else {
        activeClass = activeTarget.className
      }
      Vue.set(this.isActive,'msg', activeClass)
     }
    },
    mounted() {
      this.active()
    },
}
</script>

<style lang="css" scoped>
  .w-nav {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: #fcfcfc;
    border-top: 1px solid #ccc;
  }
  .w-navItem {
    flex: 1;
    text-align: center;
    text-decoration: none;
    padding: 2.3em 0 0.6em 0;
  }
  .w-navItem > span {
    font-size: 0.3em;
    color: #999999;
  }
  .w-navItem i {
    width: 3em;
    height: 2.2em;
    display:inline-block;
    position: absolute;
    bottom: 2em;
    background-size: 355px 200px;
  }
  .wechat {
    background-position: -20px -21px;
  }
  .commun {
    background-position: -100px -133px;
  }
  .see {
    background-position: -201px -21px;
    background-size: 355px 200px;
  }
  .me {
    background-position: -290px -20px;
    margin-left: -0.6em;
  }
  .a-wechat {
    background-position: -28px -132px;
  }
  .a-commun {
    background-position: -104px -221px;
  }
  .a-see{
    background-position: -318px -208px;
    background-size: 548px 300px !important;
  }
  .a-me {
    background-position: -463px -213px;
    background-size: 548px 300px !important;
    margin-left: -0.6em;
  }
  span.a-s, span.a-w, span.a-c, span.a-m {
    color:green;
  }
</style>