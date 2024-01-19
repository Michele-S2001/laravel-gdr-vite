import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import CharactersIndex from './pages/characters/Index.vue';
import CharacterShow from './pages/characters/Show.vue';

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
    },
    {
      path: '/characters/:id',
      name: 'characters.show',
      props: true,
      component: CharacterShow
    }
  ]
});

export { router };