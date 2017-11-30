import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'

export default new Vuex.Store({
  state: {
    isLoggedIn: localStorage.getItem('token'),
    forSale: [
      { invId: 1, name: 'An Item', image: '//placehold.it/200', price: 999 },
      { invId: 2, name: 'Thing', image: '//placehold.it/200', price: 1499 },
      { invId: 3, name: 'Doo-dad', image: '//placehold.it/200', price: 499 },
      { invId: 4, name: 'Other thing', image: '//placehold.it/200', price: 299 }
    ],
    inCart: []
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
    isLoggedIn: state => state.isLoggedIn
  },
  mutations: {
    LOGIN (state) {
      state.pending = true
    },
    LOGIN_SUCCESS (state) {
      state.isLoggedIn = true
      state.pending = false
    },
    LOGOUT (state) {
      state.isLoggedIn = false
    },
    ADD_TO_CART (state, invId) {
      state.inCart.push(invId)
    },
    REMOVE_FROM_CART (state, index) {
      state.inCart.splice(index, 1)
    }
  },
  actions: {
    login ({state, commit, rootState}, creds) {
      console.log('login...', creds)
      commit(LOGIN)
      return new Promise(resolve => {
        setTimeout(() => {
          localStorage.setItem('token', 'JWT')
          commit(LOGIN_SUCCESS)
          resolve()
        }, 1000)
      })
    },
    logout ({commit}) {
      localStorage.removeItem('token')
      commit(LOGOUT)
    },
    addToCart (context, invId) {
      context.commit('ADD_TO_CART', invId)
    },
    removeFromCart (context, index) {
      context.commit('REMOVE_FROM_CART', index)
    }
  }
})
