<template>
  <div class="container is-max-desktop is-flex is-align-items-center is-justify-content-space-evenly">
    <form class="box" @submit.prevent="login">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input v-model="form.email" class="input" type="email" placeholder="e.g. eve.holt@reqres.in">
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input v-model="form.password" class="input" type="password" placeholder="cityslicka">
        </div>
      </div>

      <button type="submit" class="button is-primary" :class="{'is-loading' :loading}">
        Sign in
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  meta: {
    auth: 'guest'
  },

  data: () => ({
    form: {},
    loading: false
  }),

  methods: {
    async login () {
      this.loading = true
      try {
        const token = (await this.$axios.post('/api/login', { ...this.form })).data?.token
        this.$store.dispatch('auth/setToken', token)
        this.$toast.success('Welcome Back', { icon: 'fa-heart' })
        this.$router.push({ path: '/users' })
      } catch (error) {
        const message = await error?.response?.data?.error
        this.$toast.error(message, { icon: 'fa-exclamation-circle' })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
}
</style>
