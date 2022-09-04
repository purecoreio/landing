import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/', name: 'home',
    component: () => {
      return import('../views/Index.vue')
    },
  },
  {
    path: '/discord', name: 'discord',
    component: () => {
      return import('../views/media/Discord.vue')
    },
  },
  {
    path: '/unavailable', name: 'unavailable',
    component: () => {
      return import('../views/placeholders/UnderConstruction.vue')
    },
    alias: ["/monetization", "/hosting", "/website", "/analytics", "/community"]
  },
  {
    path: '/vs/:service', name: 'vs',
    props: true,
    component: () => {
      return import('../views/Compare.vue')
    },
  },
  {
    path: '/:catchAll(.*)', name: '404',
    component: () => {
      return import('../views/placeholders/404.vue')
    },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
