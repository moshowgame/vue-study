<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/page1">#普通页面1</router-link>
      <router-link to="/page2">#普通页面2</router-link>
      <router-link to="/page3">#不存在页面</router-link>
    </div>
    <div>
      <router-link to="/user/xianyu">#动态路由1咸鱼</router-link>
      <router-link to="/user/mengxiang">#动态路由2梦想</router-link>
    </div>
    //router-view定义页面中显示部分
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>