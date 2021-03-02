export const state = () => ({
  user: null,
  loggedIn: false,
  token: null
})

export const mutations = {
  SET_LOGIN_STATE (state, loggedIn) {
    state.loggedIn = loggedIn
  },

  SET_USER_DATA (state, user) {
    state.user = user
  },

  SET_TOKEN (state, token) {
    state.token = token
  }
}

export const actions = {
  isLoggedIn ({ commit, dispatch, state }) {
    dispatch('getToken')
    const loggedIn = !!state.token
    commit('SET_LOGIN_STATE', loggedIn)
  },

  setUser ({ commit }, payload) {
    commit('SET_USER_DATA', payload)
  },

  setToken ({ commit }, token) {
    commit('SET_TOKEN', token)
    localStorage.setItem('_authToken', token)
    commit('SET_LOGIN_STATE', true)
  },

  getToken ({ commit }) {
    const token = localStorage.getItem('_authToken') || ''
    commit('SET_TOKEN', token)
  },

  logout ({ commit }) {
    localStorage.removeItem('_authToken')
    commit('SET_TOKEN', null)
    commit('SET_LOGIN_STATE', false)
    this.$router.push({ path: '/' })
  }
}

export const getters = {
  user: state => state.user,
  loggedIn: state => state.loggedIn,
  token: state => state.token
}
