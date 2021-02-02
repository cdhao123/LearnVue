<template>
    <div>
        <h2>我是首页</h2>
        <h2>我是首页</h2>
        <h2>我是首页</h2>
        <h2>你好啊，{{Userid}}</h2>
        <!-- 注意路径要写完整 -->
        <router-link to="/home/child1">子组件1</router-link>
        <router-link to="/home/child2">子组件2</router-link>
        <router-link to="/home/child3">子组件3</router-link>
        <!-- 子组件的routerview写在这里 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'home',
    computed:{
        Userid(){
            // return this.$router
            //router是在index.js中创建的路由对象
            //route是处于活跃状态的路由
            return this.$route.params.userid //与index.js中的一致
        }
    }
}
</script>

<style>

</style>