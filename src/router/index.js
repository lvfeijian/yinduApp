import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Login = () => import('../views/login/Login')
const Register = () => import('../views/register/Register')
Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/login'
    },
    {
        path:'/home',
        name: 'Home',
        component:Home,
        meta: {
            TabbarShow: true, // 是否显示底部tabar（导航条）
        }
    },
    {
        path:'/login',
        component:Login,
        meta: {
            TabbarShow: false
        }
    },
    {
        path:'/register',
        component:Register,
        meta: {
            TabbarShow: false
        }
    },
   
]
const router = new VueRouter({
    routes,
    mode:'history'
})
export default router
