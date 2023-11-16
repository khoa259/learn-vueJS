<template>
  <div>
    <div class="title_admin">
      <h1>Tạo bài viết mới</h1>
    </div>
    <div>
      <form @submit.prevent="handleSave">
        <div class="mb-6 flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
        <div class="w-full mb-6">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Tiêu đề bài viết</label
          >
          <input
            v-model="posts.title"
            type="text"
            @blur="validateForm()"
            :class="{ is_valid: error.title }"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Aa"
          />
          <div v-if="error.title" class="text_error">{{ error.title }}</div>
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Danh mục</label
            >
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              @blur="validateForm()"
              :class="{ is_valid: error.categoryId }"
              v-model="posts.categoryId"
            >
              <option selected>--Chọn danh mục--</option>
              <option
                v-for="item in categoryList"
                :key="item._id"
                :value="item._id"
              >
                {{ item.nameCate }}
              </option>
            </select>
            <div v-if="error.categoryId" class="text_error">
              {{ error.categoryId }}
            </div>
          </div>
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Giờ mở cửa</label
            >
            <div class="flex items-center space-x-3">
              <input
                @blur="validateForm()"
                :class="{ is_valid: error.timeopen }"
                v-model="posts.timeopen"
                type="time"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
              />

              <span>đến</span>
              <input
                @blur="validateForm()"
                :class="{ is_valid: error.timeclose }"
                v-model="posts.timeclose"
                type="time"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
              />
            </div>
            <div v-if="error.timeclose" class="text_error">
              {{ error.timeclose }}
            </div>
          </div>
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Khoảng giá</label
            >
            <div class="flex items-center space-x-3">
              <input
                @blur="validateForm()"
                :class="{ is_valid: error.pricemin }"
                v-model.number="posts.pricemin"
                type="number"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="40.000"
              />

              <span>đến</span>
              <input
                @blur="validateForm()"
                :class="{ is_valid: error.pricemax }"
                v-model.number="posts.pricemax"
                type="number"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="400.000"
              />
            </div>
            <div v-if="error.pricemax" class="text_error">
              {{ error.pricemax }}
            </div>
          </div>
          <div></div>
        </div>
        <div class="mb-6">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Số nhà cửa hàng</label
          >
          <input
            @blur="validateForm()"
            :class="{ is_valid: error.address }"
            v-model="posts.address"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Số 123"
          />
          <div v-if="error.address" class="text_error">{{ error.address }}</div>
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-3">
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Thành phố/Tỉnh</label
            >
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              @blur="validateForm()"
              :class="{ is_valid: error.province }"
              v-model="posts.province"
            >
              <option selected>--Chọn Thành phố/Tỉnh--</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <div v-if="error.province" class="text_error">
              {{ error.province }}
            </div>
          </div>
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Quận/Huyện</label
            >
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              @blur="validateForm()"
              :class="{ is_valid: error.district }"
              v-model="posts.district"
            >
              <option selected>--Chọn Quận/Huyện--</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <div v-if="error.district" class="text_error">
              {{ error.district }}
            </div>
          </div>
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Phường/Xã</label
            >
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              @blur="validateForm()"
              :class="{ is_valid: error.ward }"
              v-model="posts.ward"
            >
              <option selected>--Chọn Phường/Xã--</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <div v-if="error.ward" class="text_error">{{ error.ward }}</div>
          </div>
        </div>
        <div class="mb-6">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Mô tả
          </label>
          <textarea
            @blur="validateForm()"
            :class="{ is_valid: this.error.description }"
            v-model="posts.description"
            rows="10"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Mô tả bài viết"
          ></textarea>
          <div v-if="error.description" class="text_error">
            {{ error.description }}
          </div>
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Lưu
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import API_CATEGORIES from "@/api/category.js";

export default {
  data() {
    return {
      error: {
        title: "",
        description: "",
        categoryId: "",
        timeopen: "",
        timeclose: "",
        address: "",
        province: "",
        district: "",
        ward: "",
      },
      posts: {
        title: "tile2",
        description: "description",
        categoryId: "",
        timeopen: "",
        timeclose: "",
        address: "address",
        province: "province",
        district: "district",
        ward: "ward",
      },
      categoryList: [],
    };
  },
  methods: {
    validateForm() {
      let isValid = true;
      this.error = {
        title: "",
        description: "",
        categoryId: "",
        pricemin: "",
        pricemax: "",
        timeopen: "",
        timeclose: "",
        address: "",
        province: "",
        district: "",
        ward: "",
      };
      const isRequired = "Không được bỏ trống trường này";
      if (!this.posts.title) {
        this.error.title = isRequired;
        isValid = false;
      }
      if (!this.posts.description) {
        this.error.description = isRequired;
        isValid = false;
      }
      if (!this.posts.categoryId) {
        this.error.categoryId = isRequired;
        isValid = false;
      }
      if (!this.posts.timeopen) {
        this.error.timeopen = isRequired;
        isValid = false;
      }
      if (!this.posts.timeclose) {
        this.error.timeclose = isRequired;
        isValid = false;
      }
      if (!this.posts.timeclose) {
        this.error.timeclose = isRequired;
        isValid = false;
      }
      if (!this.posts.pricemin) {
        this.error.pricemin = isRequired;
        isValid = false;
      }
      if (!this.posts.pricemax) {
        this.error.pricemax = isRequired;
        isValid = false;
      }
      if (!this.posts.address) {
        this.error.address = isRequired;
        isValid = false;
      }
      if (!this.posts.province) {
        this.error.province = isRequired;
        isValid = false;
      }
      if (!this.posts.district) {
        this.error.district = isRequired;
        isValid = false;
      }
      if (!this.posts.ward) {
        this.error.ward = isRequired;
        isValid = false;
      }
      return isValid;
    },
    handleSave() {
      if (this.validateForm()) {
        console.log("pass", this.posts);
      }
    },
  },
  created() {
    API_CATEGORIES.getCategory()
      .then((res) => {
        this.categoryList = res.data.response;
      })
      .catch((err) => console.log("error", err));
  },
};
</script>

<style scoped>
.is_valid {
  border-color: red;
}
.text_error {
  color: rgb(239, 57, 57);
  padding-top: 3px;
  font-size: 14px;
  font-weight: 500;
}
</style>
