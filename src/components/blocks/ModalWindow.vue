<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    <h5 class="modal-title">Shopping cart</h5>
                </div>
                <div class="modal-body m-0">
                    <table class="table">
                        <tbody>
                            <tr v-for="(item, index) in cartItem" :key="item.id">
                                <td>{{ item.name }}</td>
                                <td>{{ item.price | dollars }}</td>
                                <td>
                                    <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>{{ cartTotal | dollars }}</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div class="modal-footer row justify-content-center">
                    <slot name="footer">
                        <button class="btn btn-secondary" @click="$emit('close')">Keep shopping</button>
                        <button class="btn btn-primary">Check out</button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import filters from '@/filters'

  export default {
    name: 'ModalWindow',
    filters,
    props: ['cartItem', 'cartTotal'],
    methods: {
      removeFromCart (index) {
        this.$store.dispatch('removeFromCart', index)
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
