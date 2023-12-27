<template>
  <div>
    <div class="title_admin">
      <h1 v-if="keyLocation === null">Tạo bài viết mới</h1>
      <h1 v-else-if="keyLocation === 'edit'">Cập nhật bài viết</h1>
      <h1 v-else-if="keyLocation === 'view'">Chi tiết bài viết</h1>
    </div>
    <div>
      <form @submit.prevent="handleSave">
        <div id="preview" class="relative" v-if="url">
          <img :src="url" class="relative" />
          <button
            type="button"
            v-if="keyLocation === 'edit'"
            :disabled="keyLocation === 'view'"
            class="bg-red-500 text-white absolute p-2 top-0 left-0"
            @click="removeImage"
          >
            X
          </button>
        </div>
        <div class="mb-6 flex items-center justify-start w-full">
          <input
            :disabled="keyLocation === 'view'"
            id="dropzone-file"
            type="file"
            @change="handleUpload"
            v-if="keyLocation !== 'view'"
          />
        </div>

        <div class="w-full mb-6">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Tiêu đề bài viết</label
          >
          <input
            :disabled="keyLocation === 'view'"
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
              :disabled="keyLocation === 'view'"
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
                :disabled="keyLocation === 'view'"
                @blur="validateForm()"
                :class="{ is_valid: error.timeopen }"
                v-model="posts.timeopen"
                type="time"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
              />

              <span>đến</span>
              <input
                :disabled="keyLocation === 'view'"
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
                :disabled="keyLocation === 'view'"
                @blur="validateForm()"
                :class="{ is_valid: error.pricemin }"
                v-model.number="posts.pricemin"
                type="number"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="40.000"
              />

              <span>đến</span>
              <input
                :disabled="keyLocation === 'view'"
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
            :disabled="keyLocation === 'view'"
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
              v-model="getProvinceId.province"
              @change="handleGetProvinceId"
              :disabled="keyLocation === 'view'"
            >
              <option selected>--Chọn Thành phố/Tỉnh--</option>
              <option
                v-for="item in api.province"
                :key="item.province_id"
                :value="item.province_id"
              >
                {{ item.province_name }}
              </option>
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
              v-model="getProvinceId.district"
              @change="handleGetDistrictId"
              :disabled="!getProvinceId.province || keyLocation === 'view'"
            >
              <option selected>--Chọn Quận/Huyện--</option>
              <option
                v-for="item in api.district"
                :key="item.district_id"
                :value="item.district_id"
              >
                {{ item.district_name }}
              </option>
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
              v-model="getProvinceId.ward"
              @change="handleGetWardId"
              :disabled="!getProvinceId.district || keyLocation === 'view'"
            >
              <option selected>--Chọn Phường/Xã--</option>
              <option
                v-for="item in api.ward"
                :key="item.ward_id"
                :value="item.ward_id"
              >
                {{ item.ward_name }}
              </option>
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
          :disabled="keyLocation === 'view'"
        >
          {{ keyLocation === "edit" ? "Cập nhật" : "Lưu" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import API_PROVINCE from "@/api/province.js";
import API_POSTS from "@/api/posts.js";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      keyLocation: "",
      idParams: null,
      url: null,
      getProvinceId: {
        province: null,
        district: null,
        ward: null,
      },
      api: {
        province: [],
        district: [],
        ward: [],
      },
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
        imagePosts: null,
        title: "",
        description: "",
        categoryId: "",
        timeopen: "",
        timeclose: "",
        pricemin: "",
        pricemax: "",
        address: "",
        province: "",
        district: "",
        ward: "",
      },
    };
  },
  computed: mapState({
    categoryList: (state) => state.categoryMod.itemCate,
  }),

  created() {
    this.keyLocation = this.$route.params.key;
    this.getItemCate();
    // api get province
    this.handleGetProvinceId();
    if (this.keyLocation === "edit" || this.keyLocation === "view") {
      this.idParams = this.$route.params.id;
      API_POSTS.getPostsById(this.idParams).then((res) => {
        this.posts = res.data.response;
        this.url = res.data.response.imagePosts;
        // this.posts.categoryId = res.data.response.categoryId._id;
      });
    }
    console.log(this.posts.timeclose);
  },
  methods: {
    ...mapActions([
      "createPosts",
      "getItemCate",
      "getPostsById",
      "updatePosts",
    ]),
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
      for (let key in this.posts) {
        if (!this.posts[key]) {
          this.error[key] = isRequired;
          isValid = false;
        }
      }
      return isValid;
    },
    // get province
    handleGetProvinceId() {
      API_PROVINCE.apiGetProvince().then((res) => {
        this.api.province = res.data.results;
      });
    },
    handleGetDistrictId() {
      API_PROVINCE.apiGetDistricts(this.getProvinceId.province).then((res) => {
        this.api.district = res.data.results;
        this.posts.province = this.findProvinceNameById(
          this.getProvinceId.province
        );
      });
    },
    handleGetWardId() {
      API_PROVINCE.apiGetWard(this.getProvinceId.district).then((res) => {
        this.api.ward = res.data.results;
        this.posts.district = this.findDistrictNameById(
          this.getProvinceId.district
        );
        this.posts.ward = this.findWardNameById(this.getProvinceId.ward);
      });
    },
    findProvinceNameById(id) {
      const val = this.api.province.find((item) => item.province_id === id);
      return val ? val.province_name : null;
    },
    findDistrictNameById(id) {
      const val = this.api.district.find((item) => item.district_id === id);
      return val ? val.district_name : null;
    },
    findWardNameById(id) {
      const val = this.api.ward.find((item) => item.ward_id === id);
      return val ? val.ward_name : null;
    },
    // upload images
    handleUpload(e) {
      this.posts.imagePosts = e.target.files[0];
      this.url = URL.createObjectURL(this.posts.imagePosts);
    },
    removeImage() {
      API_POSTS.rmImage({ image_rm: this.url }).then((res) => {
        log;
        this.url = res;
      });
    },
    handleSave() {
      // thêm mới
      if (this.keyLocation === null) {
        if (this.validateForm()) {
          const formData = new FormData();
          for (let key in this.posts) {
            formData.append(key, this.posts[key]);
          }
          this.createPosts(formData)
            .then((res) => {
              this.$toast.open({
                message: "Tạo bài viết thành công",
                type: "success",
                position: "top-right",
              });
            })
            .catch((er) => {
              this.$toast.open({
                message: "Tạo bài viết thất bại",
                type: "error",
                position: "top-right",
              });
            });
        }
      }
      // cập nhật
      if (this.keyLocation === "edit") {
        const formData = new FormData();
        for (let key in this.posts) {
          formData.append(key, this.posts[key]);
        }
        this.updatePosts({ id: this.idParams, payload: formData })
          .then((res) => {
            this.$toast.open({
              message: "Cập nhật bài viết thành công",
              type: "success",
              position: "top-right",
            });
          })
          .catch((er) => {
            this.$toast.open({
              message: "Cập nhật bài viết thất bại",
              type: "error",
              position: "top-right",
            });
          });
      }
    },
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
#preview {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6px;
}

#preview img {
  max-width: 100%;
  max-height: 260px;
}
</style>
