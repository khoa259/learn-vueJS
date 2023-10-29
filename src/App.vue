<script setup>
import Navbar from "./components/navbar.vue";
</script>

<template>
  <div>
    <Navbar />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
