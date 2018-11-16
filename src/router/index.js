import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import Home from '@/views/home/index.vue'
import userProfiles from './userProfiles'
import auth from './auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    ...userProfiles,
    ...auth
  ]
})

let redirectedPageUrl = null

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!store.getters['auth/currentUser']) {
      redirectedPageUrl = to.fullPath

      return next({ name: 'auth.log_in' })
    }
  }

  next()
})

router.$goToRedirectedPage = () => {
  router.push(redirectedPageUrl || '/')

  redirectedPageUrl = null
}

export default router
