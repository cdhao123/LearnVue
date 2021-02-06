<template>
  <div id="app">
    <tabbar>
      <tabbar-item></tabbar-item>
      <tabbar-item></tabbar-item>
      <tabbar-item></tabbar-item>
      <tabbar-item></tabbar-item>
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
