<template>
  <div class="container">
    <div class="mt-5">
      <img
        class="w-full rounded-md shadow-md max-h-72"
        src="./vietnam-flag-map-national-day-in.jpg"
        alt=""
      />
    </div>
    <h2 class="title-page">Bài viết</h2>
    <div class="flex justify-end mb-2">
      <div>
        <select name="" id="" class="py-1 rounded-md border-[var(--cl-yellow)]">
          <option class="text-[var(--cl-yellow)]" selected>tất cả</option>
          <option value="">xem nhiều nhất</option>
          <option value="">xem ít nhất</option>
          <option value="">bài viết mới</option>
        </select>
      </div>
    </div>
    <div class="flex gap-5 bg-white rounded-md">
      <Sidebar />
      <div class="w-4/5">
        <div
          class="grid lg:grid-cols-3 lg:px-0 lg:gap-4 md:grid-cols-2 md:gap-3 md:px-5 sm:grid-cols-2 sm:gap-3 sm:px-5 container"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 cursor-pointer hover:shadow-lg"
          >
            <CartItem :item="item" />
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import CartItem from "@/components/Clients/cartItem/CartItem.vue";
import Sidebar from "@/components/Clients/sideBar/SideBar.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  components: {
    CartItem,
    Sidebar,
    Pagination,
  },
  data() {
    return {
      page: 0,
    };
  },
  computed: {
    items() {
      return this.$store.state.postsMod.ItemPosts;
    },
    countPage() {
      return this.$store.state.postsMod.NumberItemPosts;
    },
  },

  created() {
    this.getAllPosts();
  },
  methods: {
    ...mapActions(["getAllPosts"]),
  },
};
</script>

<style></style>
