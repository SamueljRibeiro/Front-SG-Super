import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('src/pages/dashboard/DashboardPage.vue'),
        meta: { title: 'Dashboard' },
      },
      {
        path: 'estoque',
        name: 'estoque',
        component: () => import('src/pages/estoque/EstoquePage.vue'),
        meta: { title: 'Estoque' },
        children: [
          {
            path: '',
            redirect: '/estoque/resumo',
          },
          {
            path: 'resumo',
            name: 'resumo',
            component: () => import('src/pages/estoque/Tabpages/ResumoPage.vue'),
          },
          {
            path: 'cadastro',
            name: 'cadastro',
            component: () => import('src/pages/estoque/Tabpages/CadastroPage.vue'),
          },
          {
            path: 'lojas',
            name: 'lojas',
            component: () => import('src/pages/estoque/Tabpages/LojasPage.vue'),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
