import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import TreeView from '@/views/TreeView.vue'
import GalleryView from '@/views/GalleryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/tree',
      name: 'tree',
      component: TreeView
    },
    {
      path: '/gallery',
      name: 'gallery', 
      component: GalleryView
    },
  ]
})

export default router
