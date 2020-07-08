<template>
  <div id="app">
    {{msg}}
    <h3>
      <router-link to="/home">主页</router-link>
      <router-link to="/news/1">新闻1</router-link>
      <router-link to="/news/2">新闻2</router-link>
    </h3>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <hr>

    <button @click="send">发送axios请求</button>
    <MyButton @click.native="send"></MyButton>
  </div>
</template>

<script>
import axios from 'axios'
import MyButton from './components/MyButton.vue'


export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello World'
    }
  },
  mounted(){
    console.log('加载所有路由列表：'+this.$route);
  },
  watch:{
    $route:function(newValue,oldValue){
      console.log('路由发生变化，跳转到：'+newValue.path);
    }
  },
  methods:{
    send(){
      axios.defaults.withCredentials = true;
      axios.defaults.crossDomain=true;
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post('https://blog.csdn.net/moshowgame/rss/list', '{id:1}').then(res => {
        console.log(res);
      }).catch(err => {
          console.log(err);
        });
      // this.$http.post('https://blog.csdn.net/moshowgame/rss/list')
      //   .then(resp => {
      //     console.log(resp.data);
      //   }).catch(err => {
      //     console.log(err);
      //   });
    }
  },
  components:{
    MyButton
  }
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
