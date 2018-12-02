<template>
  <div>
    <LeftDrawer :currentUser="currentUser" :show.sync="leftDrawerShow" />

    <v-toolbar app dark :flat="options.flat" color="primary">
      <v-toolbar-side-icon @click.stop="leftDrawerShow=!leftDrawerShow"></v-toolbar-side-icon>

      <v-toolbar-title class="headline text-uppercase">
        {{ normalizedTitle }}
      </v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
import LeftDrawer from './LeftDrawer'

export default {
  name: 'NavBar',
  data () {
    return {
      leftDrawerShow: false,
      rightDrawerShow: false
    }
  },
  computed: {
    normalizedTitle () { return this.options.title || this.$config.app_name },
    currentUser () { return this.$currentUser() },
    options () { return this.$route.meta.NavBar || {} }
  },
  components: {
    LeftDrawer
  }
}
</script>
