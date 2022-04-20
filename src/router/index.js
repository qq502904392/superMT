import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    component: () =>
      import('@/views/Home/index'),
    meta: {
      show: true,
    }
  },
  {
    path: '/user',
    component: () => import('@/views/User/index'),
    meta: {
      show: true,
    }

  },
  {
    path: '/shop',
    // name: 'shop',
    component: () => import('@/views/Shop/index'),
    meta: {
      show: true,
    },
    children: [{
      path: '/shop/goods',
      name: 'goods',
      component: () => import('@/views/Shop/shopGoods/index')
    }, {
      path: '/shop/ratings',
      name: 'ratings',

      component: () => import('@/views/Shop/shopRatings/index')
    }, {
      path: '/shop/info',
      name: 'info',
      component: () => import('@/views/Shop/shopInfo/index')
    }, {
      path: '/',
      redirect: '/shop/goods'
    }]
  },
  {
    path: '/login',
    component: () => import('@/views/User/login/index')
  },
  {
    path: '/regis',
    component: () => import('@/views/User/Regis/index')
  }

]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return to.meta
  }
})

export default router