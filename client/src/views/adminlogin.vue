<template>
  <div>
    <adminNavbar></adminNavbar>
    <div class="produk">
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">Product Name</th>
            <th class="text-left">Image</th>
            <th class="text-left">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="" :key="">
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import adminNavbar from "../components/adminNavbar";
export default {
  components: {
    adminNavbar
  },
  data() {
    return {};
  },
  created() {
    if (
      localStorage.getItem("tokenAdmin") &&
      localStorage.getItem("tokenAdmin") != undefined
    ) {
      this.$router.push("/adminlogin").catch(err => {});
    } else {
      this.$router.push("/").catch(err => {});
    }

  }
};
</script>
<style >
.produk {
  height: 100vh;
}
</style>
