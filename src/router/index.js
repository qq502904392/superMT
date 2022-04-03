import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/home',
    component: () =>
      import('@/views/Home/index')
  },
  {
    path: '/user',
    component: () => import('@/views//User/index')
  },
  {
    path: '/login',
    component: () => import('@/views/User/login/index')
  }
]

const router = new VueRouter({
  routes
})

export default router