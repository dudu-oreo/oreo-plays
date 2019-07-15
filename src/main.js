import Vue from 'vue'

import './index.less'

import App from './components/App.vue'

import store from './store'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
