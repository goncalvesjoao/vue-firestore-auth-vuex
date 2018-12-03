import VueRouter from 'vue-router'

import App from './components/App'
import Auth from './components/Auth'
import UserProfiles from './components/UserProfiles'

export default new VueRouter({
  mode: 'history',
  routes: [
    ...App.routes,
    ...Auth.routes,
    ...UserProfiles.routes
  ]
})
