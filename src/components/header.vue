<template>
  <header :class="{'login':isLogin,'no-login':!isLogin}">
    <template v-if="!isLogin">
      <h1><router-link to="/">LET'S SHARE</router-link></h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <router-link to="/login"><el-button>立即登录</el-button></router-link>
        <router-link to="/register"><el-button>注册账号</el-button></router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <h1><router-link to="/">LET'S SHARE</router-link></h1>
      <div class="user">
        <router-link to="/edit"><img class="edit" src="../img/edit.png" ></router-link>
        <div class="myAndLogout">
          <img class="head" :src="user.avatar">
          <ul>
            <li><router-link to="/my">我的</router-link></li>
            <li><a href="#" @click="onLogout">注销</a></li>
          </ul>
        </div>

      </div>
    </template>
  </header>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'


export default {
  name: 'Header',
  data(){
      return {

      }
  },
  computed: {
    ...mapGetters(['user','isLogin'])
  },
  created(){
      this.checkLogin()
  },
  methods:{
    ...mapActions(['checkLogin','logout']),
    onLogout(){
        this.logout()
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
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  #header.no-login h1{
    margin-top: 60px;
    color: #fff;
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

  #header.login .user .myAndLogout{
    position: relative;

  }
  #header.login .user .myAndLogout:hover ul{
    display: block;
  }
  #header.login .user .myAndLogout ul{
    display: none;
    position: absolute;
    top: 45px;
    left: 6px;
    border: 1px solid #eaeaea;
    background-color: #fff;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #header.login .user .myAndLogout ul a{
    color: #333;
    font-size: 12px;
  }
  #header.login .user .myAndLogout ul li{
    margin: 0;
    width: 100%;
  }
  #header.login .user .myAndLogout ul li:hover{
    background-color: #999;
  }
</style>
