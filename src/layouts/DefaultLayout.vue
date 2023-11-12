<template>
  <div class="layout_default">
    <Navbar />
    <router-view />
    <ScrollToTop />
  </div>
</template>

<script>
import Navbar from "@/components/Clients/NavBar.vue";
import ScrollToTop from "../components/Clients/ScrollToTop.vue";
export default {
  name: "DefaultLayout",
  components: { Navbar, ScrollToTop },
};
</script>

<style></style>
g
