<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on }">
          <v-btn text v-on="on"><router-link to="#">Cart</router-link></v-btn>
      </template>
      <v-card>
       <tablecart/>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Checkout</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Later</v-btn>
        </v-card-actions>
      </v-card>
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
  }
</script>