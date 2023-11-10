<template>
  <div data-dial-init class="fixed right-6 bottom-6 group">
    <button
      @click="scrollToTop"
      class="rounded-full p-3 bg-[var(--cl-yellow)] hover:bg-[var(--cl-yellow2)] text-white"
    >
      <i class="fa-solid fa-angle-up"></i>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  },
};
</script>

<style></style>
