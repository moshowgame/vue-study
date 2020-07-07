//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)
//引用page1页面
import page1  from './components/page1.vue';
//引用page2页面
import page2  from './components/page2.vue';
import user   from './components/user.vue'
import hello from './components/hello.vue';

//定义routes路由的集合，数组类型
const routes=[
    //单个路由均为对象类型，path代表的是路径，component代表组件
    {path:'/page1',component:page1},
    {path:"/page2",component:page2},
    //使用冒号标记，当匹配到的时候，参数值会被设置到this.$route.params中
    {path:"/user/:name",component:user},
    //匹配其他不存在的路由
    {path:"*",component:hello},
]

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
//ES6简写，等于routes：routes
    routes:routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router