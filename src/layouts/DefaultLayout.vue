<template>
  <div class="layout_default">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Clients/NavBar.vue";
export default {
  name: "DefaultLayout",
  components: { Navbar },
};
</script>

<style></style>
g
