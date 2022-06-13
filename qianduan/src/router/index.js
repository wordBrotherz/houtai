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
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  /* -------------------------------------------------------------小 */

  {
    path: '/',
    component: Layout,
    redirect: '/workspace',
    salesman: 1,
    children: [
      {
        path: 'workspace',
        name: '首頁',
        component: () => import('@/views/tree/index'),
        meta: { title: '首頁', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/members',
    component: Layout,
    redirect: '/members/list',
    name: '用户列表',
    meta: { title: '用户列表', icon: 'el-icon-s-custom' },
    salesman: 1,
    children: [
      {
        path: 'list',
        name: '用户列表',
        component: () => import('@/views/tree/yonghliebiao'),
        meta: { title: '用户列表', icon: 'el-icon-s-custom' }
      }
    ]
  },

  {
    path: '/chongzhi',
    component: Layout,
    redirect: '/chongzhi/list',
    name: '充值列表',
    meta: { title: '充值列表', icon: 'el-icon-s-custom' },
    salesman: 1,
    children: [
      {
        path: 'list',
        name: '充值列表',
        component: () => import('@/views/tree/chongzhiliebiao'),
        meta: { title: '充值列表', icon: 'el-icon-s-finance' }
      }
    ]
  },

  {
    path: '/tixian',
    component: Layout,
    redirect: '/tixian/list',
    name: '提現列表',
    meta: { title: '提現列表', icon: 'el-icon-s-custom' },
    salesman: 1,
    children: [
      {
        path: 'list',
        name: '提現列表',
        component: () => import('@/views/tree/tixianliebiao'),
        meta: { title: '提現列表', icon: 'el-icon-wallet' }
      }
    ]
  },




  /* -------------------------------------------------------------總 */
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    salesman: 0,
    children: [{
      path: 'dashboard',
      name: '首頁',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首頁', icon: 'dashboard' }
    }]
  },

  {
    path: '/users',
    component: Layout,
    redirect: '/users/list',
    name: '用户列表',
    meta: { title: '用户列表', icon: 'el-icon-s-custom' },
    salesman: 0,
    children: [
      {
        path: 'list',
        name: '用户列表',
        component: () => import('@/views/table/yonghliebiao'),
        meta: { title: '用户列表', icon: 'el-icon-s-custom' }
      }
    ]
  },

  /* 資金明細  */
  {
    path: '/assets',
    component: Layout,
    redirect: '/assets/assets',
    name: '資金明細',
    meta: { title: '資金明細', icon: 'el-icon-wallet' },
    salesman: 0,
    children: [
      {
        path: 'assets',
        name: '資金列表',
        component: () => import('@/views/table/zijinliebiao'),
        meta: { title: '資金列表', icon: 'el-icon-coin' }
      },
      {
        path: 'withdraws',
        name: '提現列表',
        component: () => import('@/views/table/tixianliebiao'),
        meta: { title: '提現列表', icon: 'el-icon-coin' }
      },
      {
        path: 'recharge',
        name: '充值列表',
        component: () => import('@/views/table/chongzhiliebiao'),
        meta: { title: '充值列表', icon: 'el-icon-coin' }
      }
    ]
  },

  /* 礦機管理  */
  {
    path: '/computer',
    component: Layout,
    redirect: '/computer/list',
    name: '礦機管理',
    meta: { title: '礦機管理', icon: 'el-icon-s-platform' },
    salesman: 0,
    children: [
      {
        path: 'list',
        name: '礦機列表',
        component: () => import('@/views/table/kuangjiliebiao'),
        meta: { title: '礦機列表', icon: 'el-icon-coin' }
      },
      {
        path: 'add',
        name: '添加礦機',
        component: () => import('@/views/table/jiakuangji'),
        meta: { title: '添加礦機', icon: 'el-icon-coin' }
      },
      {
        path: 'edit',
        name: '編輯礦機',
        hidden: true,
        component: () => import('@/views/table/gaikuangji'),
        meta: { title: '編輯礦機', icon: 'el-icon-coin' }
      }
    ]
  },

  /* 通知管理  */
  {
    path: '/notice',
    component: Layout,
    redirect: '/notice/list',
    name: '通知管理',
    meta: { title: '通知管理', icon: 'el-icon-message-solid' },
    salesman: 0,
    children: [
      {
        path: 'list',
        name: '通知列表',
        component: () => import('@/views/table/tongzhiliebiao'),
        meta: { title: '通知列表', icon: 'el-icon-coin' }
      },
      {
        path: 'add',
        name: '新增通知',
        component: () => import('@/views/table/jiatongzhi'),
        meta: { title: '新增通知', icon: 'el-icon-coin' }
      },
      {
        path: 'edit',
        name: '編輯通知',
        hidden: true,
        component: () => import('@/views/table/gaitongzhi'),
        meta: { title: '編輯通知', icon: 'el-icon-coin' }
      }
    ]
  },

  /* 業務員管理  */
  {
    path: '/salesman',
    component: Layout,
    redirect: '/salesman/list',
    name: '業務員管理',
    meta: { title: '業務員管理', icon: 'el-icon-s-custom' },
    salesman: 0,
    children: [
      {
        path: 'list',
        name: '業務員列表',
        component: () => import('@/views/table/yewuyuanliebiao'),
        meta: { title: '業務員列表', icon: 'el-icon-coin' }
      },
      {
        path: 'add',
        name: '新增業務員',
        component: () => import('@/views/table/jiayewuyuan'),
        meta: { title: '新增業務員', icon: 'el-icon-coin' }
      }
    ]
  },

  /* 理財項目  */
  {
    path: '/finance',
    component: Layout,
    redirect: '/finance/list',
    name: '理財項目',
    meta: { title: '理財項目', icon: 'el-icon-s-finance' },
    salesman: 0,
    children: [
      {
        path: 'list',
        name: '理財項目列表',
        component: () => import('@/views/table/licailiebiao'),
        meta: { title: '理財項目列表', icon: 'el-icon-coin' }
      },
      {
        path: 'add',
        name: '新增理財項目',
        component: () => import('@/views/table/jialicai'),
        meta: { title: '新增理財項目', icon: 'el-icon-coin' }
      },
      {
        path: 'edit',
        name: '編輯理財項目',
        hidden: true,
        component: () => import('@/views/table/gailicai'),
        meta: { title: '編輯理財項目', icon: 'el-icon-coin' }
      }
    ]
  },

  /* 團隊列表  */
  {
    path: '/teams',
    component: Layout,
    redirect: '/teams/list',
    name: '團隊列表',
    meta: { title: '團隊列表', icon: 'el-icon-user-solid' },
    salesman: 0,
    children: [
      {
        path: 'list',
        name: '團隊列表',
        component: () => import('@/views/table/tuanduiliebiao'),
        meta: { title: '團隊列表', icon: 'el-icon-user-solid' }
      }
    ]
  },

  /* 團隊列表  */
  {
    path: '/ConfigUre',
    component: Layout,
    redirect: '/ConfigUre/list',
    name: '配置列表',
    meta: { title: '配置列表', icon: 'el-icon-user-solid' },
    salesman: 0,
    children: [
      {
        path: 'list',
        name: '配置列表',
        component: () => import('@/views/table/peizhiliebiao'),
        meta: { title: '配置列表', icon: 'el-icon-setting' }
      },
      {
        path: 'edit',
        name: '編輯配置',
        hidden: true,
        component: () => import('@/views/table/gaipeizhi'),
        meta: { title: '編輯配置', icon: 'el-icon-coin' }
      }
    ]
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
