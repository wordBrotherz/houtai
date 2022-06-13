import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/login'),
    hidden: true
  },

  {
    path: '/',
    redirect: '/home',
    hidden: true
  },

  {
    path: '/register',
    component: () => import('@/views/login/register'),
    hidden: true
  },

  {
    path: '/home',
    component: () => import('@/views/login/home'),
    hidden: true
  },

  {
    path: '/assets',
    component: () => import('@/views/login/assets'),
    hidden: true
  },

  {
    path: '/compute/list',
    component: () => import('@/views/login/kuangjiliebiao'),
    hidden: true
  },

  {
    path: '/compute/profile',
    component: () => import('@/views/login/xiagqing'),
    hidden: true
  },

  {
    path: '/assets/wt',
    component: () => import('@/views/login/mingxishouzi'),
    hidden: true
  },

  {
    path: '/teams',
    component: () => import('@/views/login/tuandui'),
    hidden: true
  },


  {
    path: '/teams/members',
    component: () => import('@/views/login/chengyuan'),
    hidden: true
  },

  {
    path: '/teams/yes',
    component: () => import('@/views/login/zuorixinzeng'),
    hidden: true
  },

  {
    path: '/my',
    component: () => import('@/views/login/wode'),
    hidden: true
  },

  {
    path: '/security',
    component: () => import('@/views/login/anquan'),
    hidden: true
  },

  {
    path: '/address',
    component: () => import('@/views/login/dizhi'),
    hidden: true
  },

  {
    path: '/kefu',
    component: () => import('@/views/login/kefu'),
    hidden: true
  },

  {
    path: '/chongzhi',
    component: () => import('@/views/login/yonghuchongzhi'),
    hidden: true
  },

  {
    path: '/tixian',
    component: () => import('@/views/login/tixianshenqing'),
    hidden: true
  },

  {
    path: '/languange',
    component: () => import('@/views/login/yuyanqiehuan'),
    hidden: true
  },


  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
