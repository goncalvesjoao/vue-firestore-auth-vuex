import List from './views/List.vue'
import Show from './views/Show.vue'

export default [
  {
    path: '/user_profiles',
    name: 'user_profiles',
    component: List,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/user_profiles/me',
    name: 'user_profiles.me',
    component: Show,
    meta: {
      requireAuth: true
    }
  }
]
