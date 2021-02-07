<template>
  <div id="app">
      <router-view/>
    <tabbar>
      <tabbar-item link="/home" active_color="blue"><div slot="item-text">首页</div></tabbar-item>
      <tabbar-item link="/category" active_color="blue"><div slot="item-text">分类</div></tabbar-item>
      <tabbar-item link="/cart" active_color="blue"><div slot="item-text">购物车</div></tabbar-item>
      <tabbar-item link="/profile" active_color="blue"><div slot="item-text">我的</div></tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import TabbarItem from './components/tabbar/tabbar-item.vue';
import tabbar from "./components/tabbar/tabbar.vue";

export default {
  components: { tabbar, TabbarItem },
  name: "App",
};
</script>

<style>
/* 在这里引用要加@ */
@import url(./assets/css/base.css);
</style>
