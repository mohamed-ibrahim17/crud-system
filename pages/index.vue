<template>
  <div class="container is-max-desktop is-flex is-align-items-center is-justify-content-space-evenly">
    <div class="columns">
      <div class="column">
        <h1 class="title bd-notification is-info has-text-centered">
          Welcome to our CRUD system
        </h1>
        <div class="columns is-mobile has-text-centered">
          <div class="column">
            <!-- Log in Button -->
            <nuxt-link
              v-if="!$auth.loggedIn"
              to="/login"
              class="button is-primary is-outlined"
            >
              Login
            </nuxt-link>
            <!-- Log out Button -->
            <a v-else class="button is-outlined" @click="$auth.logout()">
              Log out
            </a>
          </div>
          <div class="column">
            <!-- Customers Button -->
            <nuxt-link
              to="/users"
              class="button is-link is-outlined"
            >
              Customers
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,

  head () {
    return {
      title: 'Home'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
