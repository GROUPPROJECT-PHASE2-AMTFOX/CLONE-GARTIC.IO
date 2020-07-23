<template>
  <div>
    <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="Username">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { username: this.username })
      this.$router.push({ name: 'Home' })
      localStorage.setItem('username', this.username)
      this.username = ''
    }
  }
}
</script>

<style>

</style>
