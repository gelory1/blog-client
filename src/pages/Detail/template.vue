<template>
  <div id="detail">
    <div class="articleHeader">
      <img :src="user.avatar">
      <div class="articleName">
        <h3>{{title}}</h3>
        <div>
          <span class="name"><router-link :to="`/user/${user.id}`">{{user.username}}</router-link> </span>
          <span class="articleTime">发布于{{friendlyDate(createdAt)}}</span>
        </div>
      </div>
    </div>
    <section class="articleContent" v-html="markdown">
    </section>
  </div>
</template>

<script src="./template.js"></script>
<style scoped src="./template.less" lang="less"></style>
