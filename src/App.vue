<script>
export default {};
</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <router-view />
      </div>
    </template>
    <template #fallback> loading... </template>
  </Suspense>
</template>

<style scoped></style>
