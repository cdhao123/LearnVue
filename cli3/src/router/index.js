//配置路由的相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'
//要先导入，才能引用组件
import home from '../components/home'
import about from '../views/About'

//Vue.use(插件)适用插件
Vue.use(VueRouter)

//创建VueRouter对象
//与新建vue实例的操作一致

const routes = [
  //一个映射关系就是一个对象
  {
    //动态路由
    path: '/home/:userid',
    component: home,//如果路径为home，则显示如下组件
  //创建子组件
    children:[
      {
        path:'',
        redirect:'child1'
      },
      {
        path:'child1',//注意此处不需要加/
        component: ()=> import('../components/child1')
      },
      {
        path:'child2',
        component: ()=> import('../components/child2')
      },
      {
        path:'child3',
        component: ()=> import('../components/child3')
      }
    ]
  },
  {
    path: '/about',
    component: about
  },
  {
    path:'',
    //重定向
    redirect:'/home'
    //防止第一次进入页面时不显示home
  },
  {
    path:'/profile',
    component: ()=> import('../components/profile')
  }
]
const router = new VueRouter({
  //routers属性，配置路由和组件之间的对应关系
  //routes:[] 为了方便，写在前面
  routes,
  mode:'history'
  //转换成history模式

})

//将router对象传入到vue实例中
//先导出
export default router