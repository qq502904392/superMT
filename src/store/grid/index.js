import {
  reqGridList
} from '@/api/index'
const state = {
  gridList: [],
  cellphone: localStorage.getItem('userId')
}
const mutations = {
  GET_GRID_LIST(state, gridList) {
    state.gridList = gridList
  },
  SET_USER_INFO(state, cellphone) {
    state.cellphone = cellphone
  },
  CLEAR_USER_INFO(state) {
    state.cellphone = ''
  }
}
const actions = {
  async getGridList({
    commit
  }) {
    await reqGridList().then((res) => {
      commit('GET_GRID_LIST', res.data)

    })
  },
  setUserInfo({
    commit
  }, cellphone) {
    commit('SET_USER_INFO', cellphone)
    localStorage.setItem('userId', cellphone)
  },
  clearUserInfo({
    commit
  }) {
    commit('CLEAR_USER_INFO', )
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters,
}