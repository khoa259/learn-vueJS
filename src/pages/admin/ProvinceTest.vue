<template>
  <form @submit.prevent="handleSave">
    <div class="mb-6">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Số nhà cửa hàng</label
      >
      <input
        v-model="posts.address"
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Số 123"
      />
    </div>
    <div class="grid gap-6 mb-6 md:grid-cols-3">
      <div>
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Thành phố/Tỉnh</label
        >
        <select
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="posts.province"
          @change="handleGetProvinceId"
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
      </div>
      <div>
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Quận/Huyện</label
        >
        <select
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="posts.district"
          @change="handleGetDistrictId(posts.province)"
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
      </div>
      <div>
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Phường/Xã</label
        >
        <select
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="posts.ward"
          @change="handleGetWardId(posts.district)"
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
      </div>
    </div>
    <div class="w-full mb-6">
      <input
        disabled
        :value="getFullAdress"
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
    <button type="submit">gửi</button>
  </form>
</template>

<script>
import API_PROVINCE from "@/api/province.js";

export default {
  data() {
    return {
      api: {
        province: [],
        district: [],
        ward: [],
      },
      posts: {
        address: "",
        province: "",
        district: "",
        ward: "",
        fullAdress: "",
      },
    };
  },
  computed: {
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
          this.posts.district = "";
          this.posts.ward = "";
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
    this.handleGetProvinceId();
  },
  methods: {
    handleGetProvinceId() {
      API_PROVINCE.apiGetProvince().then((res) => {
        this.api.province = res.data.results;
      });
    },
    handleGetDistrictId(e) {
      console.log("id distric", e);
      API_PROVINCE.apiGetDistricts(e).then((res) => {
        this.api.district = res.data.results;
      });
    },
    handleGetWardId(e) {
      API_PROVINCE.apiGetWard(e).then((res) => {
        this.api.ward = res.data.results;
      });
    },
    GetFullAdress(e) {
      console.log(e);
    },
    handleSave() {
      this.posts.fullAdress = this.ad;
      console.log(this.posts);
    },
  },
};
</script>

<style></style>
