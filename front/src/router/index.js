import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Shopping from '@/components/shopping'
import Product from '@/components/product'
import Cart from '@/components/cart'
import Details from '@/components/details'
import Login from '@/components/login'
import Register from '@/components/register'
import Mine from '@/components/mine'
import My from "@/components/mymine"
import Intro from "@/components/intro"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,

      children:[
      	{
      		path: 'register',
      		component: Register
      	},
      	{
      		path: 'login',
      		component: Login
      	},
        {
          path: 'my',
          component: My
        },
      	{
      		path:'/mine',
            redirect: '/mine/login'
      	}
      ]
    },
    {
      	path:'/',
        redirect: '/home'
    }
  ]
})
