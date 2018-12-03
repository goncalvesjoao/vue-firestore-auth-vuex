import Vue from 'vue'
import Vuex from 'vuex'

import App from './components/App'
import Auth from './components/Auth'
import UserProfiles from './components/UserProfiles'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app: App.store,
    auth: Auth.store,
    userProfiles: UserProfiles.store
  }
})
