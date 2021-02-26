<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="navbar navigation">
    <div class="container">
      <div class="navbar-menu is-active is-flex is-justify-content-space-evenly">
        <div class="navbar-start is-flex">
          <nuxt-link to="/" exact class="navbar-item">
            Home
          </nuxt-link>

          <nuxt-link to="/users" exact class="navbar-item">
            Customers
          </nuxt-link>
        </div>

        <div class="navbar-end is-flex">
          <nuxt-link to="/login" class="navbar-item">
            Log in
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'LayoutNavbar'
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
