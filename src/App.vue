<template>
  <b-container id="app" class="my-5">
    <section>
      <router-link to="/">Home</router-link>
      <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
      <a href="#" v-if="isLoggedIn" @click="logout">Logout</a>
    </section>
    <main-menu/>
    <h1>My online store</h1>
    <router-view/>
  </b-container>
</template>

<script>
  import Vuex from 'vuex'
  import MainMenu from '@/components/blocks/MainMenu.vue'

  export default {
    components: {MainMenu},
    name: 'app',
    computed: {
      ...Vuex.mapGetters(['isLoggedIn'])
    },
    methods: {
      ...Vuex.mapActions(['logout'])
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">
  @import 'assets/css/general.scss';
</style>
