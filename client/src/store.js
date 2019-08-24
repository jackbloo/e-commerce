import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    GETPRODUCTS(state, payload) {
      state.products = payload
    }
  },
  actions: {
    getProducts({
      commit
    }) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
          token: localStorage.getItem('tokenAdmin')
        }
      }).then(({
        data
      }) => {
        let products = data.data
        commit('GETPRODUCTS', products)
      }).catch(err => {

      })
    },
    deleteItem(context, payload) {
      let id = payload
      let token = localStorage.getItem("tokenAdmin");
      axios({
          method: "DELETE",
          url: `http://localhost:3000/${id}`,
          headers: {
            token
          }
        }).then(({
          data
        }) => {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          this.getProducts()
        })
        .catch(err => {
          Swal.fire("Error!", "Your file has not been deleted.", "error");
        })
    }
  }
})

export default store;
