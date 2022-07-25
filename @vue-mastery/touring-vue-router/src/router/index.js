import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/lessons/:number',
      component: () => import('../views/lessons/URLParametersView.vue'),
      props: true, // params as props
      // props: {key: 'value'},
      // props: (route) => ({ key: route.query.key})
    },
    {
      path: '/lessons/3',
      name: 'EventList',
      component: () => import('../views/lessons/PaginationView.vue'),
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
  ],
});

export default router;
