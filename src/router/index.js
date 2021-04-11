import { createRouter, createWebHistory } from 'vue-router';
import Loading from '../views/Loading.vue';
import NotFound from '../views/NotFound.vue';

const AsyncComponent = (path, name, cb) => ({
  path: `/${path}`,
  name,
  component: cb,
  loading: Loading,
  error: NotFound,
  delay: 200,
  timeout: 7000,
});

const routes = [
  AsyncComponent('', 'Home', () => import('../views/Home.vue')),
  AsyncComponent('help', 'Help', () => import('../views/Help.vue')),
  AsyncComponent('pets', 'Pets', () => import('../views/PetsPage.vue')),
  AsyncComponent('love', 'TrueLove', () => import('../views/TrueLove.vue')),
  AsyncComponent(':catchAll(.*)', 'NotFound', () => import('../views/NotFound.vue')),
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
