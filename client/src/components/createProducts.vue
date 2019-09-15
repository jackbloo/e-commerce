<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Create Products</v-btn>
      </template>
      <v-form @submit.prevent="addProduct">
        <v-card>
          <v-card-title>
            <span class="headline">Create Product</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Product Name" v-model="name" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Products Stock" type="number" v-model="stock" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Price" required v-model="price"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-file-input
                    show-size
                    label="Image input"
                    type="file"
                    ref="file"
                    v-on:change="handlefileupload($event)"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text type="submit">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-row>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    image: "",
    name: "",
    stock: 0,
    price: ""
  }),
  methods: {
    handlefileupload() {
      let file = event.target.files || event.dataTransfer.files;
      this.image = file[0];
    },
    addProduct() {
      let token = localStorage.getItem("tokenAdmin");
      let formData = new FormData();
      formData.set("image", this.image);
      formData.set("price", this.price);
      formData.set("stock", this.stock);
      formData.set("name", this.name);
      Swal.fire({
        title: "Creating your product...",
        allowOutsideClick: () => !Swal.isLoading()
      });

      axios({
        method: "POST",
        url: "http://35.225.201.56/products/create",
        headers: {
          token
        },
        data: formData
      })
        .then(({ data }) => {
          Swal.close();
          this.dialog = false;
          this.$store.dispatch("getProducts");
          Swal.fire({
            position: "center",
            type: "success",
            title: "Product is successfully submitted",
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(err => {
          Swal.fire({
            position: "center",
            type: "error",
            title: "Product is fail to be submitted",
            showConfirmButton: false,
            timer: 1500
          });
        });
    }
  }
};
</script>