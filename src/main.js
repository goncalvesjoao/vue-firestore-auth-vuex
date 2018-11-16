import Vue from 'vue'
import './plugins'
import store from './store'
import router from './router'
import { auth } from '@/api/firebase'
import Application from './views/layouts/Application.vue'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

let vue = null

auth().onAuthStateChanged(currentUser => {
  vue = vue || new Vue({
    router,
    store,
    render: h => h(Application)
  }).$mount('#app')

  store.dispatch('auth/setCurrentUser', currentUser)
})
