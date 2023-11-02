<template>
  <div class="w-full">
    <h2 class="titleCate">lựa chọn nhanh chóng</h2>
    <div
      class="grid lg:grid-cols-5 lg:gap-2 md:mt-6 md:grid-cols-2 md:gap-3 sm:grid-cols-2 sm:gap-4"
    >
      <figure
        class="relative max-w-sm overflow-hidden"
        v-for="(item, index) in items.slice(0, 5)"
        :key="index"
      >
        <router-link :to="item.title">
          <img
            class="rounded-lg transition-all duration-300 cursor-pointer hover:scale-105"
            :src="item.img"
            alt="image description"
          />
          <figcaption
            class="absolute font-bold uppercase px-4 text-lg text-white top-1/2 right-1/2"
          >
            <p>{{ item.title }}</p>
          </figcaption>
        </router-link>
      </figure>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const myObject = reactive({
      title: "đồ ăn",
      publishedAt: "2016-04-10",
      img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
    });
    const items = Array.from({ length: 5 }, (_, index) => {
      return {
        title: `${myObject.title} - Item ${index + 1}`,
        img: myObject.img,
        publishedAt: myObject.publishedAt,
      };
    });
    return {
      items,
    };
  },
};
</script>

<style></style>
