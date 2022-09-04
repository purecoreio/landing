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
  // products
  {
    path: '/commerce',
    component: () => {
      return import('../views/products/Commerce.vue')
    },
  },
  {
    path: '/hosting',
    component: () => {
      return import('../views/products/Hosting.vue')
    },
  },
  {
    path: '/website',
    component: () => {
      return import('../views/products/Website.vue')
    },
  },
  {
    path: '/analytics',
    component: () => {
      return import('../views/products/Analytics.vue')
    },
  },
  {
    path: '/community',
    component: () => {
      return import('../views/products/Community.vue')
    },
  },
  // vs
  {
    path: '/vs/:service',
    props: true,
    component: () => {
      return import('../views/Compare.vue')
    },
  },
  // placeholders
  {
    path: '/:catchAll(.*)',
    component: () => {
      return import('../views/placeholders/404.vue')
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
