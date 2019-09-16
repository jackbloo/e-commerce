<template>
  <div>
    <adminNavbar></adminNavbar>
    <div class="produk">
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">Product Name</th>
            <th class="text-left">Price</th>
            <th class="text-left">Stock</th>
            <th class="text-left">image url</th>
            <th class="text-left">Edit</th>
            <th class="text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p,i) in products" :key="i">
            <td>{{p.name}}</td>
            <td>{{p.price}}</td>
            <td>{{p.stock}}</td>
            <td>{{p.image}}</td>
            <td>
              <editProduct :productId="p._id"></editProduct>
            </td>
            <td>
              <button @click="deleteItem(p._id)">delete</button>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import adminNavbar from "../components/adminNavbar";
import { mapState } from "vuex";
import editProduct from "../components/editProduct";
import Swal from 'sweetalert2'
export default {
  components: {
    adminNavbar,
    editProduct
  },
  data() {
    return {};
  },
  computed: mapState(["products"]),
  methods: {
    deleteItem(id) {
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
          this.$store.dispatch('deleteItem',id)
          this.$store.dispatch('getProducts')
        }
      });

      

    }
  },
  created() {
    if (
      localStorage.getItem("tokenAdmin") &&
      localStorage.getItem("tokenAdmin") != undefined
    ) {
      this.$router.push("/adminlogin").catch(err => {});
    } else {
      this.$router.push("/home").catch(err => {});
    }

    this.$store.dispatch("getProducts");
  }
};
</script>
<style >
.produk {
  height: 100vh;
}
</style>
