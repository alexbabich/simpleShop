<template>
    <form @submit.prevent="login()">
        <input type="text" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <button type="submit">Login</button>
    </form>
</template>

<script>
  const user = {
    email: 'try',
    password: '123'
  }

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
        })
        .then(res => {
          if (this.email === user.email && this.password === user.password) {
            this.$router.push('/')
            console.log('login true')
          } else {
            this.$router.push('/login')
            console.log('login error')
          }
        })
      }
    },
    data () {
      return {
        email: '',
        password: '',
        user: user
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
