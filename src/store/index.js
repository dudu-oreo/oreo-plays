import Vue from 'vue'
import Vuex from 'vuex'

import responsiveUI from './modules/responsiveUI'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    responsiveUI,
  },
})
