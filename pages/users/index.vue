<template>
  <div class="container is-max-desktop pt-6">
    <!-- Delete User Dialog -->
    <LazyDialogDelete v-if="deleteDialogState" />
    <!-- Update User Dialog -->
    <LazyDialogUpdate v-if="editDialogState" />

    <!-- Panel Card -->
    <div class="panel is-link mt-5 m-3">
      <!-- Panel Heading -->
      <div class="panel-heading is-flex is-justify-content-space-between is-align-content-center">
        <!-- Title -->
        <span class="mt-2 mr-5">
          Customers
        </span>
        <div class="is-flex is-align-content-center panel-heading__utils">
          <!-- Search Controle -->
          <div class="control has-icons-left mr-3">
            <input v-model="search" class="input is-success" type="text" placeholder="Search by email">
            <span class="icon is-left">
              <i class="fas fa-search" aria-hidden="true" />
            </span>
          </div>
          <!-- Pager -->
          <LazyGlobalPager v-if="pager" :pager="pager" />
        </div>
      </div>
      <!-- Check If users -->
      <template v-if="filteredUsers && filteredUsers.length > 0">
        <!-- User Card -->
        <div v-for="(user, index) in filteredUsers" :key="index" class="card panel-block">
          <div class="card-content py-3" :style="{width: '100%'}">
            <div class="media">
              <!-- User image -->
              <div class="media-left">
                <figure class="image is-48x48">
                  <img class="is-rounded" :src="user.avatar" :alt="user.first_name">
                </figure>
              </div>
              <!-- User Name and EMail -->
              <div class="media-content">
                <p class="title is-4">
                  {{ `${user.first_name} ${user.last_name}` }} <small v-if="user.job">| {{ user.job }}</small>
                </p>
                <p class="subtitle is-6">
                  {{ user.email }}
                </p>
              </div>
              <!-- Actions -->
              <div class="media-right is-align-self-center">
                <!-- Edit Button -->
                <button class="button is-primary is-inverted is-small" @click="updateUser(user)">
                  <span class="icon">
                    <i class="fas fa-edit" aria-hidden="true" />
                  </span>
                </button>
                <!-- Delete Button -->
                <button class="button is-danger is-inverted is-small" @click="deleteUser(user)">
                  <span class="icon">
                    <i class="fas fa-trash-alt" aria-hidden="true" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
      <!-- Show if No results -->
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

  data: () => ({
    search: null
  }),

  async fetch () {
    await this.$store.dispatch('users/fetchUsers')
  },

  computed: {
    ...mapGetters({
      page: 'getActivePage',
      fetchedUsers: 'users/getFetchedUsers',
      editDialogState: 'getEditDialogState',
      deleteDialogState: 'getEditDialogState'
    }),

    users () {
      return this.fetchedUsers?.users
    },

    pager () {
      return this.fetchedUsers?.pager
    },

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
      // this.$nuxt.refresh()
      this.$store.dispatch('users/fetchUsers')
    }
  },

  methods: {
    updateUser (user) {
      this.$store.dispatch('users/editUser', user)
      this.$store.dispatch('editDialog')
    },

    deleteUser (user) {
      this.$store.dispatch('users/deleteUser', user)
      this.$store.dispatch('deleteDialog')
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 480px) {
  .panel {
    .panel-heading {
      flex-direction: column;
      padding: 0.75em;
      .panel-heading__utils {
        margin-top: 1em;
        .control {
          max-width: 170px;
        }
      }
    }
    .panel-block {
      padding: 1em;
      .card-content {
        padding: 0;
      }
    }
  }
}
</style>
