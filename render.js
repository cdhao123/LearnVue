import Vue from 'vue'
import App from './App.vue'
//此处的App是由Vue-template-complier解析成render函数的对象
//Vue-template-complier是开发时依赖
//runtime-only不再需要complier
Vue.config.productionTip = false

new Vue({
    el: '#app',
    // template: '<App/>',
    // components: {
    //     App
    // }
    //携程render函数的形式
    render: function (createElement) {
        //1.手动用createelement创建
        //createElement('标签')
        //创建的标签会替换#app中的
        //createElement('标签',{标签的属性},['标签里面的内容'])
        //createElement('h2',{class:'box'},['Hello world'])
        createElement('h2',{class:'box'},['Hello world',createElement('button',['按钮'])])
        套娃开始
        //2.给createElement传入组件
        return createElement(cpn)

    }
})
    //实际上传来的createElement是个函数

用箭头函数简写，就成了下面的样子
App中的template是由vue-
new Vue({
    render: h => h(App),
}).$mount('#app')
