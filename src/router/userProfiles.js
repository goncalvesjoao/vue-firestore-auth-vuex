import List from '@/views/userProfiles/List.vue'

export default [
  {
    path: '/user_profiles',
    name: 'user_profiles',
    component: List,
    meta: {
      requireAuth: true
    }
  }
]
