<template>
  <div>
    <navbarin></navbarin>
    <div class="allCards">
      <carousel :produq="products"></carousel>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex class="mt-4" v-for="(p,i) in products" :key="i">
            <cards :produk="p"></cards>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import cards from '../components/cards'
import navbarin from '../components/navbarin'
import carousel from '../components/carousel'
import {mapState} from 'vuex'
  export default {
      components: {
          cards,
          carousel,
          navbarin
      },
      computed:mapState(['products']),
      mounted(){
        if(localStorage.getItem('access_token')){
          this.$router.push('/products').catch(err=>{})
        }else {
          this.$router.push('/').catch(err=>{})
        }
        this.$store.dispatch("getProducts")
      },
      created(){
        if(localStorage.getItem('access_token')){
          this.$router.push('/products').catch(err=>{})
        }else {
          this.$router.push('/').catch(err=>{})
        }
        this.$store.dispatch("getProducts");
      }
  }
</script>
<style scoped>
.allCards {
  background-color: whitesmoke;
  height: 100%;
  padding-top: 1%;
}
</style>