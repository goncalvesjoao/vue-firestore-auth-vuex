<template>
  <v-app>
    <DrawerMenu :currentUser="$currentUser()" :show.sync="drawer" />

    <v-toolbar app dark :flat="routeOptions.flatBanner" color="primary">
      <v-toolbar-side-icon @click.stop="drawer=!drawer"></v-toolbar-side-icon>

      <v-toolbar-title class="headline text-uppercase">
        {{ title }}
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import DrawerMenu from './DrawerMenu'

export default {
  name: 'Layout',
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    title () { return this.routeOptions.title || this.$config.app_name },
    routeOptions () { return this.$route.meta || {} }
  },
  components: {
    DrawerMenu
  }
}
</script>
