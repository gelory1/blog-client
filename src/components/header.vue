<template>
  <header :class="{'login':isLogin,'no-login':!isLogin}">
    <template v-if="!isLogin">
      <h1>LET'S SHARE</h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <el-button>立即登录</el-button>
        <el-button>注册账号</el-button>
      </div>
    </template>
    <template v-if="isLogin">
      <h1>LET'S SHARE</h1>
      <div class="user">
        <img class="edit" src="../img/edit.png">
        <img class="head" src="../img/1.jpg">
      </div>
    </template>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data(){
      return {
          isLogin: true
      }
  }
}
</script>


<style scoped>
  h1 {
    font-size: 40px;
    font-weight: bold;
    margin: 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  #header.no-login h1{
    margin-top: 60px;
  }
  #header.no-login .btns{
    margin: 30px 0;
  }
  #header.login{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 12%;
    align-items: center;
  }
  #header.login .user{
    display: flex;
    align-items: center;
  }
  #header.login .user img.edit{
    width: 2em;
    height: 2em;
  }
  #header.login .user img.head{
    width: 3em;
    height: 3em;
    margin-left:10px;
    border-radius: 50%;
  }
</style>
