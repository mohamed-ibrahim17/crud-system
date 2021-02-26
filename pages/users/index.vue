<template>
  <div class="container is-max-desktop">
    <!-- Panel Card -->
    <div class="panel is-link mt-6">
      <!-- Panel Heading -->
      <div class="panel-heading is-flex is-justify-content-space-between is-align-content-center">
        <!-- Title -->
        <span class="mt-2 mr-5">
          Customers
        </span>
        <div class="is-flex is-align-content-center">
          <!-- Search Controle -->
          <div class="control has-icons-left mr-3">
            <input v-model="search" class="input is-success" type="text" placeholder="Search by email">
            <span class="icon is-left">
              <i class="fas fa-search" aria-hidden="true" />
            </span>
          </div>
          <!-- Pager -->
          <LazyGlobalPager :pager="pager" />
        </div>
      </div>
      <template v-if="filteredUsers && filteredUsers.length > 0">
        <div v-for="(user, index) in filteredUsers" :key="index" class="card panel-block">
          <div class="card-content py-3">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img class="is-rounded" :src="user.avatar" :alt="user.first_name">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">
                  {{ `${user.first_name} ${user.last_name}` }}
                </p>
                <p class="subtitle is-6">
                  {{ user.email }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="notification is-warning is-light">
          Sorry, there're no records match your search!
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Customers',
  async asyncData ({ $axios, store }) {
    const page = store.getters.getActivePage
    const { data: users, support, ...pager } = await $axios.$get('/api/users', {
      params: {
        page
      }
    })
    return {
      users,
      pager
    }
  },

  data: () => ({
    search: null
  }),

  computed: {
    ...mapGetters({
      page: 'getActivePage'
    }),

    filteredUsers () {
      if (this.search) {
        return this.users.filter((user) => {
          return this.search.toLowerCase().split(' ').every(v => user.email.toLowerCase().includes(v))
        })
      } else {
        return this.users
      }
    }
  },

  watch: {
    page () {
      this.$nuxt.refresh()
    }
  }
}
</script>

<style>

</style>
