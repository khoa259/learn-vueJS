<script>
import ScrollToTop from "./components/ScrollToTop.vue";

export default { components: { ScrollToTop } };
</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <router-view />
        <ScrollToTop />
      </div>
    </template>
    <template #fallback> loading... </template>
  </Suspense>
</template>

<style scoped></style>
