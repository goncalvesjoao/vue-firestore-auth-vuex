<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed clipped app>
      <v-toolbar flat dense>
        <v-list dense>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>fas fa-bars</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>
                APP
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
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

    <v-toolbar app dense>
      <v-toolbar-side-icon @click.stop="drawer=!drawer"></v-toolbar-side-icon>

      <v-toolbar-title class="headline text-uppercase">
        APP
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-if="!currentUser" :to="{ name: 'auth.log_in' }">Log In</v-btn>
        <v-btn flat v-if="!currentUser" :to="{ name: 'auth.sign_up' }">Sign Up</v-btn>

        <v-btn flat icon v-if="currentUser" @click="logOut">
          <v-icon>fas fa-sign-out-alt</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'fa-home',
          text: 'Home',
          to: { name: 'home' },
          exact: true
        },
        {
          icon: 'fa-user-circle',
          text: 'User Profiles',
          to: { name: 'user_profiles' },
          requireAuth: true
        }
      ]
    }
  },
  computed: {
    currentUser () { return this.$currentUser() },
    visibleItems () {
      return this.items.filter(item => {
        return !item.requireAuth || (item.requireAuth && this.currentUser)
      })
    }
  },
  methods: {
    logOut () {
      this
        .$store
        .dispatch('auth/logUserOut')
        .then(() => this.$router.push({ name: 'home' }))
    }
  }
}
</script>
