<template>
  <section>
    <div class="row">
      <div class="col-md-3">
        <ShoppingCart />
      </div>
    </div>
    <div class="row">
      <Item
        v-for="item in forSale"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price" />
    </div>
  </section>
</template>

<script>
import ShoppingCart from '@/components/blocks/ShoppingCart.vue'
import Item from '@/components/blocks/Item.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBWzn54IcElO6yWo_hMItXaMgqRnb5o6AI',
    v: '3'
  }
})

export default {
  name: 'MainView',
  components: {
    Item,
    ShoppingCart
  },
  computed: {
    forSale () {
      return this.$store.getters.forSale
    },
    inCart () {
      return this.$store.getters.inCart
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
