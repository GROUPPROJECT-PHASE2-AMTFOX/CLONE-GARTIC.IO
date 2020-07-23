<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2> ini data {{users}} </h2>
    <button @click.prevent="logout">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      username: localStorage.username
    }
  },
  computed: {
    users () {
      return this.$store.state.users
    }
  },
  methods: {
    logout () {
      this.$router.push({ name: 'Login' })
      localStorage.clear()
    }
  },
  created () {
    this.$store.dispatch('updateUsers')
  }
}
</script>
