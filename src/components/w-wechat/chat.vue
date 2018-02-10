<template>
  <div class="content-list">
    <div class="logo"><i :class="{active: isActive}" ></i><img :src="userImg" alt=""></div>
    <div class="msg">
      <h1>{{userName}}</h1>
      <p>{{content}}</p>
      <span>{{time}}</span>
    </div>
  </div>
</template>

<script  type="text/ecmascript-6">
export default {

  name: 'chat',
  props: ['userImg', 'userName','content', 'time', 'isActive'],
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.content-list {
  background-color: #fcfcfc;
  display: flex;
  margin-bottom: 1px;
  position: relative;
}
.logo {
  width: 4em;
  height: 4em;
  margin: 0.7em 1em;
  background-color: #ccc;
}
.logo img {
  width: 4em;
  height: 4em;
  float: right;
}
.msg {
  flex: 1;
}
.msg h1 {
  margin: 0;
  font-size: 1.2em;
  margin-top: 1.2em;
}
.msg p {
  margin: 0;
  font-size: 1em;
  color: #999999;
  font-weight: 550;
}
.msg span {
  position: absolute;
  top: 0.8em;
  right: 1em;
  color: #999999;
}
.active {
  display: inline-block;
  border: 6px solid #f00;
  border-radius: 6px;
  position: absolute;
  top: 0.3em;
  left: 4.6em;
}
</style>