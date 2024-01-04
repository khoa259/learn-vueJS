<template>
  <div class="posts_page">
    <div class="title_admin">
      <h1>quản lý bài viết</h1>
    </div>
    <div class="main pt-2">
      <div class="flex justify-between items-center py-4">
        <div>
          <input type="text" placeholder="Tìm kiếm..." />
        </div>
        <div class="btn_action">
          <router-link
            to="posts/create"
            type="button"
            class="text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            <i class="fa-solid fa-plus"></i>
            Tao bài viết
          </router-link>
          <button
            type="button"
            @click="handleCreateRandomPosts"
            class="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700"
          >
            <i class="fa-solid fa-file-excel"></i>
            Tạo 5 bài viết ngẫu nhiên
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
      <p class="font-medium text-sm my-2">
        Có tổng <span v-if="ItemPosts" class="text-base">{{ getLength }}</span>
        <span v-else>0</span> bài viết
      </p>
      <div class="relative overflow-x-auto">
        <table
          class="w-full rounded-md text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs bg-white uppercase border-b-2 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 text-xs py-3">STT</th>
              <th scope="col" class="px-6 text-xs py-3">Tiêu đề bài viết</th>
              <th scope="col" class="px-6 text-xs py-3">Ảnh bài viết</th>
              <th scope="col" class="px-6 text-xs py-3">Danh mục bài viết</th>
              <th scope="col" class="px-6 text-xs py-3">Khoảng giá</th>
              <th scope="col" class="px-6 text-xs py-3">Giờ mở cửa</th>
              <th scope="col" class="px-6 text-xs py-3">Địa chỉ</th>
              <th scope="col" class="px-6 text-xs py-3">Action</th>
            </tr>
          </thead>
          <tbody v-if="ItemPosts">
            <tr
              v-for="(item, index) in ItemPosts"
              :key="index"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td
                class="px-6 py-4 text-sm text-center font-medium text-slate-700 w-10"
              >
                {{ index + 1 }}
              </td>
              <td class="px-6 py-4 text-sm text-slate-700 w-auto">
                {{ item.title }}
              </td>
              <td class="px-6 py-4 text-sm font-medium text-slate-700 w-auto">
                <img
                  :src="item.imagePosts"
                  class="w-28 h-full max-h-36 object-cover"
                />
              </td>
              <td
                v-if="item.categoryId"
                class="px-6 py-4 text-sm font-medium text-slate-700"
              >
                {{ item.categoryId.nameCate }}
              </td>
              <td class="px-6 py-4 text-sm font-medium text-slate-700">
                {{ formatPrice(item.pricemin) }} -
                {{ formatPrice(item.pricemax) }}
              </td>
              <td class="px-6 py-4 text-sm font-medium text-slate-700">
                {{ item.timeopen }} - {{ item.timeclose }}
              </td>
              <td
                v-if="item"
                class="px-6 py-4 text-sm font-medium font-base w-60 text-slate-700"
              >
                {{ item.fullAdress }}
              </td>
              <td v-else>Cập nhật</td>
              <td class="space-x-1 space-y-1">
                <router-link
                  :to="`posts/${item._id}/view`"
                  class="bg-green-400 px-3 py-1 rounded-md text-white hover:bg-green-500 duration-150"
                  ><i class="fa-regular fa-eye fa-xs"></i
                ></router-link>
                <router-link
                  :to="`posts/${item._id}/edit`"
                  class="bg-yellow-400 px-3 py-1 rounded-md text-white hover:bg-yellow-500 duration-150"
                  ><i class="fa-solid fa-gear fa-xs"></i
                ></router-link>
                <button
                  @click="handleDeletePosts(item._id)"
                  class="bg-red-500 px-3 py-1 rounded-md text-white hover:bg-red-600 duration-150"
                >
                  <i class="fa-solid fa-trash fa-xs"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <div v-else>Loading...</div>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import API_PROVINCE from "@/api/province.js";
export default {
  computed: {
    ...mapState({
      ItemPosts: (state) => state.postsMod.ItemPosts,
      getLength: (state) => state.postsMod.NumberItemPosts,
    }),
  },
  created() {
    this.getAllPosts();
  },

  methods: {
    ...mapActions(["getAllPosts", "deletePosts", "createRandomPosts"]),
    findProvind(idProvine) {
      API_PROVINCE.apiGetProvince(idProvine).then((res) => console.log(res));
    },
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    handleCreateRandomPosts() {
      this.createRandomPosts();
      setTimeout(() => {
        this.getAllPosts();
      }, 500);
    },
    handleDeletePosts(e) {
      const alert = window.confirm("Bạn có muốn xóa bài viết này không");
      if (alert) {
        this.deletePosts({ id: e });
      }
    },
  },
};
</script>

<style></style>
