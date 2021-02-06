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
    meta:{
      title:'首页'
    },
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
    component: about,
    meta:{
      title:'关于'
    }
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


//全局导航守卫,要求传入一个函数
//to和from其实就是route
//前置钩子 ,跳转之前的回调
router.beforeEach((to,from,next)=>{
  next() //一定要调用next
  //从from跳转到to
  document.title = to.matched[0].meta.title
})

//后置钩子,aftereach,不需要回调next
router.afterEach((to,from)=>{

})

//将router对象传入到vue实例中
//先导出
export default router