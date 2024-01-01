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
        <div class="flex justify-center my-6">
          <router-link
            to="#"
            class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <i class="fa-solid fa-backward"></i>
          </router-link>
          <router-link
            to=""
            class="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <i class="fa-solid fa-forward"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import CartItem from "@/components/Clients/cartItem/CartItem.vue";
import Sidebar from "@/components/Clients/sideBar/SideBar.vue";
export default {
  components: {
    CartItem,
    Sidebar,
  },
  computed: {
    items() {
      return this.$store.state.postsMod.ItemPosts.getAll;
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
