<template>
  <div class="posts_page">
    <div class="title_admin">
      <h1>quản lý người dùng</h1>
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
            Tao tài khoản
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

      <div class="relative">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs bg-white border-b-2 uppercas dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">STT</th>
              <th scope="col" class="px-6 py-3">Họ tên</th>
              <th scope="col" class="px-6 py-3">Email</th>
              <th scope="col" class="px-6 py-3">Phân quyền</th>
              <th scope="col" class="px-6 py-3">Ngày kích hoạt</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              v-for="(item, index) in itemUser"
              :key="index"
            >
              <td class="px-6 py-4 text-base font-medium w-10">
                {{ index + 1 }}
              </td>
              <td class="px-6 py-4 text-base font-medium">
                {{ item.userName }}
              </td>
              <td class="px-6 py-4 text-base font-medium">{{ item.email }}</td>
              <td class="px-6 py-4 text-base font-medium w-36">
                <select v-model="updateRole">
                  <option value="" selected>
                    {{ item.role ? "admin" : "user" }}
                  </option>
                  <option value="0">admin</option>
                  <option value="1">user</option>
                </select>
              </td>
              <td class="px-6 py-4 text-base font-medium">
                {{ item.createdAt }}
              </td>
              <td class="px-6 py-4 w-36">
                <button
                  class="text-[var(--cl-yellow)] text-base font-semibold capitalize"
                >
                  xem
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import API_AUTH from "@/api/auth.js";

import SelectLocation from "@/components/Admin/SelectLocation.vue";
export default {
  data() {
    return {
      itemUser: [],
      updateRole: 0,
    };
  },
  created() {
    API_AUTH.getUser()
      .then((res) => {
        this.itemUser = res.data.response;
      })
      .catch((err) => console.log("error", err));
  },
  methods: {
    // getFormatDate(date) {
    //   return formatDateFull(date);
    // },
  },
  components: { SelectLocation },
};
</script>

<style></style>
