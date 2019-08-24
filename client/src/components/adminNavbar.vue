<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>
        <router-link to="/adminlogin">MC</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>
          <createProducts></createProducts>
        </v-btn>
        <v-btn text>
          <router-link to="/adminHistory">History</router-link>
        </v-btn>
        <v-btn text color="blue darken-1" @click="logouts">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import createProducts from "../components/createProducts";
export default {
  components: {
    createProducts
  },
  methods: {
    logouts() {
      localStorage.removeItem("tokenAdmin");
      Swal.fire({
        position: "center",
        type: "success",
        title: "Goodbye Admin! See You Soon",
        showConfirmButton: false,
        timer: 1500
      });
      this.$router.push('/').catch(err=>{})
    }
  }
};
</script>
<style>
a {
  text-decoration: none;
}
</style>
