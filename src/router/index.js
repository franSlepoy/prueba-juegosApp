
import HomeView from '../views/HomeView.vue'

import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', name: 'Home', component: HomeView },
  {
    path: '/game/:id',
    name: 'GameDetail',
    component: () => import('@/views/GameDetail.vue'),
  }
  
]


export default createRouter({
  history: createWebHistory(),
  routes,
})
