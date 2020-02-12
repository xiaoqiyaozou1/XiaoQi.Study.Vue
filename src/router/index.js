import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/Home'
import UserInfo from '@/components/UserInfo/UserInfo'
import RoleInfo from '@/components/Right/RoleInfo'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path:'/',
      name:'Home',
      component:Home,
      redirect: '/HelloWorld',
      children: [
        {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld,
        
        },
        { path: '/UserInfo', component: UserInfo },
        { path: '/RoleInfo', component: RoleInfo }

     ]
    }
  ]
})
