import { createRouter, createWebHistory } from 'vue-router'
import AboutMeView from '../views/AboutMeView.vue'
import ContactView from '../views/ContactView.vue'
import MyprojectsView from '../views/MyprojectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:AboutMeView
    }
    ,
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/projects',
      name: 'projects',
      component: MyprojectsView
    }

  ],  
})
export default router

