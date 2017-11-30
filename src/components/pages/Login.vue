<template>
    <form @submit.prevent="login()">
        <input type="text" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <button type="submit">Login</button>
    </form>
</template>

<script>
  export default {
    name: 'Login',
    state: {
      isLoggedIn: localStorage.getItem('token')
    },
    methods: {
      login () {
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        }).then(res => {
          this.$router.push('/')
        })
      }
    },
    data () {
      return {
        // todo need to add check for user admin
        email: '',
        password: ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
