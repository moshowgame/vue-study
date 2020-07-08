<template>
    <div>
        <h1>user</h1>
        //这里可以通过$route.params.name来获取路由的参数
        <p>欢迎回来,{{$route.params.name}}</p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: "我是user组件"
            }
        }
    }
</script>