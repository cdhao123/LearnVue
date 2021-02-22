import Vue from 'vue'
import Vuex from 'vuex'
//使用vuex插件
Vue.use(Vuex)

const moduleA = {
  state:{
    name:'aaa'
  }
}

//创建对象
export default new Vuex.Store({
  //状态
  state: {
    count: 0
  },
  //在mutations里面做同步操作，修改值
  mutations: {
    //定义一些方法 默认会传入state对象
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    incrementCount(state, counter) {
      state.count += counter
    },
    update
  },
  //在actions做异步操作
  actions: {
    // 默认传入context:上下文
    asyncupdate(context){
      setTimeout(()=>{
        context.commit('updateinfo')
      },1000)
    }
  },
  modules: {
    // 可以定义多个模块
    a:moduleA
    // a最后会被加到state中
  },
  getters: {
    power(state) {
      return state.count * state.count
    },
    //定义全局的计算属性,还可以传入第二个参数：getters
    // more20stu(state,getters) {
    //   return getters.more20stu state.students.filter(s => s.age > 20)

    // }
    //返回一个函数
    // moreAgeStu(state) {
    //   return function (age) {
    //     return state.students.filter(s => s.age > age)
    //   }
    // }
  }
})
