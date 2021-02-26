export const state = () => ({
  activePage: 1
})

export const mutations = {
  INCREMENT_PAGE (state) {
    state.activePage++
  },

  DECREMENT_PAGE (state) {
    state.activePage--
  }
}

export const actions = {
  nextPage ({ commit }) {
    commit('INCREMENT_PAGE')
  },

  prevPage ({ commit }) {
    commit('DECREMENT_PAGE')
  }
}

export const getters = {
  getActivePage: state => state.activePage
}
