<template>
  <div class="container">
    <div class="new_eating_area w-4/5 lg:px-0 md:px-5 sm:px-5">
      <h2 class="titleCate">Một số địa điểm mới</h2>
    </div>
    <div
      class="pt-6 grid lg:grid-cols-4 lg:px-0 lg:gap-4 md:grid-cols-3 md:gap-3 md:px-5 sm:grid-cols-2 sm:gap-3 sm:px-5 container"
    >
      <div
        v-for="(item, index) in items.slice(0, 8)"
        :key="index"
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 cursor-pointer hover:shadow-lg"
      >
        <router-link to="/detail">
          <img class="rounded-t-lg" :src="item.imgae" alt="" />
        </router-link>
        <div class="p-5">
          <router-link to="/detail">
            <h5
              class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ item.title }}
            </h5>
          </router-link>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {{ item.description }}
          </p>
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
              >{{ item.timstampe }}</span
            >
            <span class="rating">
              <div class="flex items-center">
                <i class="fa-solid fa-star text-yellow-300"></i>
                <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                  4.95
                </p>
                <span
                  class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"
                ></span>
                <a
                  href="#"
                  class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                  >{{ item.review }} reviews</a
                >
              </div>
            </span>
          </div>
          <div class="flex justify-between items-center">
            <router-link
              to="#"
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
            <button @click="handleSave((id = item.id))">
              <i
                class="fa-regular fa-xl text-[var(--cl-yellow)] fa-heart"
                :class="[
                  isSave ? 'text-[var(--cl-red)] fa-solid' : 'bg-inherit',
                ]"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const $toast = useToast();
  },
  data() {
    return {
      idSave: null,
      isSave: false,
    };
  },
  setup() {
    const myObject = reactive({
      id: 1,
      title: "Noteworthy technology acquisitions 2021",
      image:
        "https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      review: 10,
      timstampe: "20/10",
    });
    const items = Array.from({ length: 20 }, (_, index) => {
      return {
        id: Number.parseInt((myObject.id += 2)),
        title: `${myObject.title} - Item ${index + 1}`,
        imgae: myObject.image,
        description: myObject.description,
        review: Number.parseInt((myObject.review += 2)),
        timstampe: myObject.timstampe,
      };
    });
    return {
      items,
    };
  },
  methods: {
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
