import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    carts: [],
    histories: [],
    adHistories: []
  },
  mutations: {
    GETPRODUCTS(state, payload) {
      state.products = payload
    },
    GETCART(state, payload) {
      state.carts = payload
    },
    GETHIST(state,payload){
      state.histories = payload
    },
    GETALL(state,payload){
      state.adHistories = payload
    }
  },
  actions: {
    getAllHist({commit}){
      let token = localStorage.getItem('tokenAdmin')
      axios({
        method:'GET',
        url:'http://35.225.201.56/transaction/',
        headers: {
          token
        }
      }).then(({data})=>{
        commit('GETALL',data.data)
      }).catch(err => {
        console.log(err)
      })
    },
    getHist({commit}){
      let token = localStorage.getItem('access_token')
      axios({
        method:'GET',
        url: 'http://35.225.201.56/transaction/one',
        headers: {
          token
        }
      }).then(({data}) => {
        commit('GETHIST', data.data)
      }).catch(err =>{
        console.log(err)
      })
    },
    getProducts({
      commit
    }) {
      let token;
      if (localStorage.getItem("tokenAdmin")) {
        token = localStorage.getItem("tokenAdmin")
      } else {
        token = localStorage.getItem("access_token")
      }
      axios({
        method: 'GET',
        url: 'http://35.225.201.56/products',
        headers: {
          token
        }
      }).then(({
        data
      }) => {
        let products = data.data
        commit('GETPRODUCTS', products)
      }).catch(err => {
        console.log(err)
      })
    },
    deleteItem(context, payload) {
      let id = payload
      let token = localStorage.getItem("tokenAdmin");
      Swal.fire({
        title: 'Deleting your product...',
        allowOutsideClick: () => !Swal.isLoading()
      })
      Swal.showLoading()
      axios({
          method: "DELETE",
          url: `http://35.225.201.56/products/${id}`,
          headers: {
            token
          }
        }).then(({
          data
        }) => {
          Swal.close()
          if (data) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            context.dispatch('getProducts')
          }
        })
        .catch(err => {
          Swal.fire("Error", err.message, "error");
        })
    },
    getCart({
      commit
    }) {
      let token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: 'http://35.225.201.56/carts/',
        headers: {
          token
        }
      }).then(({
        data
      }) => {
        commit('GETCART', data.data)
      }).catch(err => {
        console.log(err)
      })
    },
    addCart(context, payload) {
      let token = localStorage.getItem('access_token')
      let {
        id,
        name,
        price,
        stock
      } = payload
      axios({
        method: 'GET',
        url: `http://35.225.201.56/carts/${id}`,
        headers: {
          token
        }
      }).then(({
        data
      }) => {
        let totalCart = data.data
        if (totalCart.length == 0) {
          Swal.fire({
            title: 'Adding your Cart...',
            allowOutsideClick: () => !Swal.isLoading()
          })
          Swal.showLoading()
          axios({
            method: 'POST',
            url: `http://35.225.201.56/carts/${id}`,
            headers: {
              token
            },
            data: {
              name,
              price,
              stock
            }
          }).then(({
            data
          }) => {
            Swal.close()
            Swal.fire("Success", 'Your Cart is Created', "success");
            context.dispatch('getCart')
          })
        } else {
          Swal.close()
          Swal.fire("Error", 'You already have the same product in your cart!', "error");
        }
      }).catch(err => {
        Swal.close()
        Swal.fire("Error", 'Cart is failed to be created', "error");
      })
    }
  }
})

export default store;
