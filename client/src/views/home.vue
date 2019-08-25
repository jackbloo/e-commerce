<template>
  <div>
    <div class="luar">
      <navbar></navbar>
      <div class="awal">
        <div class="dalam">
          <h1>Welcome To Mamsz Collectives</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar";
export default {
  components: {
    navbar
  }
};
</script>

<style>
.awal {
  display: flex;
  justify-content: center;
  height: 95%;
  width: 100%;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1511980995225-25360cb0aa29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80");
}
h1 {
  color: whitesmoke;
}
.luar {
  height: 100vh;
}
</style>
