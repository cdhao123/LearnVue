<template>
  <div>{{ message }}</div>
</template>
//将template抽离出来

<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello",
    };
  },
};
</script>

<style scope>
div {
  color: red;
}
</style>
