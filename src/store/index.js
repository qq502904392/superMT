import Vue from 'vue'
import Vuex from 'vuex'
import {
  reqGridList
} from '@/api/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gridList: []
  },
  mutations: {
    GET_GRID_LIST(state, gridList) {
      state.gridList = gridList
    }
  },
  actions: {
    async getGridList({
      commit
    }) {
      await reqGridList().then((res) => {
        commit('GET_GRID_LIST', res.data)

      })
    }
  },
  modules: {}
})