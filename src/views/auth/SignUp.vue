<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Sign Up</v-toolbar-title>
          </v-toolbar>

          <v-alert
            :value="!!errorMessage"
            dismissible
            type="error"
          >{{errorMessage}}</v-alert>

          <v-card-text>
            <v-form v-model="formValid">
              <v-text-field
                v-model="email"
                prepend-icon="fa-user"
                name="email"
                label="Email"
                type="email"
                v-validate="'required|email'"
                :error-messages="errors.collect('email')"
              ></v-text-field>

              <v-text-field
                v-model="password"
                prepend-icon="fa-lock"
                name="password"
                label="Password"
                type="password"
                v-validate="'required|min:6'"
                :error-messages="errors.collect('password')"
                ref="password"
              ></v-text-field>

              <v-text-field
                v-model="confirm_password"
                prepend-icon="fa-lock"
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
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      email: null,
      loading: null,
      password: null,
      formValid: false,
      errorMessage: null,
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
      this.$validateAll(this.signUp)
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
          this.errorMessage = error.message
          this.loading = false
        })
    },
    signUpSuccess (_user) {
      this.$router.$goToRedirectedPage()
    }
  }
}
</script>

<style>

</style>
