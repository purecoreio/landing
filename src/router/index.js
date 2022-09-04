import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/', name: 'home',
    component: () => {
      return import('../views/Index.vue')
    },
  },
  {
    path: '/a', name: 'a',
    component: () => {
      return import('../views/A.vue')
    },
  },
  {
    path: '/b', name: 'b',
    component: () => {
      return import('../views/B.vue')
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
