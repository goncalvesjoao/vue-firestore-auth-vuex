export default {
  methods: {
    async validateAll (success = () => {}, error = () => {}) {
      let valid = null

      await this.$validator.validateAll().then(result => {
        valid = result
      })

      valid ? success() : error()
    }
  }
}
