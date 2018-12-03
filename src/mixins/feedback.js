export default {
  data () {
    return {
      feedback: { show: false, loading: false, type: 'error', message: '' }
    }
  },
  methods: {
    showFeedback (type, message) {
      this.feedback.show = true
      this.feedback.type = type
      this.feedback.loading = false
      this.feedback.message = message
    }
  }
}
