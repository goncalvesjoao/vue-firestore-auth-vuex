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
                  <h2 class="white--text">Log in</h2>
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
                          ></v-text-field>

                          <v-text-field
                            v-model="password"
                            append-icon="lock"
                            name="password"
                            label="Password"
                            type="password"
                            v-validate="'required|min:4'"
                            :error-messages="errors.collect('password')"
                          ></v-text-field>
                        </v-form>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn :disabled="!formValid" :loading="loading" color="primary" @click="submit">Enter</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-hover>

                  <v-layout row wrap class="mt-3">
                    <v-flex xs12 sm6 class="pa-0">
                      <v-btn class="mt-1 mb-0 ml-2 mr-0" flat :to="{ name: 'auth.sign_up' }" color="grey darken-1">Need an account?</v-btn>
                    </v-flex>

                    <v-flex xs12 sm6 class="pa-0 text-xs-left text-sm-right">
                      <v-btn class="mt-1 mb-0 ml-2 mr-0" flat :to="{ name: 'auth.recover_password' }" color="grey darken-1">Forgot your password?</v-btn>
                    </v-flex>
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
  name: 'LogIn',
  mixins: [feedback, validateAll],
  data () {
    return {
      email: null,
      loading: null,
      password: null,
      formValid: false
    }
  },
  watch: {
    currentUser (newValue, oldValue) {
      if (newValue) { this.signInSuccess() }
    }
  },
  computed: {
    currentUser () { return this.$currentUser() }
  },
  methods: {
    submit () {
      this.validateAll(this.signIn)
    },
    signIn () {
      this.loading = true

      this
        .$store
        .dispatch('auth/signUserIn', {
          email: this.email,
          password: this.password
        }).catch(error => {
          this.loading = false

          this.showFeedback('error', error.message)
        })
    },
    signInSuccess (_user) {
      this.$router.$goToRedirectedPage()
    }
  }
}
</script>

<style scoped>
  .card--flex-toolbar {
    margin-top: -124px;
  }
</style>
