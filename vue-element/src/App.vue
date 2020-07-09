<template>
  <div id="app">
    <v-header></v-header>

    <el-breadcrumb separator="">
      <el-breadcrumb-item :to="{ path: '/goods' }">【商品】</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/ratings' }">【评论(未实现)】</el-breadcrumb-item>
    </el-breadcrumb>
    <br><br>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/header/Header.vue'

  export default {
    data() {
      return {
        activeName: 'goods'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
      'v-header':Header
    }
  }
</script>

<style lang="less" scoped>
  /* #app .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    .tab-item{
      flex:1;
      text-align: center;
      & > a{
        font-size: 14px;
        display: block;
        &.active{
          color:#ff7300;
        }
      }
    }


  } */
</style>
