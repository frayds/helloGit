import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/children/login'
import info from '@/components/children/info'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld,
      // children:[
      //   { 
      //     path: 'login', 
      //     name:'login',
      //     component: Login 
      //   }
      // ]
    },
    { 
      path: '/',
      name:'main'
    },
    { 
      path: '/login', 
      name:'login',
      component: Login 
    },
    { 
      path: '/info', 
      name:'info',
      component: info 
    }
  ]
})
