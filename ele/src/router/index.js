import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import header from '@/components/header/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: header
    }
  ]
})
