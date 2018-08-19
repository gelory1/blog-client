<template>
  <div id="app">
    <Header id="header"></Header>
    <router-view class="content"></router-view>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
  import Header from './components/header.vue'
  import Footer from './components/footer.vue'
  import store from './store/index'

export default {
  name: 'App',
  store,
  components: {
      Header,
      Footer
  }
}


</script>

<style lang="less" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #2c3e50;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;

    #header,#footer{
      text-align: center;
    }
    #header {
      background: #149739;
      color: white;
    }
    .content{
      flex-grow: 1;
      padding: 0 12%;
    }
    #footer{
      background-color: #d7d7d7;
      color: #666;
      padding: 10px;
    }
  }
</style>
