import AuthLogIn from '@/views/auth/LogIn.vue'
import AuthSignUp from '@/views/auth/SignUp.vue'

export default [
  { path: '/auth/log_in', name: 'auth.log_in', component: AuthLogIn },
  { path: '/auth/sign_up', name: 'auth.sign_up', component: AuthSignUp }
]
