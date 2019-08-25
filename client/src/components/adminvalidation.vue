<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" text v-on="on">Admin</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Admin Validation</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Secret Password" v-model="pass" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="toAdmin()">Enter</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data: () => ({
    dialog: false,
    pass: ""
  }),
  methods: {
    toAdmin() {
      if (this.pass == "bukanAdmin") {
        Swal.fire({
          position: "center",
          type: "success",
          title: "You Are Admin!",
          showConfirmButton: false,
          timer: 1500
        });
        this.dialog = false
        this.$router.push('adm1n')
      } else {
        Swal.fire({
          position: "center",
          type: "error",
          title: "You are not admin!",
          showConfirmButton: false,
          timer: 1500
        });
        this.dialog = false
      }
    }
  }
};
</script>