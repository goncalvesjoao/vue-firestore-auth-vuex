import AuthLogIn from './views/LogIn.vue'
import AuthLogOut from './views/LogOut.vue'
import AuthSignUp from './views/SignUp.vue'
import AuthAccount from './views/Account.vue'
import AuthRecoverPassword from './views/RecoverPassword.vue'

export default [
  {
    path: '/auth/account',
    name: 'auth.account',
    component: AuthAccount
  },
  {
    path: '/auth/log_in',
    name: 'auth.log_in',
    component: AuthLogIn,
    meta: {
      flatBanner: true
    }
  },
  {
    path: '/auth/sign_up',
    name: 'auth.sign_up',
    component: AuthSignUp,
    meta: {
      flatBanner: true
    }
  },
  {
    path: '/auth/recover_password',
    name: 'auth.recover_password',
    component: AuthRecoverPassword,
    meta: {
      flatBanner: true
    }
  },
  {
    path: '/auth/log_out',
    name: 'auth.log_out',
    component: AuthLogOut
  }
]
