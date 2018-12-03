import Vue from 'vue'

function install (Vue, options) {
  Vue.filter('truncate', function (text = '', length = 30, clamp = '...') {
    if (text.length <= length) { return text }

    let truncatedText = text.slice(0, length - clamp.length)

    return truncatedText + clamp
  })
}

Vue.use(install)
