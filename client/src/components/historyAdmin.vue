<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn text color="primary" dark v-on="on">Admin History</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Admin History</span>
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
            <tr v-for="(h,i) in adHistories" :key="i">
              <td>{{h._id}}</td>
              <td>{{Number(h.total_price).toLocaleString('en-ID', {style: 'currency', currency: 'IDR'})}}</td>
              <td v-if="!h.send_status" @click="confirmation(h._id)"><button>confirm</button></td>
              <td v-else>Sent!</td>
              <td v-if="!h.send_status">
                <button disabled>Still waiting</button>
              </td>
              <td v-else>
                <button disabled> Arrived :)</button>
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
  computed: mapState(["adHistories"]),
  methods: {
    confirmation(id) {
      Swal.fire({
        title: "Do you want to confirm?",
        text: "Dont forget to keep smile :)",
        type: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, confirmed!"
      })
        .then(result => {
          if (result.value) {
            let token = localStorage.getItem("tokenAdmin");
            axios({
              method: "PATCH",
              url: `http://localhost:3000/transaction/${id}`,
              headers: {
                token
              },
              data: {
                send_status: true
              }
            }).then(({ data }) => {
            Swal.fire("Confirmed!", "Confirmation Success!", "success");
            this.$store.dispatch("getAllHist");
            });
          }
        })
        .catch(err => {
          Swal.fire("Error!", err.message, "error");
        });
    }
  },
  created() {
    this.$store.dispatch("getAllHist");
  }
};
</script>


