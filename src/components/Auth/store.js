import { auth } from '@/api/firebase'

export default {
  namespaced: true,
  state: {
    currentUser: null
  },
  mutations: {
    setCurrentUser (state, currentUser) {
      state.currentUser = currentUser
    }
  },
  actions: {
    signUserUp ({ dispatch }, { email, password }) {
      const promise = auth().createUserWithEmailAndPassword(email, password)

      promise
        .then(payload => {
          const { user } = payload

          dispatch('userProfiles/create', {
            uid: user.uid,
            firstName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }, { root: true })
        })
        .catch(() => {})

      return promise
    },
    signUserIn ({ commit }, { email, password }) {
      const promise = auth().signInWithEmailAndPassword(email, password)

      return promise
    },
    signUserInGoogle ({ commit }) {
      const promise = auth().signInWithPopup(new auth.GoogleAuthProvider())

      return promise
    },
    signUserInFacebook ({ commit }) {
      const promise = auth().signInWithPopup(new auth.FacebookAuthProvider())

      return promise
    },
    signUserInGithub ({ commit }) {
      const promise = auth().signInWithPopup(new auth.GithubAuthProvider())

      return promise
    },
    signUserInTwitter ({ commit }) {
      const promise = auth().signInWithPopup(new auth.TwitterAuthProvider())

      return promise
    },
    resetPasswordWithEmail ({ commit }, { email }) {
      const promise = auth().sendPasswordResetEmail(email)

      promise
        .then(() => commit('setCurrentUser', null))
        .catch(() => {})

      return promise
    },
    logUserOut ({ commit }) {
      const promise = auth().signOut()

      return promise
    },
    setCurrentUser ({ commit }, payload) {
      const user = !payload ? null : {
        id: payload.uid,
        name: payload.displayName,
        email: payload.email,
        photoUrl: payload.photoURL
      }

      commit('setCurrentUser', user)
    }
  },
  getters: {
    currentUser: ({ currentUser }) => currentUser
  }
}
