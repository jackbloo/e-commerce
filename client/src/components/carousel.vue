<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(pro, x) in produq"
      :key="x"
    >
<img :src="pro.image"/>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
 props:['produq']
  }
</script>

<style>
img {
    width:100%;
    height:120%;
}
</style>