<template>
  <div id="app">
    <div id="nav">
      <!-- 动态路由 -->
      <router-link :to="'/home/'+userid">首页</router-link>
      <!-- 默认被渲染出a标签 -->
      <router-link to="/about" tag="button" replace>关于</router-link>
      <!-- 用tag渲染成button -->
      <!-- replace 防止用户跳转 -->
      <!-- 活跃的标签会自动添加router-link-exact-active属性 -->
      <button @click="homeclick">首页</button>
      <button @click="aboutclick">关于</button>
      <router-link to="/profile">档案</router-link>
      <!-- 利用query传参数 -->
      <router-link :to="{path:'/profile',query:{name:'aaa',age:18}}">档案</router-link>
      <button @click="profileclick">档案</button>
      <router-view></router-view>
    </div>
    <!-- <router-view/> 决定渲染出的元素放在什么地方-->
  </div>
</template>

<script>
export default {
  name:'App',
  //通过代码实现页面跳转
  methods:{
    homeclick(){
      this.$router.push('/home')
      //this.$router.replace('/home')
    },
    aboutclick(){
      this.$router.replace('/about')
    },
    profileclick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'bbb',
          age:19 // 通过函数的方式传入query
        }
      })
    }
  },
  data(){
    return {
      userid:'lisi'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}


#nav a.router-link-exact-active , button.router-link-exact-active  {
  color: #42b983;
}
</style>
