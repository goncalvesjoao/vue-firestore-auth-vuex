<template>
  <v-navigation-drawer v-model="showComputed" fixed clipped app>
    <v-toolbar flat color="grey lighten-4" v-if="currentUser">
      <v-list dense>
        <v-list-tile avatar ripple class="pa-0">
          <v-list-tile-avatar>
            <img v-if="currentUser.photoUrl" :src="currentUser.photoUrl">

            <v-btn v-else icon disabled color="grey lighten-2">
              <v-icon color="grey darken-1">person</v-icon>
            </v-btn>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ currentUser.email | truncate(25) }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-menu bottom left>
              <v-btn slot="activator" icon>
                <v-icon color="grey darken-1">settings</v-icon>
              </v-btn>

              <v-list>
                <v-list-tile :to="{ name: 'user_profiles.me' }">
                  <v-list-tile-title>Profile</v-list-tile-title>
                </v-list-tile>

                <v-list-tile :to="{ name: 'auth.account' }">
                  <v-list-tile-title>Account</v-list-tile-title>
                </v-list-tile>

                <v-divider />

                <v-list-tile :to="{ name: 'auth.log_out' }">
                  <v-list-tile-title>Log out</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-toolbar flat color="grey lighten-4" v-else>
      <v-layout justify-space-between row>
        <v-btn flat :to="{ name: 'auth.log_in' }">Log In</v-btn>
        <v-btn flat :to="{ name: 'auth.sign_up' }">Sign Up</v-btn>
      </v-layout>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list>
      <v-list-tile
        v-for="(item, index) in visibleItems"
        :key="index"
        :to="item.to"
        :exact="item.exact"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ item.text }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'DrawerMenu',
  props: ['title', 'show', 'currentUser'],
  data () {
    return {
      items: [
        {
          icon: 'home',
          text: 'Home',
          to: { name: 'home' },
          exact: true
        },
        {
          icon: 'group',
          text: 'User Profiles',
          to: { name: 'user_profiles' },
          requireAuth: true
        }
      ]
    }
  },
  computed: {
    visibleItems () {
      return this.items.filter(item => {
        return !item.requireAuth || (item.requireAuth && this.currentUser)
      })
    },
    showComputed: {
      get () { return this.show },
      set (show) { this.$emit('update:show', show) }
    }
  }
}
</script>
