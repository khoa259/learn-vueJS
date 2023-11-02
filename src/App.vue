<script>
export default {};
</script>

<template>
  <Suspense>
    <template #default>
      <router-view />
    </template>
    <template #fallback> loading... </template>
  </Suspense>
</template>

<style scoped></style>
