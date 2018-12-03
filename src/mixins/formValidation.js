export default {
  data () {
    return {
      formValid: false
    }
  },
  methods: {
    async runValidations (success = () => {}, error = () => {}) {
      let valid = null

      await this.$validator.validateAll().then(result => {
        valid = result
      })

      valid ? success() : error()
    }
  }
}
