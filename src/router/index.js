import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/Home'
import UserInfo from '@/components/UserInfo/UserInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/UserInfo',
      children: [
        { path: '/UserInfo', component: UserInfo }]
    }
  ]
})
