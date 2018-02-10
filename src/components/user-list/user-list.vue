<template>
  <div class="user-list" id="↑">
      <div v-for="value in draws">
        <p :id="value.letter[0].toUpperCase()">{{value.letter[0].toUpperCase()}}</p>
        <div v-for="v in value.data">
        <user-msg :userName="v.userName" :userImg="v.userImg"></user-msg>
        </div>
      </div>
  </div>
</template>

<script>
import UserMsg from '../../components/user-msg/user-msg'
import Vue from 'vue'

export default {

  name: 'user-list',

  data () {
    return {
      userMsg: [
        {userName: 'aaa', userImg:"http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg"},
        {userName: '你好', userImg:"http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg"},
        {userName: '你好', userImg:"http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg"},
        {userName: '更好', userImg:"http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg"},
        {userName: '你好', userImg:"http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg"},
        {userName: 'hi', userImg:"http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg"},
        {userName: 'fdsa', userImg:"http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg"},
        {userName: 'qwpo', userImg:"http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg"},
        {userName: 'wwpo', userImg:"http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg"},
        {userName: '111111', userImg:"http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg"},
        {userName: '111111', userImg:"http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg"},
        {userName: '222222', userImg:"http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg"},
        {userName: 'saf', userImg:"http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg"},
        {userName: '我', userImg:"http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg"}
      ],
      draws: []
    }
  },
  methods: {
    append: function (msg) {
      var len = msg.length
      var msgArr = [],msgArr2 = []
      for (var i = 0; i < len; i++) {
        msgArr.push(msg[i])
      }
      msgArr = this.pySegSort(msgArr)
      this.draws = msgArr
    },
    isChina: function (str) {
      var reg=/^[\u4E00-\u9FA5]+$/;  
      return reg.test(str)
    },
    pySegSort: function (arr,empty) {
      if(!String.prototype.localeCompare){
        return null
      }
      var letters = "☆abcdefghjklmnopqrstwxyz#".split('');
      var zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split('');
        
      var segs = [];
      var lLen = letters.length, aLen = arr.length;
      var _this = this
      for (var i = 0; i < lLen - 1; i++) {
        var curr = {
          letter: [],
          data: []
        }
        for (var j = 0; j < aLen; j++) {
          (function(i, j) {
            if (_this.isChina(arr[j].userName[0])) {
              if ((!zh[i - 1] || zh[i - 1].localeCompare(arr[j].userName, "zh") <= 0) && arr[j].userName.localeCompare(zh[i], "zh") == -1) {
                curr.data.push(arr[j])
                if (curr.letter.indexOf(letters[i]) == -1) {
                  curr.letter.push(letters[i])
                }
              }
            } else {
              if(letters[i] == arr[j].userName[0]) {
                curr.data.push(arr[j])
                if (curr.letter.indexOf(letters[i]) == -1) {
                  curr.letter.push(letters[i])
                }
              } else if(i + 2 == lLen && letters.indexOf(arr[j].userName[0]) == -1){
                curr.data.push(arr[j])
                if (curr.letter.indexOf(letters[lLen - 1]) == -1) {
                  curr.letter.push(letters[lLen - 1])
                }
              }
            }
            if (empty || curr.data.length) {
              if (segs.indexOf(curr) == -1) {
                segs.push(curr)
              }
            }
          }(i, j))
        }
      }
      console.log(segs);
      return segs
    }
  },
  components: {
    UserMsg
  },
  mounted: function () {
    this.append(this.userMsg)    
  }
}
</script>

<style lang="css" scoped>
.user-list {
  background-color: #fcfcfc;
  position: relative;
  padding-top: 50px;
  margin-top: -50px;
}
.user-list p {
  margin: 0;
  padding: 0.1em 1em;
  background-color: #ebebeb;
  color: #999999;
}
</style>