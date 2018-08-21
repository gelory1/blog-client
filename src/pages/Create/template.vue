<template>
  <div id="create">
    <h1>创建博客</h1>
    <main>
      <form>
        <h3>文章标题</h3>
        <el-input v-model="title"></el-input>
        <p class="msg">限30个字</p>
        <h3>内容简介</h3>
        <el-input type="textarea" class="intro" :autosize="{minRows: 3, maxRows: 5}" v-model="description"></el-input>
        <p class="msg">限200个字</p>
        <h3>文章内容 (支持 markdown格式 编写)</h3>
        <el-input type="textarea" class="content" :autosize="{minRows: 10, maxRows: 40}" v-model="content"></el-input>
        <p class="msg">限10000个字</p>
        <p>
          <label>是否展示到首页</label>
          <el-switch active-color="#13CE66" inactive-color="#999" v-model="value1">
          </el-switch>
        </p>
        <el-button type="submit" @click="onClickCreate">立即创建</el-button>
      </form>
    </main>
  </div>
</template>

<script src="./template.js"></script>
<style scoped src="./template.css"></style>
