<template>
  <div>
    <v-toolbar>
      <v-toolbar-title><router-link to="/products">MC</router-link></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn><modalcart/></v-btn> 
        <v-btn text @click="changeToLogin"><router-link to="/">Signout</router-link></v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import modalcart from './modalcart'
export default {
    components:{
        modalcart
    },
    methods: {
        changeToLogin(){
            this.$emit('backToHome')
        }
    }
}
</script>

<style>

a {
  text-decoration: none;
}
</style>
