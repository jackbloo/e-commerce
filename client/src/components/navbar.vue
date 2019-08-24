<template>
  <div>
    <v-toolbar >
      <v-toolbar-title><router-link to="/">MC</router-link></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text ><router-link to="/login">Signin</router-link></v-btn>
        <v-btn text><router-link to="/register">Signup</router-link></v-btn>
        <v-btn text><adminvalidation></adminvalidation></v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import adminvalidation from '../components/adminvalidation'
export default {
  components: {
    adminvalidation
  },
methods: {
}
}
</script>
<style>
a {
  text-decoration: none;
}
</style>
