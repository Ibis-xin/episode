import { createRouter, createWebHistory } from 'vue-router'
import routeName from '@/router/routeName'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: routeName.home,
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about/:account',
      name: routeName.about,
      component: () => import('@/views/AboutView.vue'),
      props: true
    }
  ]
})

export { routeName }
export default router
