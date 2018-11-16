<template>
  <v-container fluid fill-height>
    <v-layout justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-toolbar dark color="primary">
            <v-toolbar-title>User Profiles</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-progress-circular v-if="loading" :indeterminate="loading" class="right"/>
          </v-toolbar>

          <v-list two-line>
            <template v-for="(userProfile, index) in all">
              <v-list-tile :key="index" avatar>
                <v-list-tile-avatar>
                  <img v-if="userProfile.photoUrl" :src="userProfile.photoUrl">
                  <v-icon v-else>fa-user</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="userProfile.firstName || '-'" />
                  <v-list-tile-sub-title v-html="userProfile.email" />
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
  methods: mapActions('userProfiles', ['getAll']),
  computed: mapGetters('userProfiles', ['all', 'loading'])
}
</script>
