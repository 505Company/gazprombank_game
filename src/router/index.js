import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Map',
    meta: {
      layout: 'default'
    },
    component: () => import('@/pages/MapPage.vue')
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      layout: 'default'
    },
    component: () => import('@/pages/HomePage.vue')
  },
  {
    path: '/match-three',
    name: 'MatchThree',
    meta: {
      layout: 'default'
    },
    component: () => import('@/pages/MatchThreePage.vue')
  },
  {
    path: '/test',
    name: 'Test',
    meta: {
      layout: 'default'
    },
    component: () => import('@/pages/TestPage.vue')
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})