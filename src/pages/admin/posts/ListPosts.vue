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
            to="create_posts"
            type="button"
            class="text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            <i class="fa-solid fa-plus"></i>
            Tao bài viết
          </router-link>
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
              <th scope="col" class="px-6 py-3">Tiêu đề bài viết</th>
              <th scope="col" class="px-6 py-3">Ảnh bài viết</th>
              <th scope="col" class="px-6 py-3">Danh mục bài viết</th>
              <th scope="col" class="px-6 py-3">Khoảng giá</th>
              <th scope="col" class="px-6 py-3">Giờ mở cửa</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 text-base font-medium w-10">1</td>
              <td class="px-6 py-4 text-base font-medium">Silver</td>
              <td class="px-6 py-4 text-base font-medium">
                <img
                  src="https://www.findjobs.vn/htdocs/thumbs/employers/201703/250x250x0-photo.jpg"
                  alt=""
                  class="w-16 h-28 object-cover"
                />
              </td>
              <td class="px-6 py-4 text-base font-medium">Lẩu nướng</td>
              <td class="px-6 py-4 text-base font-medium">120 - 394</td>
              <td class="px-6 py-4 text-base font-medium">20h</td>
              <td class="px-6 py-4 w-24">
                <button
                  class="text-[var(--cl-yellow)] text-base font-semibold capitalize"
                >
                  xem
                </button>
                <button
                  class="text-[var(--cl-yellow)] text-base font-semibold capitalize"
                >
                  sửa
                </button>
                <button
                  class="text-[var(--cl-yellow)] text-base font-semibold capitalize"
                >
                  xóa
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
