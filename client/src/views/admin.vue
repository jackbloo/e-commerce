<template>
  <v-app id="inspire">
    <navbar></navbar>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Admin Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <span>Source</span>
                </v-tooltip>
                <v-tooltip right></v-tooltip>
              </v-toolbar>
              <v-form @submit.prevent="loginAdmin">
                <v-card-text>
                  <v-text-field
                    label="username"
                    name="username"
                    prepend-icon="person"
                    type="text"
                    v-model="username"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn type="submit" color="primary">Login</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import navbar from "../components/navbar";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  components: {
    navbar
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    loginAdmin() {
      Swal.fire({
        title: "Loggin in ...",
        allowOutsideClick: () => !Swal.isLoading()
      });
      Swal.showLoading();
      axios({
        method: "POST",
        url: "http://35.225.201.56/admin/login",
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then(({ data }) => {
          Swal.close()
          localStorage.setItem("tokenAdmin", data.token);
          Swal.fire({
            position: "center",
            type: "success",
            title: "Welcome Back Admin!!",
            showConfirmButton: false,
            timer: 1500
          });
          this.$router.push("/adminlogin").catch(err => {});
        })
        .catch(err => {
          Swal.fire({
            position: "center",
            type: "error",
            title: "Wrong Username or Password",
            showConfirmButton: false,
            timer: 1500
          });
        });
    }
  }
};
</script>

<style>
</style>
