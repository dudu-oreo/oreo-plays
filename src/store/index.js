import Vue from 'vue'
import Vuex from 'vuex'

import responsive from './modules/responsive'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    responsive,
  },
})
