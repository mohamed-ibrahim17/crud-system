export default function ({ redirect, store }) {
  const loggedIn = store.getters['auth/loggedIn']
  // If user not logged in
  if (!loggedIn) {
    return redirect('/login')
  }
}
