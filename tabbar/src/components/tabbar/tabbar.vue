<template>
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
};
</script>

<style>
#tab-bar {
  background-color: rgb(77, 74, 74);
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 1 rgba(100, 100, 100, 0.3);
}

</style>