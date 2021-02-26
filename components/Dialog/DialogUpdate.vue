<template>
  <div id="modal" class="modal" :class="{'is-active' : dialog}">
    <div class="modal-background" />
    <div class="modal-content">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img :src="user.avatar" :alt="user.first_name" class="is-rounded">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <div class="control field">
                <input v-model="form.first_name" class="input" type="text" placeholder="First Name">
              </div>
              <div class="control field">
                <input v-model="form.last_name" class="input" type="text" placeholder="Last Name">
              </div>
              <div class="control field">
                <input v-model="form.job" class="input" type="text" placeholder="Job">
              </div>
            </div>
            <nav class="level">
              <div class="level-left">
                <button class="level-item button" @click="dialog = false">
                  Cancel
                </button>
                <button class="level-item button is-info" :class="{'is-loading': loading}" @click="loading = true, updateUser(user)">
                  Update
                </button>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="dialog = false" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DialogUpdate',

  data: () => ({
    form: {},
    loading: false
  }),

  computed: {
    ...mapGetters({
      dialogState: 'getEditDialogState',
      user: 'users/getEditedUser'
    }),

    dialog: {
      get () {
        return this.dialogState
      },
      set (val) {
        if (val !== this.dialogState) {
          this.$store.dispatch('editDialog')
        }
      }
    }
  },

  created () {
    this.form = { ...this.user }
  },

  methods: {
    async updateUser (user) {
      try {
        const response = (await this.$axios.put(`/api/users/${user.id}`, { ...this.form })).data
        // Reset User Object
        this.$store.dispatch('users/editConfirmed', response)
        this.$store.dispatch('users/editUser', {})
        // Close Dialog and Reset Loader
        this.dialog = false
        this.loading = false
      } catch (error) {
        const message = await error?.response?.data?.error
        this.$toast.error(message)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-content {
  max-width: 450px;
}
</style>
