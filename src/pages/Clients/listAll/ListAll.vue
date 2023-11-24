<template>
  <div class="container">
    <h2 class="title-page">Các địa điểm</h2>
    <div class="flex gap-5">
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
