const state = {
  title: '未知曲目',
  artist: '未知艺术家',
  length: 0,
  time: 0,
  volume: 0,
  paused: false,
}

const actions = {
  updateTrackInfo({ commit }, payload) {
    commit('setTrackInfo', payload)
  }
}

const mutations = {
  setTrackInfo(state, info) {
    for (let field in state) {
      state[field] = info[field]
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
