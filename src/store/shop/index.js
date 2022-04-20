import {
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '@/api/index.js'
const state = {
  goods: [],
  ratings: [],
  info: {},
  images: {}
}
const mutations = {
  GET_HEADER_IMAG(state, images) {
    state.images = images
  },
  GET_SHOP_GOODS(state, goods) {
    state.goods = goods
  },
  GET_SHOP_RATINGS(state, ratings) {
    state.ratings = ratings
  },
  GET_SHOP_INFO(state, info) {
    state.info = info
  }
}
const actions = {
  getHeaderImag({
    commit
  }, images) {
    commit('GET_HEADER_IMAG', images)
  },
  async getShopGoods({
    commit
  }) {
    let result = await reqShopGoods()
    commit('GET_SHOP_GOODS', result.data)
  },
  async getShopRatings({
    commit
  }) {
    let result = await reqShopRatings()
    commit('GET_SHOP_RATINGS', result.data)
  },
  async getShopInfo({
    commit
  }) {
    let result = await reqShopInfo()
    commit('GET_SHOP_INFO', result.data)
  }
}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters,
}