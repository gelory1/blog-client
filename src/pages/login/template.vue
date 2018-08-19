<template>
  <div id="login">
    <form>
      <h3>用户名</h3>
      <el-input placeholder="用户名" type="text" v-model="username"></el-input>
      <h3>密码</h3>
      <el-input placeholder="密码" type="password" v-model="password" @keyup.enter="onLogin"></el-input>
      <el-button type="submit" @click="onLogin">立即登录</el-button>
    </form>
    <p>没有账号？<router-link to="/register"><span>注册新用户</span></router-link></p>
  </div>
</template>

<script src="./template.js"></script>
<style scoped src="./template.css"></style>
