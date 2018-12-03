import Vue from 'vue'

import './vuetify'
import './firestore'
import './vue-router'
import './vee-validate'

import store from '../store'

function install (Vue, options) {
  Vue.prototype.$config = {
    app_name: process.env.VUE_APP_APP_NAME || 'MY APP NAME'
  }

  Vue.prototype.$currentUser = () => store.getters['auth/currentUser']
}

Vue.use(install)
