<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn text color="primary" dark v-on="on">History</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">History</span>
        </v-card-title>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Transaction Id</th>
              <th class="text-left">Total Price</th>
              <th class="text-left">Send status</th>
              <th class="text-left">Arrived Status</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  }),
  methods: {
      getHistory(){
          this.$store.dispatch('getHist')
          
      }
  }
};
</script>


