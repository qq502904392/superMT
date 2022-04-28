import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css'

import '@/mock/mockServer'

import Vant from 'vant';
import 'vant/lib/index.css';
import 'vant/lib/index.less';
Vue.use(Vant);

import * as API from '@/api/index'
Vue.prototype.$API = API;
Vue.prototype.$bus=new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')