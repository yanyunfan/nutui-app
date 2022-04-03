import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: { requiresAuth: false } // 添加额外的自定义数据
  },
  { // 一级路由渲染到根组件中的 router-view
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    children: [ // 子路由渲染到父路由的 router-view 中
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: '/category',
        name: 'category',
        component: () => import('@/views/category/index.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video/index.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/cart/index.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my/index.vue'),
        meta: { requiresAuth: false }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
