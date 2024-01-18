import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import CharactersIndex from './pages/characters/Index.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/characters',
      name: 'characters.index',
      component: CharactersIndex
    }
  ]
});

export { router };