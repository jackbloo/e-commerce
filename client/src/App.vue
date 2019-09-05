<template>
  <v-app id="inspire">
    <router-view />
    <footMe></footMe>
  </v-app>
</template>

<script>
import navbar from "./components/navbar";
import navbarin from "./components/navbarin";
import footMe from "./components/footMe";

export default {
  name: "App",
  components: {
    navbar,
    navbarin,
    footMe
  },
  data: () => ({}),
  methods: {},
  created() {
    if (localStorage.getItem("access_token")) {
      this.$router.push("/products").catch(err=>{})
    } else {
      this.$router.push("/").catch(err=>{})
    }
  }
};
</script>
<style scoped>
</style>
