import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Login = () => import('../views/login/Login')
const Register = () => import('../views/register/Register')
Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/mine'
    },
    {
        path:'/login',
        component:Login,
        meta: {
            TabbarShow: false, // 是否显示底部tabar（导航条）
        }
    },
    {
        path:'/register',
        component:Register,
        meta: {
            TabbarShow: false
        }
    },
    {
        path:'/home',
        name: 'Home',
        component:Home,
        meta: {
            TabbarShow: true,
        },
    },
    {
        path:'/invite',
        name: 'Invite',
        component:() => import('../views/invite/Invite'),
        meta: {
            TabbarShow: true, // 是否显示底部tabar（导航条）
        }
    },
    {
        path:'/introduce',
        name: 'Introduce',
        component:() => import('../views/introduce/Introduce'),
        meta: {
            TabbarShow: true, // 是否显示底部tabar（导航条）
        }
    },
    {
        path:'/mine',
        name: 'Mine',
        component:() => import('../views/mine/Mine'),
        meta: {
            TabbarShow: true, // 是否显示底部tabar（导航条）
        },
    },
    {
        path:'/purchase',
        name: 'Purchase',
        component:() => import('../views/purchase/Purchase'),
        meta: {
            TabbarShow: false, // 是否显示底部tabar（导航条）
        },
    },
    {
        path:'/team',
        name: 'Team',
        component:() => import('../views/team/Team'),
        meta: {
            TabbarShow: false, // 是否显示底部tabar（导航条）
        },
    },
    {
        path:'/profit',
        name: 'Profit',
        component:() => import('../views/profit/Profit'),
        meta: {
            TabbarShow: false, // 是否显示底部tabar（导航条）
        },
    },
    {
        path:'/wallet',
        name: 'Wallet',
        component:() => import('../views/wallet/Wallet'),
        meta: {
            TabbarShow: false, // 是否显示底部tabar（导航条）
        },
    },
	{
	  path: '/free',
	  name: 'Free',
	  component: () => import( '../views/free/Free'),
	},
	{
	  path: '/task',
	  name: 'Task',
	  component: () => import( '../views/task/Task'),
	},
    {
        path: '/upgradeVip',
        name: 'UpgradeVip',
        component: () => import( '../views/upgradeVip/UpgradeVip'),
    },
    
   
]
const router = new VueRouter({
    routes,
    mode:'history'
})
export default router
