<template>
  <div>
    <div class="text-base font-medium pb-2">Quận/Huyện</div>
    <select
      class="bg-gray-50 border border-[var(--cl-yellow)] text-gray-900 mb-6 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option class="text-[var(--cl-yellow)]" selected>Sắp xếp theo</option>
      <option
        class="max-h-20"
        v-for="(item, index) in itemDistrict"
        :key="index"
      >
        {{ item.district_name }}
      </option>
    </select>
  </div>
</template>

<script>
import API_PROVINCE from "@/api/province";
export default {
  data() {
    return {
      itemDistrict: [],
    };
  },
  created() {
    this.getDistrict();
  },
  methods: {
    getDistrict() {
      API_PROVINCE.apiGetDistricts("01").then((res) => {
        this.itemDistrict = res.data.results;
      });
    },
  },
};
</script>

<style></style>
