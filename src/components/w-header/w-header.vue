<template>
  <header>
    <span>微信</span>
    <a href="#"><i class="add" :style="backgroundSpan" ></i></a>
    <a href="#"><i class="search" :style="backgroundSpan" ></i></a>
  </header>
</template>

<script type="text/ecmascript-6">
export default {

  name: 'w-header',

  data () {
    return {
      backgroundSpan: {
        backgroundImage: 'url(' + require('../../public/img/icon.png') + ')',
      }
    }
  }
}
</script>

<style lang="css" >
  header {
    background-color: #393a3f;
  }
  header > span {
    color: #fcfcfc;
    display: inline-block;
    font-size: 1.2em;
    padding: 0.7em 1em;
  }
  header i {
    width: 3em;
    height: 2.6em;
    margin-right: 0.6em;
    display:inline-block;
    float: right;
    background-size: 355px 200px;
  }
  .search {
    background-position: -20px -58px;
  }

  .add {
    background-position: -79px -58px;
  }

</style>