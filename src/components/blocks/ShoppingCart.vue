<template>
    <div>
        <button class="btn btn-primary" @click="showModal = true">Cart ({{ numInCart }})</button>
        <modal-window v-if="showModal" @close="showModal = false" :cartItem="cart" :cartTotal="total" />
    </div>
</template>

<script>
  import ModalWindow from './ModalWindow.vue'
  import filters from '@/filters'

  export default {
    components: {ModalWindow},
    name: 'shoppingCart',
    component: {
      ModalWindow
    },
    filters,
    computed: {
      inCart () {
        return this.$store.getters.inCart
      },
      numInCart () {
        return this.inCart.length
      },
      cart () {
        return this.$store.getters.inCart.map((cartItem) => {
          return this.$store.getters.forSale.find((forSaleItem) => {
            return cartItem === forSaleItem.invId
          })
        })
      },
      total () {
        return this.cart.reduce((acc, cur) => acc + cur.price, 0)
      }
    },
    data () {
      return {
        showModal: false
      }
    }
  }
</script>