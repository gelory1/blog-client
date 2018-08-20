
<template>
  <div id="index">
    <router-link  class="items" v-for=" (blog,index) in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
      <div class="head">
        <img :src="blog.user.avatar">
        <span class="name">{{blog.name}}</span>
      </div>
      <article>
        <div class="articleName">
          <h3>{{blog.title}}</h3>
          <span class="articleTime">{{blog.createdAt}}</span>
        </div>

        <p class="articleContent">
          {{blog.description}}
        </p>
      </article>
    </router-link>
    <div class="pages">
      <el-pagination
        layout="prev, pager, next"
        :pager-count="11"
        :total="total"
        @current-change="onCurrentChange">
      </el-pagination>
    </div>


  </div>
</template>

<script src="./template.js"></script>
<style lang="less" src="./template.less"></style>
