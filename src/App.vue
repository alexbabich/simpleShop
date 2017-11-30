<template>
  <b-container id="app" class="my-5">
    <h1>My online store</h1>
    <main-menu/>
    <router-view/>
  </b-container>
</template>

<script>
import MainMenu from '@/components/blocks/MainMenu.vue'

export default {
  components: {MainMenu},
  name: 'app'
}
</script>

<style lang="scss">
  @import 'assets/css/general.scss';
</style>
