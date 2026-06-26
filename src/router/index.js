import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import UserView from '../views/UserView.vue'
import UserDetailView from '../views/UserDetailView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: HomeView,
    },

    {
      path: '/dashboard',
      component: DashboardView,
    },

    {
      path: '/users',
      component: UserView,
    },

    {
      path: '/users/:id',
      name: 'UserDetail',
      component: UserDetailView,
    },

    {
      path: '/about',
      component: AboutView,
    },

    {
      path: '/contact',
      component: ContactView,
    },
  ],
})

export default router