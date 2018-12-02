export default {
  data () {
    return {
      feedback: { enable: false, type: 'error', message: '' }
    }
  },
  methods: {
    showFeedback (type, message) {
      this.feedback.enable = true
      this.feedback.type = type
      this.feedback.message = message
    }
  }
}
