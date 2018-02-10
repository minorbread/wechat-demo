<template>
  <div id="app">
    <w-header class="header" ></w-header>
    <transition>
      <router-view  class='content'></router-view>
    </transition>
    <w-nav class="nav" ></w-nav>
  </div>
</template>
<script type="text/ecmascript-6">
import WHeader from './components/w-header/w-header'
import WNav from './components/w-nav/w-nav'
export default {
  name: 'app',
  components: {
    WHeader,
    WNav
  }
}
</script>
<style lang="less">
  // #app {
  //   display: flex;
  //   min-height: 100vh;
  //   flex-direction: column;
  // }
  @font-face {
    font-family: SourceHanSansCN;
    src: url(./font/SourceHanSansCN-Normal.otf);
  }
  .content  {
    margin-top: 3em;
    margin-bottom: 4.2em;
  }
  html {
    height: 100%;
    background: #ebebeb;
    font-family: SourceHanSansCN;
  }
  .header {
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0;  
  }
  .nav {
    width: 100%;
    position: fixed;
    bottom: 0;
  }
</style>
