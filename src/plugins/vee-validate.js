import Vue from 'vue'
import VeeValidate from 'vee-validate'

async function validateAll (success = function () {}, error = function () {}) {
  let valid = null

  await this.$validator.validateAll().then(result => {
    valid = result
  })

  valid ? success() : error()
}

function install (Vue, options) {
  Vue.prototype.$validateAll = validateAll

  Vue.use(VeeValidate)
}

Vue.use(install)
