<template>
  <div class="layout_default">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
export default {
  name: "DefaultLayout",
  components: { Navbar },
};
</script>

<style></style>
g
