function getCollection (rootState) {
  return rootState.db.collection('userProfiles')
}

function transformData (payload) {
  return { id: payload.id, ...payload.data() }
}

export default {
  namespaced: true,
  state: {
    all: [],
    loading: false,
    idsVSindex: {}
  },
  mutations: {
    setLoading (state, value) {
      state.loading = value
    },
    set (state, user) {
      if (state.idsVSindex[user.id] !== undefined) {
        state.all[state.idsVSindex[user.id]] = user
      } else {
        state.idsVSindex[user.id] = state.all.push(user) - 1
      }
    }
  },
  actions: {
    create ({ rootState, commit }, { uid, ...data }) {
      commit('setLoading', true)

      const promise = getCollection(rootState).doc(uid).set(data)

      promise
        .then(user => commit('set', transformData(user)))
        .finally(() => commit('setLoading', false))

      return promise
    },
    getAll ({ rootState, commit }) {
      commit('setLoading', true)

      const promise = getCollection(rootState).get()

      promise
        .then(users => {
          users.forEach(user => commit('set', transformData(user)))
        })
        .finally(() => commit('setLoading', false))

      return promise
    }
  },
  getters: {
    loading: ({ loading }) => loading,
    all: ({ all }) => all
  }
}
