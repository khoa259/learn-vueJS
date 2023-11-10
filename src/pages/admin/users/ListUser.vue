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
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
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
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 text-base font-medium w-10">1</td>
              <td class="px-6 py-4 text-base font-medium">khoa</td>
              <td class="px-6 py-4 text-base font-medium">khoa234@gmail.com</td>
              <td class="px-6 py-4 text-base font-medium w-36">
                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="US">Admin</option>
                  <option value="CA">User</option>
                </select>
              </td>
              <td class="px-6 py-4 text-base font-medium">20h</td>
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
export default {};
</script>

<style></style>
