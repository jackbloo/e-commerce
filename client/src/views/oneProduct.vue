<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" text>Details</v-btn>
      </template>
      <h1 style="text-align:center;">{{onePro.name}}</h1>
      <img :src="onePro.image" alt="gambar" >
      <p style="color:white;text-align:center;">Harga: {{onePro.price}}</p>
      <v-btn color="white" text @click="getout">Close</v-btn>
    </v-dialog>
  </v-row>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    onePro: {}
  }),
  methods: {
    fetchData() {
      const id = this.$route.params.id;
      let token = localStorage.getItem('access_token')
      axios({
        method: "GET",
        url: `http://localhost:3000/products/${id}`,
        headers: {
            token
        }
      })
        .then(({ data }) => {
          this.onePro = data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getout() {
      this.dialog = false;
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.params.id": function() {
        if(this.$route.params.id){
      this.fetchData();
        } 
    }
  }
};
</script>