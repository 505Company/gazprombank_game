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
      layout: 'empty'
    },
    component: () => import('@/pages/HomePage.vue')
  },
  {
    path: '/match-three',
    name: 'MatchThree',
    meta: {
      layout: 'game'
    },
    component: () => import('@/pages/MatchThreePage.vue')
  },
  {
    path: '/finish',
    name: 'Finish',
    meta: {
      layout: 'empty'
    },
    component: () => import('@/pages/FinishPage.vue')
  },
  {
    path: '/story/:lvl',
    name: 'Story',
    meta: {
      layout: 'empty'
    },
    component: () => import('@/pages/StoryPage.vue')
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