import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'
import router from '../router'

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

Vue.use(VueRouter)
