<template>
  <div class="w-1/4 bg-slate-50 shadow-md rounded-lg p-5 max-h-[60vh]">
    <h2 class="capitalize text-xl font-semibold">có thể bạn thích</h2>
    <div
      class="flex flex-col mt-3 overflow-auto relative max-h-[50vh]"
      v-for="(item, index) in postRelated"
      :key="index"
    >
      <router-link
        :to="`${item._id}`"
        @click="next(item._id)"
        class="flex space-x-2 pb-2 border-b-2"
      >
        <img :src="item.imagePosts" class="max-h-24 w-20" alt="" />
        <div class="flex flex-col justify-between">
          <h2 class="line-clamp-2 text-md font-semibold">
            {{ item.title }}
          </h2>
          <span class="text-[var(--cl-yellow)]">{{ item.review }} views</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["postRelated"],

  methods: {
    ...mapActions(["getPostsDetail"]),
    next(id) {
      this.getPostsDetail({ id });
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #f3f3f3;
}

::-webkit-scrollbar-thumb {
  background: rgb(217, 217, 217);
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
