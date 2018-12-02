<template>
    <div>
    <v-toolbar
      dense
      color="primary"
      dark
      extended
    />

    <v-container>
      <v-layout row>
        <v-flex xs12 md8 offset-md2>
          <v-card flat class="card--flex-toolbar" color="transparent">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex xs12>
                  <h2 class="white--text">Recover password</h2>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12>
                  <v-hover>
                    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                      <v-alert v-model="feedback.enable" dismissible :type="feedback.type">{{feedback.message}}</v-alert>

                      <v-card-text>
                        <v-form v-model="formValid">
                          <v-text-field
                            v-model="email"
                            append-icon="email"
                            name="email"
                            label="Email"
                            type="email"
                            v-validate="'required|email'"
                            :error-messages="errors.collect('email')"
                          />
                        </v-form>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn :disabled="!formValid" :loading="loading" color="primary" @click="submit">Send instructions</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-hover>

                  <v-layout justify-space-between class="mt-3">
                    <v-btn flat :to="{ name: 'auth.sign_up' }" color="grey darken-1">Need an account?</v-btn>

                    <v-btn flat :to="{ name: 'auth.log_in' }" color="grey darken-1">Remembered your password?</v-btn>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import feedback from '@/mixins/feedback'
import validateAll from '@/mixins/validateAll'

export default {
  name: 'RecoverPassword',
  mixins: [feedback, validateAll],
  data () {
    return {
      email: null,
      loading: null,
      formValid: false
    }
  },
  computed: {
    currentUser () { return this.$currentUser() }
  },
  methods: {
    submit () {
      this.validateAll(this.recoverPassword)
    },
    recoverPassword () {
      this.loading = true

      this
        .$store
        .dispatch('auth/resetPasswordWithEmail', { email: this.email })
        .then(this.recoverPasswordSuccess)
        .catch(error => {
          this.loading = false

          this.showFeedback('error', error.message)
        })
    },
    recoverPasswordSuccess () {
      this.loading = false

      this.showFeedback('success', 'Instructions have been sent to your email.')
    }
  }
}
</script>

<style scoped>
  .card--flex-toolbar {
    margin-top: -124px;
  }
</style>
