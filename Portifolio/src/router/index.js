import { createRouter, createWebHistory } from 'vue-router'
import AboutMeView from '../views/AboutMeView.vue'
import ContactView from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-me',
      name: 'aboutMe',
      component: AboutMeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ],
})
export default router

