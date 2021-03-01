<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="navbar navigation">
    <div class="container">
      <div class="navbar-menu is-active is-flex is-justify-content-space-evenly">
        <div class="navbar-start is-flex">
          <!-- Home Link -->
          <nuxt-link to="/" exact class="navbar-item">
            Home
          </nuxt-link>
          <!-- Customers Link -->
          <nuxt-link to="/users" exact class="navbar-item">
            Customers
          </nuxt-link>
        </div>

        <div class="navbar-end is-flex is-align-items-center">
          <!-- Log in Button -->
          <nuxt-link v-if="!loggedIn" to="/login" class="navbar-item">
            Log in
          </nuxt-link>
          <template v-else>
            <!-- Logged in User -->
            <span class="is-capitalized mr-2">
              {{ user && user.name }}
            </span>
            <!-- Log out Button -->
            <a class="navbar-item" @click="$store.dispatch('auth/logout')">
              Log out
            </a>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LayoutNavbar',
  computed: {
    ...mapGetters({
      loggedIn: 'auth/loggedIn',
      user: 'auth/user'
    })
  }
}
</script>

<style lang="scss" scoped>
.nuxt-link-active {
  color: #3273dc;
  &:hover {
    background-color: transparent;
  }
}
</style>
