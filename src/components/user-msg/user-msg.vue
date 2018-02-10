<template>
  <div class="user-item">
    <div class="user-img"><img :src="userImg" alt=''></div>
    <h1>{{userName}}</h1>
  </div>
</template>

<script>
export default {

  name: 'user-msg',
  props: ['userImg', 'userName'],
  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
.user-item {
  overflow: hidden;
  display: flex;
  background-color: #fcfcfc;
  border-bottom: 1px solid #ccc;
  margin: 0 1em;
}
.user-item  h1{
  font-size: 1.2em;
  line-height: 2.2em;
}
.user-img img {
  width: 3em;
  height: 3em;
}
.user-img {
  width: 3em;
  height: 3em;
  margin: 0.7em 1em 0.7em 0;
  background-color: #ccc;

}
</style>