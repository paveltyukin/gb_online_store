import { RouteRecordRaw } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import ProductPage from '@/pages/ProductPage.vue';
import CartPage from '@/pages/CartPage.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/product/:id',
    name: 'ProductPage',
    component: ProductPage,
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
  },
];
