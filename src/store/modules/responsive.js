const state = {
  appHeight: 0,
  appContentHeight: 0,
}

const actions = {
  getResponsiveReady({ commit }, payload) {
    commit('setAppSize', payload)
  },
}

const mutations = {
  setAppSize(state, { appHeight, appContentHeight }) {
    state.appHeight = appHeight
    state.appContentHeight = appContentHeight
  },
}


export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
