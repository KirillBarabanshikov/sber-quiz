import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue')
const RatingView = () => import('@/views/RatingView.vue')
const TestView = () => import('@/views/TestView.vue')
const EmailView = () => import('@/views/EmailView.vue')
const FinishView = () => import('@/views/FinishView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/rating',
      name: 'rating',
      component: RatingView,
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
    },
    {
      path: '/email',
      name: 'email',
      component: EmailView,
    },
    {
      path: '/finish',
      name: 'finish',
      component: FinishView,
    },
  ],
})

export default router
