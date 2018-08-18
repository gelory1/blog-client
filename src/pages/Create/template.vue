<template>
  <div id="create">
    <h1>创建博客</h1>
    <main>
      <form>
        <h3>文章标题</h3>
        <el-input></el-input>
        <p class="msg">限30个字</p>
        <h3>内容简介</h3>
        <el-input type="textarea" class="intro" rows="3" resize="none"></el-input>
        <p class="msg">限200个字</p>
        <h3>文章内容</h3>
        <el-input type="textarea" class="content" rows="5" resize="none"></el-input>
        <p class="msg">限10000个字</p>
        <p>
          <label>是否展示到首页</label>
          <el-switch active-color="#13CE66" inactive-color="#999" v-model="value2">
          </el-switch>
        </p>
        <el-button type="submit">立即创建</el-button>
      </form>
    </main>
  </div>
</template>

<script src="./template.js"></script>
<style scoped src="./template.css"></style>
