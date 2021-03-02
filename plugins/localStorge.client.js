export default function ({ store }) {
  const loggedIn = !!localStorage.getItem('_authToken')
  if (loggedIn) {
    store.dispatch('auth/isLoggedIn')
  }
}
