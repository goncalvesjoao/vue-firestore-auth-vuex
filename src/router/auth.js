import AuthLogIn from '@/views/auth/LogIn.vue'
import AuthLogOut from '@/views/auth/LogOut.vue'
import AuthSignUp from '@/views/auth/SignUp.vue'
import AuthAccount from '@/views/auth/Account.vue'
import AuthRecoverPassword from '@/views/auth/RecoverPassword.vue'

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
      NavBar: {
        flat: true
      }
    }
  },
  {
    path: '/auth/sign_up',
    name: 'auth.sign_up',
    component: AuthSignUp,
    meta: {
      NavBar: {
        flat: true
      }
    }
  },
  {
    path: '/auth/recover_password',
    name: 'auth.recover_password',
    component: AuthRecoverPassword,
    meta: {
      NavBar: {
        flat: true
      }
    }
  },
  {
    path: '/auth/log_out',
    name: 'auth.log_out',
    component: AuthLogOut
  }
]
