<template>
<div class="allCards">
    <carousel></carousel>
<v-container fluid >
    <v-layout row wrap>
    <v-flex >
  <cards></cards>
    </v-flex>
    <v-flex >
  <cards></cards>
    </v-flex>
    <v-flex >
  <cards></cards>
    </v-flex>
        <v-flex class="mt-4">
  <cards></cards>
    </v-flex>
        <v-flex class="mt-4">
  <cards></cards>
    </v-flex>
        <v-flex class="mt-4">
  <cards></cards>
    </v-flex>
</v-layout>
  </v-container>
</div>

  
</template>

<script>
import cards from '../components/cards'
import carousel from '../components/carousel'
  export default {
      components: {
          cards,
          carousel
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