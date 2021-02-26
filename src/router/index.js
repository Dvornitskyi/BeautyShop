import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/TheMakeup',
    name: 'TheMakeup',
    component: () => import('../views/TheMakeup.vue')
  }, 
   {
    path: '/TheHair',
    name: 'TheHair',
    component: () => import('../views/TheHair.vue')
  },
  {
    path: '/TheFace',
    name: 'TheFace',
    component: () => import('../views/TheFace.vue')
  },
  {
    path: '/TheBody',
    name: 'TheBody',
    component: () => import('../views/TheBody.vue')
  },
  {
    path: '/TheMen',
    name: 'TheMen',
    component: () => import('../views/TheMen.vue')
  },
  {
    path: '/TheSets',
    name: 'TheSets',
    component: () => import('../views/TheSets.vue')
  },
  {
    path: '/ThePay',
    name: 'ThePay',
    component: () => import('../views/ThePay.vue')
  },
  {
    path: '/TheDelivery',
    name: 'TheDelivery',
    component: () => import('../views/TheDelivery.vue')
  },
  
  {
    path: '/TheBasket',
    name: 'TheBasket',
    component: () => import('../views/TheBasket.vue')
  },
  {
    path: '/TheProducts',
    name: 'TheProducts',
    component: () => import('../views/TheProducts.vue')
  },
  {
    path: '/product1',
    name: 'product1',
    component: () => import('../views/product1.vue')
  },
  {
    path: '/product2',
    name: 'product2',
    component: () => import('../views/product2.vue')
  },
  {
    path: '/product3',
    name: 'product3',
    component: () => import('../views/product3.vue')
  },
  {
    path: '/product4',
    name: 'product4',
    component: () => import('../views/product4.vue')
  },
  {
    path: '/product5',
    name: 'product5',
    component: () => import('../views/product5.vue')
  },
  {
    path: '/product6',
    name: 'product6',
    component: () => import('../views/product6.vue')
  },
  {
    path: '/product7',
    name: 'product7',
    component: () => import('../views/product7.vue')
  },
  {
    path: '/product8',
    name: 'product8',
    component: () => import('../views/product8.vue')
  },
  {
    path: '/product9',
    name: 'product9',
    component: () => import('../views/product9.vue')
  },
  {
    path: '/product10',
    name: 'product10',
    component: () => import('../views/product10.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
