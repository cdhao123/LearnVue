<template>
  <div id="app">
    {{ message }}
    {{ $store.state.count }}
    <!-- 这样做不好，无法让devtools跟踪 -->
    <!-- 修改有固定的格式 -->
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="addcount(5)">+5</button>
    <button @click="addcount(10)">+10</button>
    <vuex />
    <h2>getters相关</h2>
    <h2>{{ $store.getters.power }}</h2>
    <h2>actions相关</h2>
    <h2>{{$store.state.a.name}}</h2>
    <!-- 直接从state拿a -->
  </div>
</template>

<script>
import vuex from "./components/vuex.vue";

export default {
  components: { vuex },
  name: "App",
  data() {
    return {
      message: "我是app组件",
    };
  },
  methods: {
    add() {
      //提交对应的mutations
      this.$store.commit("increment");
    },
    minus() {
      this.$store.commit("decrement");
    },
    addcount(counter) {
      // 把count也传过去
      this.$store.commit("incrementCount", counter);
      // this.$store.dispatch("aupdateinfo")
    },
  },
};
</script>

<style>
</style>
