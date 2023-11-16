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
            @click="showModal"
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
          <tbody v-if="ItemCate.length">
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              v-for="(item, index) in ItemCate"
              :key="index"
            >
              <td class="px-6 py-4 text-base font-medium">{{ index + 1 }}</td>
              <td class="px-6 py-4 text-base font-medium">
                <img
                  :src="item.imageCate"
                  :alt="item.imageCate"
                  class="w-48 h-auto max-h-32 object-contain bg-slate-200 rounded-md"
                />
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
          <div v-else>Loading...</div>
        </table>
      </div>
    </div>
    <ModalComponent
      v-show="isModalVisible"
      @closeModal="hidenModal"
      @submitModal="onSubmit"
    >
      <template v-slot:title>Tạo danh mục mới</template>
      <template v-slot:body>
        <form @submit.prevent="onSubmit">
          <div class="mb-6">
            <input
              type="file"
              @change="handleUploadFile"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Tên danh mục</label
            >
            <input
              type="text"
              v-model="nameCate"
              placeholder="Tên danh mục..."
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </form>
      </template>
    </ModalComponent>
  </div>
</template>

<script>
import API_CATEGORIES from "@/api/category.js";
import ModalComponent from "@/components/ModalComponent.vue";

export default {
  components: { ModalComponent },
  data() {
    return {
      ItemCate: [],
      isModalVisible: false,
      nameCate: "",
      imageCate: null,
    };
  },

  created() {
    API_CATEGORIES.getCategory()
      .then((res) => {
        this.ItemCate = res.data.response;
      })
      .catch((err) => console.log("error", err));
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    hidenModal() {
      this.isModalVisible = false;
    },
    handleUploadFile(e) {
      this.imageCate = e.target.files[0];
    },
    async onSubmit() {
      const formData = new FormData();
      formData.append("images", this.imageCate);
      formData.append("nameCate", this.nameCate);
      await API_CATEGORIES.creatCategory(formData)
        .then((res) => {
          this.ItemCate.push = res.data;
          this.$toast.open({
            message: res.data.message,
            type: "success",
            position: "top-right",
          });
          API_CATEGORIES.getCategory()
            .then((res) => {
              this.ItemCate = res.data.response;
            })
            .catch((err) => console.log("error", err));
        })
        .catch((err) => {
          console.log("err", err);
          this.$toast.open({
            message: err.response.data.message,
            type: "error",
            position: "top-right",
          });
        });

      this.isModalVisible = false;
      this.nameCate = "";
      this.imageCate = null;
    },
  },
};
</script>

<style></style>
