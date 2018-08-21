<template>
  <div id="my">
    <header>
      <img :src="user.avatar">
      <h3>{{user.username}}</h3>
    </header>
    <main>
      <div v-for="blog in blogs" :key="blog.id">
        <router-link  class="items" :to="`/detail/${blog.id}`">
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

          <div class="actions">
            <router-link class="editArticle" :to="`/edit/${blog.id}`">编辑</router-link>
            <span class="deleteArticle" @click="onDeleteBlog(blog.id)">删除</span>
          </div>

      </div>
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
