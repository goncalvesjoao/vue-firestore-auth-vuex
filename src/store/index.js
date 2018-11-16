import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import userProfiles from './modules/userProfiles'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    userProfiles
  }
})
