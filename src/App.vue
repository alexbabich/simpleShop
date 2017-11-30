<template>
  <b-container id="app" class="my-5">
    <main-menu/>
    <h1>My online store</h1>
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
