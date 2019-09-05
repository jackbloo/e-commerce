<template>
  <v-row justify="center">
      <template>
          <router-link :to="`/tablecart`"><v-btn text color="primary">Cart</v-btn></router-link>  
      </template>
  </v-row>
</template>

<script>
  export default {
    components:{
    },
    data () {
      return {
        dialog: false,
      }
    },
    methods: {
      outModal(){
        this.dialog = false
      }
    }
  }
</script>