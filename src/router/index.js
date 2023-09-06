import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'

import Honor from '../views/Honor.vue'
import Info from '../views/Info.vue'
import Recruit from '../views/Recruit.vue'
import Home from '../views/Home.vue'

import Login from '../views/Login.vue'
import Join from '../views/Join.vue'

import Clan from '../views/Clan.vue'
import Java from '../views/Java.vue'
import Chain from '../views/Chain.vue'
import Front from '../views/Front.vue'
import Machine from '../views/Machine.vue'

import Test from '../views/Test.vue'

import store from '../store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Main,
        name: 'main',
        redirect: '/home',
        children: [
            {
                path: 'home', component: Home, name: 'home'
            },
            {
                path: 'recruit', component: Recruit, name: 'recruit',
                beforeEnter: (to, from, next) => {
                    store.commit('changeCollapse');
                    // console.log(store.state);
                    next();
                },

            },
            {
                path: 'info', component: Info, name: 'info'
            },
            {
                path: 'honor', component: Honor, name: 'honor'
            },
            {
                path: 'clan', component: Clan, name: 'clan'
            },
            {
                path: 'java', component: Java, name: 'java'
            },
            {
                path: 'chain', component: Chain, name: 'chain'
            },
            {
                path: 'front', component: Front, name: 'front'
            },
            {
                path: 'machine',component:Machine, name:'machine'
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        name: 'login'
    },
    {
        path: '/join',
        name: 'join',
        component: Join,
    },
    {
        path: '/test',
        name: 'test',
        component: Test,
    }
]


const router = new VueRouter({
    routes,
})


// import Cookie from 'js-cookie'
// router.beforeEach((to, from, next) => {
//     const token = Cookie.get('token')
//     // 1.如果访问的是登录页面（无需权限），直接放行
//     if (to.path === '/login' || to.path === '/join') return next()
//     // 2.1如果token为空，强制跳转到登录页面；否则，直接放行
//     if (!token) {
//       return next('/login')
//     }
//     next()
//   })
   



export default router
