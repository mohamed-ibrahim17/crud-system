export default function ({ redirect, store }) {
  const loggedIn = store.getters['auth/loggedIn']
  // If user is logged in
  if (loggedIn) {
    return redirect('/')
  }
}
