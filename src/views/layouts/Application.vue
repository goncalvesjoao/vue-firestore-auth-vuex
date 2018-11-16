<template>
  <v-app>
    <NavBar />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './application/NavBar'

export default {
  name: 'Application',
  components: {
    NavBar
  }
}
</script>
