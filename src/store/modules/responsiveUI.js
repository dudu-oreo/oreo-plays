const state = {
  appWidth: 0,
  appHeight: 0,
}

const actions = {
  getResponsiveReady({ commit }, { width, height }) {
    commit('setAppSize', { width, height })
  },
}

const mutations = {
  setAppSize(state, { width, height }) {
    state.appWidth = width
    state.appHeight = height
  },
}


export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
