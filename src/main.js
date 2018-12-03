import Vue from 'vue'

import './filters'
import './plugins'

import store from './store'
import router from './router'
import { auth } from '@/api/firebase'
import AppLayout from './components/App/views/Layout.vue'

Vue.config.productionTip = false

let vue = null

auth().onAuthStateChanged(currentUser => {
  vue = vue || new Vue({
    router,
    store,
    render: h => h(AppLayout)
  }).$mount('#app')

  store.dispatch('auth/setCurrentUser', currentUser)
})
