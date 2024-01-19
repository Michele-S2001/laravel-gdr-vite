import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import CharactersIndex from './pages/characters/Index.vue';
import CharacterShow from './pages/characters/Show.vue';
import ItemsIndex from './pages/items/Index.vue';

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
    },
    {
      path: '/items',
      name: 'items.index',
      component: ItemsIndex
    }
  ]
});

export { router };