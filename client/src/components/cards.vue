<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="produk.image" height="200px"></v-img>

    <v-card-title>
      {{produk.name}}
    </v-card-title>
    
      <router-link :to="`/products/${produk._id}`"><oneProduct></oneProduct></router-link>
    <div
      class="grey--text subtitle-1"
      style="margin-left:20px;"
    >{{Number(produk.price).toLocaleString('en-ID', {style: 'currency', currency: 'IDR'})}}</div>

    <v-card-actions>
      <v-btn text color="blue" @click="addCart(produk)">Add to cart</v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-card-text>Price includes tax</v-card-text>
      </div>
    </v-expand-transition>
    <router-view name="oneProduct"></router-view>
  </v-card>
</template>

<script>
import oneProduct from "../views/oneProduct";
export default {
  components: {
    oneProduct
  },
  props: ["produk"],
  data: () => ({
    show: false
  }),
  methods: {
    addCart(product) {
      let datas = {
        name: product.name,
        price: product.price,
        id: product._id,
        stock: product.stock
      };
      this.$store.dispatch("addCart", datas);
      this.$store.dispatch("getCart");
    }
  },
  created() {
    this.$store.dispatch("getProducts");
  }
};
</script>

<style>
</style>