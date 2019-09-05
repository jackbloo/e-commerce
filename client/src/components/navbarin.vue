<template>
  <div>
    <v-toolbar>
      <v-toolbar-title><router-link to="/products">MC</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn ><historycart/></v-btn> 
        <v-btn @click="cartGetter"><modalcart/></v-btn> 
        <v-btn text @click="changeToLogin">signOut</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import modalcart from './modalcart'
import historycart from './historycart'
export default {
    components:{
        modalcart,
        historycart
    },
    methods: {
        changeToLogin(){
          localStorage.removeItem('access_token')
          this.$router.push('/').catch(err =>{})
        },
        cartGetter(){
          this.$store.dispatch('getCart')
        }
    }
}
</script>

<style>

a {
  text-decoration: none;
}
</style>
