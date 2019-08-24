<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      height="200px"
    ></v-img>

    <v-card-title>
      <div>skullskullskullskullskull</div>
      <span class="grey--text subtitle-1">Rp.200,000</span>
    </v-card-title>

    <v-card-actions>
      <v-btn
        text
        color="blue"
      >
        Add to cart
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-card-text>
         Price includes tax
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
    data: () => ({
      show: false,
    }),
}
</script>

<style>

</style>