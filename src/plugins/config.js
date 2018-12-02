import Vue from 'vue'

function install (Vue, options) {
  Vue.prototype.$config = {
    app_name: process.env.VUE_APP_APP_NAME || 'MY APP NAME'
  }
}

Vue.use(install)
