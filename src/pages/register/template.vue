<template>
  <div id="register">
    <h2>注册新账号</h2>
    <form>
      <h3>用户名</h3>
      <div class="el-input">
        <input class="el-input__inner" placeholder="用户名" type="text" v-model="username">
      </div>
      <h3>密码</h3>
      <div class="el-input">
        <input class="el-input__inner" placeholder="密码" type="password" v-model="password" @keyup.enter="onRegister">
      </div>
      <el-button type="submit" @click="onRegister">立即注册</el-button>
    </form>
    <p>已有账号？<router-link to="/login"><span>立即登录</span></router-link></p>
  </div>
</template>

<script src="./template.js"></script>
<style scoped src="./template.css"></style>
