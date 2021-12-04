import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { // 一级路由渲染到根组件中的 router-view
    path: '/',
    component: () => import('@/views/layout/'),
    children: [ // 子路由渲染到父路由的 router-view 中
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home/'),
        meta: { requiresAuth: false }
      },
      {
        path: '/category',
        name: 'category',
        component: () => import('@/views/category/'),
        meta: { requiresAuth: false }
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video/'),
        meta: { requiresAuth: false }
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/cart/'),
        meta: { requiresAuth: false }
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my/'),
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
