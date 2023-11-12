<template>
  <div class="category_page">
    <div class="title_admin">
      <h1>quản lý danh mục</h1>
    </div>
    <div class="main pt-2">
      <div class="flex justify-between items-center py-4">
        <div>
          <input type="text" placeholder="Tìm kiếm..." />
        </div>
        <div class="btn_action">
          <button
            type="button"
            class="text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            <i class="fa-solid fa-plus"></i>
            Tao danh mục mới
          </button>
          <button
            type="button"
            class="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700"
          >
            <i class="fa-solid fa-file-excel"></i>
            Xuất file Excel
          </button>
        </div>
      </div>

      <div class="relative overflow-x-auto">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">STT</th>
              <th scope="col" class="px-6 py-3">Ảnh danh mục</th>
              <th scope="col" class="px-6 py-3">Tên danh mục</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody v-if="ItemCate">
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              v-for="(item, index) in ItemCate"
              :key="index"
            >
              <td class="px-6 py-4 text-base font-medium">{{ index + 1 }}</td>
              <td class="px-6 py-4 text-base font-medium">
                <img :src="item.imageCate" :alt="item.nameCate" />
              </td>
              <td class="px-6 py-4 text-base font-medium">
                {{ item.nameCate }} ({{ item.postId.length }} bài viết liên
                quan)
              </td>
              <td class="px-6 py-4 text-base font-medium">
                <button
                  class="text-[var(--cl-yellow)] text-base font-semibold capitalize"
                >
                  sửa
                </button>
              </td>
            </tr>
          </tbody>
          <span v-else>Loading...</span>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import API_CATEGORIES from "@/api/category.js";
export default {
  data() {
    return {
      ItemCate: [],
    };
  },
  created() {
    API_CATEGORIES.getCategory()
      .then((res) => {
        this.ItemCate = res.data.response;
      })
      .catch((err) => console.log("error", err));
  },
};
</script>

<style></style>
