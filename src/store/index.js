import Vue from 'vue'
import Vuex from 'vuex'
import shop from './shop/index'
import grid from './grid/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop,
    grid
  }
})