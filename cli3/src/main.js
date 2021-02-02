import Vue from 'vue'
import App from './App.vue'
//导入router,如果导入的是目录，则它会自动找index
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  //简写
  //实际：router:router
  render: h => h(App)
}).$mount('#app')
