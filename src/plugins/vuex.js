import Vue from 'vue'
import { db } from '@/api/firebase'
import store from '../store'

function install (Vue, options) {
  store.state.db = db

  Vue.prototype.$currentUser = () => store.getters['auth/currentUser']
}

Vue.use(install)
