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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "TheMakeup" */ '../views/TheMakeup.vue')
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
