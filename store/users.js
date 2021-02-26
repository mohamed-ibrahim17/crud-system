export const state = () => ({
  user: {},
  fetchedUsers: null,
  dialog: false
})

export const mutations = {
  SET_USERS (state, response) {
    state.fetchedUsers = response
  },

  DELETED_USER (state, user) {
    state.user = user
  },

  EDITED_USER (state, user) {
    state.user = user
  },

  REMOVE_USER (state, id) {
    state.fetchedUsers.users = state.fetchedUsers.users.filter(user => user.id !== id)
  },

  UPDATE_USER (state, payload) {
    const index = state.fetchedUsers.users.findIndex(user => user.id === payload.id)
    state.fetchedUsers.users[index] = payload
  }
}

export const actions = {
  async fetchUsers ({ commit, rootGetters }) {
    const page = rootGetters.getActivePage
    const { data: users, support, ...pager } = await this.$axios.$get('/api/users', {
      params: {
        page
      }
    })
    commit('SET_USERS', {
      users, pager
    })
  },

  editUser ({ commit }, payload) {
    commit('EDITED_USER', payload)
  },

  deleteUser ({ commit }, payload) {
    commit('DELETED_USER', payload)
  },

  deleteConfirmed ({ commit }, id) {
    commit('REMOVE_USER', id)
    // Toast message
    this.$toast.success('User Deleted Successfuly', { icon: 'fa-check' })
  },

  editConfirmed ({ commit }, payload) {
    commit('UPDATE_USER', payload)
    // Toast message
    this.$toast.success('User Updated Successfuly', { icon: 'fa-check' })
  }
}

export const getters = {
  getFetchedUsers: state => state.fetchedUsers,
  getDeletedUser: state => state.user,
  getEditedUser: state => state.user
}
