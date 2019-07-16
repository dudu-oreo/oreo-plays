import Vue from 'vue'
import Vuex from 'vuex'

import responsive from './modules/responsive'
import trackInfo from './modules/trackInfo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    responsive,
    trackInfo,
  },
})
