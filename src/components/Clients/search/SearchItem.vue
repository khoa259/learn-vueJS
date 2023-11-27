<template>
  <Transition>
    <div
      class="fixed top-0 left-0 bg-gray-900 w-full opacity-90 h-screen z-10 cursor-pointer"
    >
      <button @click="closeModal" class="text-white float-right p-9">
        <i class="fa-solid fa-x text-3xl"></i>
      </button>
      <div
        class="w-[700px] absolute top-1/4 left-2/4 -translate-x-2/4 -translate-y-2/3 mx-auto"
      >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            v-model="keyword"
            @input="handleSearch(this.keyword)"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Tìm kiếm..."
          />
        </div>
        <div v-if="dataSearch" class="absolute w-full">
          <ul
            class="bg-white rounded-lg"
            v-for="(item, index) in dataSearch.slice(0, 6)"
            :key="index"
          >
            <li
              class="space-y-3 px-5 py-2 hover:opacity-95 hover:rounded-lg hover:bg-gray-300"
            >
              <router-link :to="item._id" @click="closeModal">
                <div class="flex space-x-2">
                  <div class="img_posts w-12">
                    <img :src="item.imagePosts" alt="" />
                  </div>
                  <div class="item_posts w-full">
                    <div class="flex justify-between">
                      <span class="font-medium text-[var(--cl-yellow)]">{{
                        item.title
                      }}</span>
                      <span class="font-medium text-[var(--cl-yellow)]"
                        >{{ formatPrice(item.pricemin) }}k -
                        {{ formatPrice(item.pricemax) }}k</span
                      >
                    </div>
                    <div class="space-x-2">
                      <span>
                        {{ item.rating }}
                        <i class="fa-solid fa-star text-yellow-400 pr-2"></i
                      ></span>
                      <span>{{ item.review }} views</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import API_POSTS from "@/api/posts.js";
export default {
  data() {
    return {
      keyword: "",
      dataSearch: [],
    };
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    closeModal() {
      this.$emit("closeModal");
      this.keyword = "";
    },
    handleSearch(e) {
      setTimeout(() => {
        API_POSTS.searchPosts(e)
          .then((res) => {
            this.dataSearch = res.data.response;
          })
          .catch((err) => {
            console.log(err);
          });
      }, 500);
    },
  },
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
