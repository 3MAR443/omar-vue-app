import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import StorePage from '../views/StorePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/store',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: StorePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
