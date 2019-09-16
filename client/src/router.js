import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import home from './views/home.vue'
import register from './views/register.vue'
import products from './views/products.vue'
import admin from './views/admin.vue'
import adminlogin from './views/adminlogin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/products',
      name: 'products',
      component: products,
      children: [{
        path: ':id',
        name: 'oneProduct',
        component: () => import(/* webpackChunkName: "oneProduct" */ './views/oneProduct.vue'),
      }]
    },
    {
      path: '/adm1n',
      name: 'admin',
      component: admin,
    },
    {
      path: '/adminlogin',
      name: 'adminlogin',
      component: adminlogin,
    },
    {
      path: '/tablecart',
      name: 'tablecart',
      component: () => import(/* webpackChunkName: "tablecart" */ './views/tablecart.vue'),
    }
  ]
})
