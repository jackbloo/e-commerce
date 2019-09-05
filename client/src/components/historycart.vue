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
            <tr v-for="(h,i) in histories" :key="i">
              <td>{{h._id}}</td>
              <td>{{Number(h.total_price).toLocaleString('en-ID', {style: 'currency', currency: 'IDR'})}}</td>
              <td v-if="!h.send_status">Your item is packed</td>
              <td v-else>Sent!</td>
              <td v-if="!h.send_status">
                <button disabled>Please Wait :)</button>
              </td>
              <td v-else-if="h.send_status && !h.arrived_status">
                <button @click="confirmation(h._id)">confirm</button>
              </td>
              <td v-else>
                <button>Thank you for your purchase!</button>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import Swal from "sweetalert2";
import axios from 'axios'
export default {
  data: () => ({
    dialog: false
  }),
  computed: mapState(["histories"]),
  methods: {
    getHistory() {
      this.$store.dispatch("getHist");
    },
    confirmation(id) {
      Swal.fire({
        title: "Do you want to confirm?",
        text: "Please check the sent status!",
        type: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, confirmed!"
      })
        .then(result => {
          if (result.value) {
            let token = localStorage.getItem("access_token");
            axios({
              method: "PATCH",
              url: `http://localhost:3000/transaction/${id}`,
              headers: {
                token
              },
              data: {
                arrived_status: true
              }
            }).then(({ data }) => {
            Swal.fire("Confirmed!", "Thank you for Purchasing in our store!", "success");
            this.$store.dispatch("getHist");
            });
          }
        })
        .catch(err => {
          Swal.fire("Error!", "Confirmation failed", "error");
        });
    }
  },
  created() {
    this.getHistory();
  }
};
</script>


