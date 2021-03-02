export default function ({ redirect, route, store }) {
  // disable in server
  if (process.server) {
    return
  }
  const isAuthedRoute = route.meta[0].auth ?? true
  const loggedIn = store.getters['auth/loggedIn']
  // If user logged in
  if (loggedIn) {
    store.dispatch('auth/isLoggedIn')
    // If user logged in and is not authed route
    if (isAuthedRoute === 'guest') {
      return redirect('/')
    }
  }
  // If user not logged in and is authed route
  if (!loggedIn && isAuthedRoute === true) {
    return redirect('/login')
  }
}
