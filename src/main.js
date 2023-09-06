import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'
import store from './store'

import "animate.css"
import "wowjs/css/libs/animate.css"// 巨坑... 此地方要引入两个css
import wow from 'wowjs'
Vue.prototype.$wow = wow

Vue.use(ElementUI)

Vue.config.productionTip = false

// 添加全局前置导航守卫
// import Cookie from 'js-cookie'
// router.beforeEach((to, from, next) => {
//   const token=Cookie.get('token')
//   if(!token&&to.name!=='login'){
//     console.log(1);
//     next({name:'home'})
//   }else if(token&&to.name===login){
//     next({name:'home'})
//   }else{
//     next()
//   }
// })

// router.beforeEach((to,from,next)=>{
//   const token=Cookie.get('token')
//   if(!token&&to.name!=='login'){
//     console.log(1);
//   }
// })

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
