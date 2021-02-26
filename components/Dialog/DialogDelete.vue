<template>
  <div id="modal" class="modal" :class="{'is-active' : dialog}">
    <div class="modal-background" />
    <div class="modal-content">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img :src="user.avatar" :alt="user.first_name">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ `${user.first_name} ${user.last_name}` }}</strong>
                <br>
                <small>{{ user.email }}</small>
              </p>
            </div>
            <nav class="level">
              <div class="level-left">
                <button class="level-item button" @click="dialog = false">
                  Cancel
                </button>
                <button class="level-item button is-danger" @click="deleteUser(user.id)">
                  DELETE
                </button>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DialogDelete',

  computed: {
    ...mapGetters({
      dialogState: 'getDeleteDialogState',
      user: 'users/getDeletedUser'
    }),

    dialog: {
      get () {
        return this.dialogState
      },
      set (val) {
        if (val !== this.dialogState) {
          this.$store.dispatch('deleteDialog')
        }
      }
    }
  },

  methods: {
    async deleteUser (id) {
      try {
        await this.$axios.delete(`/api/users/${id}`)
        // Reset User Object
        this.$store.dispatch('users/deleteConfirmed', id)
        // Close Dialog
        this.dialog = false
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
