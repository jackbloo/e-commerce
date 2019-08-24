<template>
  <v-app id="inspire">
    <keep-alive><router-view/></keep-alive>
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
  data: () => ({

  }),
  methods: {
  }
};
</script>
<style scoped>

</style>
