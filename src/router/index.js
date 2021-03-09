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
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/produc',
    name: 'produc',
    component: () => import('../views/produc.vue')
  },
  {
    path: '/harvest1',
    name: 'harvest1',
    component: () => import('../views/harvest1.vue')
  },
  {
    path: '/harvest2',
    name: 'harvest2',
    component: () => import('../views/harvest2.vue')
  },
  {
    path: '/harvest3',
    name: 'harvest3',
    component: () => import('../views/harvest3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
