import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'home'
    },
    {
        path:'/home',
        component:()=>import('../views/home/home')
    },
    {
        path:'/cart',
        component:()=>import('../views/cart/cart')
    },
    {
        path:'/category',
        component:()=>import('../views/category/category')
    },
    {
        path:'/profile',
        component:()=>import('../views/profile/profile')
    }
]
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router