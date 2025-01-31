import { createRouter, createWebHistory } from 'vue-router'

import HomeComponent from "../components/HomeComponent.vue";
import CanvasComponent from "../components/CanvasComponent.vue";
import ToolBarComponent from "../components/ToolBarComponent.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent,
    },
    {
      path: '/canvasComponent',
      name: 'canva',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CanvasComponent,
    },
    {
      path: '/toolBar',
      name: 'toolbar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ToolBarComponent,
    },
  ],
})

export default router
