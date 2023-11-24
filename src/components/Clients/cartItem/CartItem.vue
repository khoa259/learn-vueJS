<template>
  <div v-if="item">
    <router-link :to="item._id">
      <img
        loading="lazy"
        class="rounded-t-lg h-52 w-full"
        :src="item.imagePosts"
        alt=""
      />
    </router-link>
    <div class="p-5 flex flex-col space-y-5">
      <router-link
        :to="item._id"
        class="mb-2 text-xl font-bold truncate tracking-tight text-gray-900 dark:text-white"
      >
        {{ item.title }}
      </router-link>
      <div class="h-8">
        <p
          class="mb-3 font-normal line-clamp-2 text-gray-500 dark:text-gray-400"
        >
          {{ item.description }}
        </p>
      </div>
      <div class="info align-bottom">
        <div class="flex justify-between h-8 items-center">
          <span class="timestamp text-gray-400 flex gap-1 items-center"
            ><svg
              class="w-[14px] h-[14px] text-gray-400 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"
              /></svg
            >{{ formatDate(item.createdAt) }}</span
          >
          <span class="rating">
            <div class="flex items-center">
              <i class="fa-solid fa-star text-yellow-300"></i>
              <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                {{ item.rating }}
              </p>
              <span
                class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"
              ></span>
              <a
                href="#"
                class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                >{{ item.review }} views</a
              >
            </div>
          </span>
        </div>
        <div class="flex justify-between items-center">
          <router-link
            :to="item._id"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[var(--cl-yellow)] rounded-lg hover:bg-[var(--cl-yellow2)]"
          >
            Xem thêm
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </router-link>
          <button @click="handleSave(item._id)">
            <i
              class="fa-regular fa-xl text-[var(--cl-yellow)] fa-heart"
              :class="[isSave ? 'text-[var(--cl-red)] fa-solid' : 'bg-inherit']"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      idSave: null,
      isSave: false,
    };
  },
  props: ["item"],

  methods: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("hh:mm");
      }
    },
    handleSave(id) {
      this.isSave = !this.isSave;
      if (this.isSave) {
        this.$toast.open({
          message: "Thêm vào danh sách yêu thích",
          type: "success",
          position: "top-right",
        });
        console.log("id va isSave", id, this.isSave);
      } else {
        console.log("item remove", id);
      }
    },
  },
};
</script>

<style></style>
