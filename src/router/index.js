import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () =>
      import('@/views/Home/index')
  },
  {
    path: '/user',
    component: () => import('@/components/User/index')
  },
  {
    path: '/login',
    component: () => import('@/components/User/login/index')
  }
]

const router = new VueRouter({
  routes
})

export default router