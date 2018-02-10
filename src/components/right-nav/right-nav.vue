<template>
  <ul class="right-nav" @click="scroll">
    <li v-for="(item) in items">
      <a :href="'#' + item">{{item}}</a>
    </li>
  </ul>
</template>

<script>
export default {

  name: 'right-nav',

  data () {
    return {
      items: ['↑', '☆', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#',]
    }
  },
  methods: {
    scroll: function(event) {
     /* var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      event.preventDefault()
      var text = event.target.innerText
      var tId = document.getElementById(text);
      if (!tId) {
        return
      }
      // document.body.scrollTop = tId.offsetTop 
      scrollTop = tId.offsetTop
      // console.log(scrollTop);
      document.body.scrollTop = tId.offsetTop
      console.log(tId.offsetTop);
      console.log(document.body.scrollTop);*/
    }
  },
}
</script>

<style lang="css" scoped>
  .right-nav {
    /*background-color: #ccc;*/
    position: fixed;
    right: 0;
    top: 0;
    margin: 3em 0 4em 0;
    height: 100%;
  }
  .right-nav li{
    margin: 0;
    text-align: center;
    font-size: 1em;
    list-style-type: none;
  }
  .right-nav a{
    font-size: 1em;
    text-decoration: none;
    color: #999999;
  }
  .right-nav a:visited {
    color: #999999;
  }
  @media screen and (max-height: 600px) {
    .right-nav li, .right-nav a{
      font-size: 0.5em;
    }
  }
</style>