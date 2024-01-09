<template>
  <div class="container">
    NUmber {{ page }}
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
        <nav class="flex justify-center my-5">
          <ul class="flex items-center -space-x-px h-8 text-sm">
            <li>
              <router-link
                to="#"
                class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Previous</span>
                <svg
                  class="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </router-link>
            </li>
            <!-- <li v-for="(item, i) in numberPage" :key="i">
              <router-link
                to=""
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >{{ item }}</router-link
              >
            </li> -->
            <li>
              <router-link
                to="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Next</span>
                <svg
                  class="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </router-link>
            </li>
          </ul>
        </nav>
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
