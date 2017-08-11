import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Content from '@/components/Content'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/content',
      component: Content
    }
  ]
})
