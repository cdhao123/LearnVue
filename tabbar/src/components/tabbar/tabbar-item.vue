<template>
  <div class="tab-bar-item" @click="itemclick">
    <slot name="item-icon"></slot>
    <slot name="item-tcon-active"></slot>
    <!-- 给插槽替换属性，建议套个壳 -->
    <div :style="active_style">
      <slot name="item-text"></slot>
    </div>
    <img src="../../assets/img/tabbar/block.png" />
  </div>
</template>
<script>
export default {
  name: "tabbar-item",
  props:{
    link:String,
    active_color:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {
      }
  },
  computed:{
    isactive(){
      return this.$route.path.indexOf(this.link) !== -1
    },
    active_style(){
      return this.isactive ? {color:this.active_color} : {}
    }
  },
  methods:{
    itemclick(){
      this.$router.replace(this.link)
    }
  }
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
}
/* 不要给在这里给插槽写样式，插槽到时候会被替换 */
</style>