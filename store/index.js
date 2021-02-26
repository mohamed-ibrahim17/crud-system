export const state = () => ({
  activePage: 1,
  editDialog: false,
  deleteDialog: false
})

export const mutations = {
  INCREMENT_PAGE (state) {
    state.activePage++
  },

  DECREMENT_PAGE (state) {
    state.activePage--
  },

  TOGGLE_DELETE_DIALOG (state) {
    state.deleteDialog = !state.deleteDialog
  },

  TOGGLE_EDIT_DIALOG (state) {
    state.editDialog = !state.editDialog
  }
}

export const actions = {
  nextPage ({ commit }) {
    commit('INCREMENT_PAGE')
  },

  prevPage ({ commit }) {
    commit('DECREMENT_PAGE')
  },

  deleteDialog ({ commit }) {
    commit('TOGGLE_DELETE_DIALOG')
  },

  editDialog ({ commit }) {
    commit('TOGGLE_EDIT_DIALOG')
  }
}

export const getters = {
  getActivePage: state => state.activePage,
  getEditDialogState: state => state.editDialog,
  getDeleteDialogState: state => state.deleteDialog
}
