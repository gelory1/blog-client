<template>
  <div id="user">
    <header>
      <img :src="user.avatar">
      <h3>{{user.username}}</h3>
    </header>
    <main>
      <router-link class="items" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
        <div class="date">
          <span class="dateDay">{{splitDate(blog.createdAt).day}}</span>
          <span class="dateMonth">{{splitDate(blog.createdAt).month}}月</span>
          <span class="dateYear">{{splitDate(blog.createdAt).year}}</span>
        </div>
        <div class="article">
          <div class="articleName">{{blog.title}}</div>
          <div class="articleContent">
            <p>{{blog.description}}</p>
          </div>
        </div>
      </router-link>
    </main>
    <section>
      <div class="pages">
        <el-pagination
          layout="prev, pager, next"
          :current-page.sync="page"
          :total="total"
          @current-change="onCurrentChange">
        </el-pagination>
      </div>
    </section>
  </div>
</template>

<script src="./template.js"></script>
<style scoped src="./template.css"></style>
