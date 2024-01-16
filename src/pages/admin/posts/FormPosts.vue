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
            @blur="validateForm()"
            :class="{ is_valid: error.imagePosts }"
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
              v-model="posts.province"
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
              :class="{ is_valid: error.district }"
              v-model="posts.district"
              @blur="validateForm()"
              @change="handleGetDistrictId(posts.province)"
              :disabled="!posts.province || keyLocation === 'view'"
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
              v-model="posts.ward"
              @change="handleGetWardId(posts.district)"
              :disabled="!posts.district || keyLocation === 'view'"
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
        <div class="w-full mb-6">
          <input
            readonly
            v-model="fullAdress"
            :placeholder="getFullAdress"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
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
      api: {
        province: [],
        district: [],
        ward: [],
      },
      error: {
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
        fullAdress: "",
      },
      posts: {
        imagePosts: null,
        title: "tesst1",
        description: "dis,fmie",
        categoryId: "",
        timeopen: "09:20",
        timeclose: "22:20",
        pricemin: "20000",
        pricemax: "40000",
        address: "so 136",
        province: "",
        district: "",
        ward: "",
        fullAdress: "",
      },
      fullAdress: "",
    };
  },

  computed: {
    ...mapState({
      categoryList: (state) => state.categoryMod.itemCate,
    }),
    getProvince() {
      const get = this.api.province.find(
        (item) => item.province_id === this.posts.province
      );
      return get ? get.province_name : "";
    },
    getDistricts() {
      const getdistrict = this.api.district.find(
        (item) => item.district_id === this.posts.district
      );
      return getdistrict ? getdistrict.district_name : "";
    },
    getWard() {
      const getward = this.api.ward.find(
        (item) => item.ward_id === this.posts.ward
      );
      return getward ? getward.ward_name : "";
    },
    getFullAdress() {
      const get = `${this.posts.address}, ${this.getWard}, ${this.getDistricts}, ${this.getProvince}`;
      return get;
    },
  },

  watch: {
    "posts.province": {
      immediate: true,
      handler(idProvince) {
        if (idProvince) {
          this.handleGetDistrictId(idProvince);
          if (this.keyLocation === "create") {
            this.posts.district = "";
            this.posts.ward = "";
          }
        }
      },
    },
    "posts.district": {
      handler(idDistrict) {
        if (idDistrict) {
          this.handleGetWardId(idDistrict);
        }
      },
    },
  },

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
      });
    }
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
      for (let key in this.error) {
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
    handleGetDistrictId(e) {
      API_PROVINCE.apiGetDistricts(e).then((res) => {
        this.api.district = res.data.results;
      });
    },
    handleGetWardId(e) {
      API_PROVINCE.apiGetWard(e).then((res) => {
        this.api.ward = res.data.results;
      });
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
      console.log("handle submit", this.keyLocation === "create");
      if (this.keyLocation === "create") {
        // thêm mới
        console.log("handle", this.posts.fullAdress);
        if (this.validateForm()) {
          this.posts.fullAdress = this.getFullAdress;
          const formData = new FormData();
          for (let key in this.posts) {
            formData.append(key, this.posts[key]);
          }
          this.createPosts(formData);
        }
      }
      // cập nhật
      else if (this.keyLocation === "edit") {
        this.posts.fullAdress = this.getFullAdress;
        const formData = new FormData();
        for (let key in this.posts) {
          formData.append(key, this.posts[key]);
        }
        this.updatePosts({ id: this.idParams, payload: formData });
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
