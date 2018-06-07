import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const LoginIndex = resolve => require(['@/pages/LoginIndex.vue'], resolve)
const MoKe = resolve => require(['@/pages/MoKe.vue'], resolve)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginIndex',
      component: LoginIndex
    },
    {
      path: '/moke',
      name: 'moke',
      component: MoKe
    },
    {
      path: '/dialog',
      component: resolve => require(['@/pages/DialogVue.vue'], resolve)
    },
    {
      path: '/select',
      component: resolve => require(['@/pages/SelectVue.vue'], resolve)
    }
  ]
})
