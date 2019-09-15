<template>
  <div>
    <v-form @submit.prevent="checkout">
      <v-card>
        <div class="produk">
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">Product Name</th>
              </tr>
            </thead>
            <tbody>
              <div v-for="(c,i) in addedCart" :key="i">
                <tr>
                  <td>{{c.productName}}</td>
                  <td>
                    <v-text-field label="Quantity" type="number" min="0" v-model="c.quantity"></v-text-field>
                  </td>
                  <td>
                    <button @click="deleteCart(c._id)" type="button">Delete</button>
                  </td>
                </tr>
              </div>
            </tbody>
          </v-simple-table>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text type="submit">Checkout</v-btn>
          <v-btn color="green darken-1" text @click="closeModal">Later</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
import adminNavbar from "../components/adminNavbar";
import { mapState } from "vuex";
import editProduct from "../components/editProduct";
import Swal from "sweetalert2";
export default {
  components: {
    adminNavbar,
    editProduct
  },
  data() {
    return {
      dialog: false,
      addedCart: []
    };
  },
  computed: mapState(["carts"]),
  methods: {
    closeModal() {
      this.$router.go(-1);
    },
    deleteCart(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          Swal.fire({
            title: "Deleting your cart...",
            allowOutsideClick: () => !Swal.isLoading()
          });
          Swal.showLoading();
          let token = localStorage.getItem("access_token");
          axios({
            method: "DELETE",
            url: `http://35.225.201.56/carts/${id}`,
            headers: {
              token
            }
          })
            .then(({ data }) => {
              Swal.close();
              Swal.fire("Success", "Your Cart is Deleted", "success");
              this.getCartss();
            })
            .catch(err => {
              Swal.fire("error", "Fail to delete your cart", "error");
            });
        }
      });
    },
    getCartss() {
      let token = localStorage.getItem("access_token");
      axios({
        method: "GET",
        url: "http://35.225.201.56/carts/",
        headers: {
          token
        }
      })
        .then(({ data }) => {
          this.addedCart = data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    checkout() {
      let flag = false;
      for (let i = 0; i < this.addedCart.length; i++) {
        if (this.addedCart[i].quantity <= 0) {
          flag = true;
        }
      }
      if (flag) {
        Swal.fire("Sorry", "Quantity must not be 0", "error");
      } else {
        let flag2 = false;
        for (let j = 0; j < this.addedCart.length; j++) {
          if (this.addedCart[j].quantity > this.addedCart[j].productStock) {
            flag2 = true;
          }
        }
        if (flag2) {
          Swal.fire("error", "We dont have enough stock", "error");
        } else {
          let promises = [];
          let token = localStorage.getItem("access_token");
          for (let k = 0; k < this.addedCart.length; k++) {
            let newStock =
              this.addedCart[k].productStock - this.addedCart[k].quantity;
            let id = this.addedCart[k].productId;
            let qPromise = axios({
              method: "PATCH",
              url: `http://35.225.201.56/products/${id}`,
              headers: {
                token
              },
              data: {
                stock: newStock
              }
            });
            promises.push(qPromise);
          }
          return Promise.all(promises)
            .then(data => {
              this.$store.dispatch("getProducts");
              let token = localStorage.getItem("access_token");
              let totalPrice = 0;
              for (let l = 0; l < this.addedCart.length; l++) {
                totalPrice +=
                  this.addedCart[l].quantity *
                  Number(this.addedCart[l].productPrice);
              }
              axios({
                method: "POST",
                url: "http://35.225.201.56/transaction/create",
                headers: {
                  token
                },
                data: {
                  totalPrice
                }
              }).then(({ data }) => {
                let trans = data.data;
                let transactionId = trans._id;
                let promises2 = [];
                Swal.fire({
                  title: "Creating your Cart...",
                  allowOutsideClick: () => !Swal.isLoading()
                });
                Swal.showLoading();
                for (let m = 0; m < this.addedCart.length; m++) {
                  let newQ = this.addedCart[m].quantity;
                  let id = this.addedCart[m]._id;
                  let newPStock =
                    this.addedCart[m].productStock - this.addedCart[m].quantity;
                  let cartPromise = axios({
                    method: "PATCH",
                    url: `http://35.225.201.56/carts/${id}`,
                    headers: {
                      token
                    },
                    data: {
                      checkout_status: true,
                      transactionId,
                      quantity: newQ,
                      productStock: newPStock
                    }
                  });
                  promises2.push(cartPromise);
                }
                return Promise.all(promises2).then(({ data }) => {
                  Swal.close()
                  Swal.fire(
                    "Success",
                    "Your checkout is successfully recorded!",
                    "success"
                  );
                  this.getCartss();
                });
              });
            })
            .catch(err => {
              Swal.fire("error", "There is an error in checkout", "error");
            });
        }
      }
    }
  },
  created() {
    this.$store.dispatch("getCart");
    this.addedCart = this.carts;
  }
};
</script>
<style >
.produk {
  height: 100vh;
}
</style>
