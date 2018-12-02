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
                  <h2 class="white--text">Sign up</h2>
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
                            v-validate="'required|min:6'"
                            :error-messages="errors.collect('password')"
                            ref="password"
                          ></v-text-field>

                          <v-text-field
                            v-model="confirm_password"
                            append-icon="lock"
                            name="confirm_password"
                            label="Confirm password"
                            type="password"
                            data-vv-name="password"
                            v-validate="'required|confirmed:password'"
                          ></v-text-field>
                        </v-form>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          :disabled="!formValid"
                          :loading="loading"
                          color="primary"
                          @click="submit"
                        >Create</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-hover>

                  <v-layout row wrap class="mt-3">
                    <v-flex xs12 sm6 class="pa-0">
                      <v-btn class="mt-1 mb-0 ml-2 mr-0" flat :to="{ name: 'auth.log_in' }" color="grey darken-1">Already have an account?</v-btn>
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
  name: 'SignUp',
  mixins: [feedback, validateAll],
  data () {
    return {
      email: null,
      loading: null,
      password: null,
      formValid: false,
      confirm_password: null
    }
  },
  watch: {
    currentUser (newValue, oldValue) {
      if (newValue) { this.signUpSuccess() }
    }
  },
  computed: {
    currentUser () { return this.$currentUser() }
  },
  methods: {
    submit () {
      this.validateAll(this.signUp)
    },
    signUp () {
      this.loading = true

      this
        .$store
        .dispatch('auth/signUserUp', {
          email: this.email,
          password: this.password
        })
        .catch(error => {
          this.loading = false

          this.showFeedback('error', error.message)
        })
    },
    signUpSuccess (_user) {
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
