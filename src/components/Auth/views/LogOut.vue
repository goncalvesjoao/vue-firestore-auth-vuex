<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center column>
      <v-progress-circular :indeterminate="true" color="primary" :size="70" :width="7" />
      <p>loging out...</p>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'LogOut',
  beforeCreate () {
    this
      .$store
      .dispatch('auth/logUserOut')
      .then(() => this.$router.push({ name: 'home' }))
  }
}
</script>

<style>

</style>
