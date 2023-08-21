import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'

import Honor from '../views/Honor.vue'
import Info from '../views/Info.vue'
import Recruit from '../views/Recruit.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Main,
        redirect:'/home',
        children: [
            {
                path: 'home', component: Home
            },
            {
                path: 'recruit', component: Recruit
            },
            {
                path: 'info', component: Info
            },
            {
                path: 'honor', component: Honor
            },
        ]
    }
]


const router = new VueRouter({
    routes,
})

export default router
