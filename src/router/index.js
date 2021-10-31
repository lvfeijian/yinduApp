import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Login = () => import('../views/login/Login')
const Register = () => import('../views/register/Register')

//解决Vue中重复点击相同路由控制台报错问题
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

Vue.use(VueRouter)

const routes = [
    {
        path:'*',
        redirect:'/login'
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
            keepAlive: true,
            scrollTop: 0
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
	  path: '/member',
	  name: 'Member',
	  component: () => import( '../views/member/Member'),
	},
    {
        path: '/announcement',
        name: 'Announcement',
        component: () => import( '../views/announcement/Announcement'),
        meta: {
            keepAlive: true,
            scrollTop: 0
        },
    },
    {
        path: '/announcementDetail',
        name: 'AnnouncementDetail',
        component: () => import( '../views/announcementDetail/AnnouncementDetail'),
    },
    {
        path: '/appDownload',
        name: 'AppDownload',
        component: () => import( '../views/appDownload/AppDownload'),
    },
    {
        path: '/modifyPassword',
        name: 'ModifyPassword',
        component: () => import( '../views/modifyPassword/ModifyPassword'),
    },
    {
        path: '/bankCard',
        name: 'BankCard',
        component: () => import( '../views/bankCard/BankCard'),
    },
    {
        path: '/card',
        name: 'Card',
        component: () => import( '@/views/card/Card'),
    },
    {
        path: '/taskDetail',
        name: 'TaskDetail',
        component: () => import( '../views/taskDetail/TaskDetail'),
    },
    {
        path: '/myLevel',
        name: 'MyLevel',
        component: () => import( '../views/myLevel/MyLevel'),
    },
   
]
const router = new VueRouter({
    routes,
    mode:'history'
})
//路由导航守卫
router.beforeEach((to,from,next) => {
    // if(from.meta.keepAlive) {
    //     const list = document.querySelector('.list');
    //     const scrollTop = list ? list.scrollTop : 0;
    //     from.meta.scrollTop = scrollTop;
    // }
    if(to.path === '/login' || to.path === '/404' || to.path=== '/register') return next()
    const token = window.sessionStorage.getItem('token')
    if(!token)
    return next('/login')
    next()
})
export default router
