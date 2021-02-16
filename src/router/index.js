import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/components/MainPage/MainPage.vue';
import Pets from '@/components/PetsPage/PetsPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'Pets',
    component: Pets,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
