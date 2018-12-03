<template>
  <v-container fluid text-xs-center>
    <PageTitle title="User Profiles" :loading="loading" @onRefresh="getAll" />

    <v-list two-line>
      <template v-for="(userProfile, index) in all">
        <v-list-tile :key="index" avatar>
          <v-list-tile-avatar>
            <img v-if="userProfile.photoUrl" :src="userProfile.photoUrl">

            <v-btn v-else icon disabled color="grey lighten-2">
              <v-icon color="grey darken-1">person</v-icon>
            </v-btn>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="userProfile.firstName || '-'" />
            <v-list-tile-sub-title v-html="userProfile.email" />
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import PageTitle from '@/components/shared/PageTitle'

export default {
  name: 'List',
  data () {
    return {
      headers: [
        { text: 'ID', align: 'left', value: 'id' },
        { text: 'Name', value: 'firstName' },
        { text: 'Email', value: 'email' },
        { text: 'Photo', value: 'photoUrl' }
      ]
    }
  },
  created () { this.getAll() },
  methods: {
    getAll () {
      this.$store.dispatch('userProfiles/getAll')
    }
  },
  computed: mapGetters('userProfiles', ['all', 'loading']),
  components: {
    PageTitle
  }
}
</script>
