import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => {
      return import('../views/Index.vue')
    },
  },
  {
    path: '/discord',
    component: () => {
      return import('../views/media/Discord.vue')
    },
  },
  {
    path: '/unavailable',
    component: () => {
      return import('../views/placeholders/UnderConstruction.vue')
    },
    alias: ["/monetization", "/hosting", "/website", "/analytics", "/community"]
  },
  {
    path: '/vs/:service',
    props: true,
    component: () => {
      return import('../views/Compare.vue')
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
