import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/legal/privacy',
    name: 'privacy',
    component: () => import('../views/Legal/Privacy.vue')
  },
  {
    path: '/legal/cookies',
    name: 'cookies',
    component: () => import('../views/Legal/Cookies.vue')
  },
  {
    path: '/legal/terms/website',
    name: 'websiteterms',
    component: () => import('../views/Legal/WebsiteTerms.vue')
  },
  {
    path: '/legal/terms/service',
    name: 'websiteterms',
    component: () => import('../views/Legal/ServiceTerms.vue')
  },
  {
    path: '/features/billing',
    name: 'payperuse',
    component: () => import('../views/Features/PayPerUse.vue')
  },
  {
    path: '/grs',
    name: 'grs',
    component: () => import('../views/Features/PunishmentSystem.vue')
  },
  {
    path: '*',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ToDo.vue')
  },
  {
    path: '/community',
    name: 'community',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Community.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
