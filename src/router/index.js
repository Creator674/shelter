import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue'),
  },
  {
    path: '/pets',
    name: 'Pets',
    component: () => import('../views/PetsPage.vue'),
  },
  {
    path: '/love',
    name: 'TrueLove',
    component: () => import('../views/TrueLove.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
