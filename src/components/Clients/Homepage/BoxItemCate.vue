<template>
  <div class="w-full">
    <h2 class="titleCate">lựa chọn nhanh chóng</h2>
    <div
      class="grid lg:grid-cols-5 gap-3 sm:grid-cols-2 grid-flow-col auto-cols-[25%] overflow-x-auto mt-6"
    >
      <figure
        class="snap-center flex flex-col space-y-3 max-w-sm overflow-hidden bg-[var(--cl-yellow)] px-3 py-8 rounded-md"
        v-for="(item, index) in itemsCategories"
        :key="index"
      >
        <figcaption
          class="text-center font-bold uppercase px-4 text-lg text-slate-700"
        >
          <p>{{ item.nameCate }}</p>
        </figcaption>
        <router-link :to="item._id">
          <img
            class="rounded-lg"
            :src="item.imageCate"
            alt="image description"
          />
        </router-link>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: ["itemsCategories"],
  // computed: {
  //   items() {
  //     return this.$store.getters.ItemCate;
  //   },
  // },
};
</script>

<style></style>
