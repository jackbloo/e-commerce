<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on }">
          <v-btn text color="primary" v-on="on">Cart</v-btn>
      </template>
             <tablecart @keluarModal="outModal" />
    </v-dialog>
  </v-row>
</template>

<script>
import tablecart from './tablecart'
  export default {
    components:{
      tablecart
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