import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ],
  scrollBehavior (to, from, savedposition) {
    return { x: 0, y: 0 }
  }
})
