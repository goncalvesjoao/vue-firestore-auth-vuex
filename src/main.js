import Vue from 'vue'
import './plugins'
import store from './store'
import router from './router'
import { auth } from '@/api/firebase'
import Application from './views/layouts/Application.vue'

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
