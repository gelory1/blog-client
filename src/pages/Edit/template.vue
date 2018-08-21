<template>
  <div id="edit">
    <h1>编辑博客</h1>
    <main>
      <form>
        <h3>文章标题</h3>
        <el-input  v-model="title"></el-input>
        <p class="msg">限30个字</p>
        <h3>内容简介</h3>
        <el-input type="textarea" class="intro" rows="3" resize="none" v-model="description"></el-input>
        <p class="msg">限200个字</p>
        <h3>文章内容</h3>
        <el-input type="textarea" class="content" rows="5" resize="none" v-model="content"></el-input>
        <p class="msg">限10000个字</p>
        <p>
          <label>是否展示到首页</label>
          <el-switch active-color="#13CE66" inactive-color="#999" v-model="atIndex">
          </el-switch>
        </p>
        <el-button type="submit" @click="onUpdateBlog">确定修改</el-button>
      </form>
    </main>
  </div>
</template>

<script src="./template.js"></script>
<style scoped src="./template.css"></style>
