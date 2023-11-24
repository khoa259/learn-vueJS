<template>
  <div class="bg-slate-50 shadow-md rounded-lg p-5 w-3/4">
    <div class="item_description">
      <div class="text-center">
        <img
          class="h-auto max-h-80 mx-auto"
          loading="lazy"
          :src="item.imagePosts"
          alt="#"
        />
        <span class="max-w-xs">
          <i class="w-full mt-1 text-gray-500 text-center">{{ item.title }}</i>
        </span>
      </div>
      <div class="description">
        {{ item.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style></style>
