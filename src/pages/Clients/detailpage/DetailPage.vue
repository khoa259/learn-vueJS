<template>
  <div class="container">
    <div class="flex space-x-3 mt-7">
      <div class="w-full border-2 border-gray-600 h-[1230px] bg-slate-600">
        <div class="heading_posts">
          <div class="title">
            <h1 class="text-3xl font-bold text-black">Tên quán ăn 1213123</h1>
          </div>
          <div class="timestemp_upload">
            <p class="text-slate-700 font-medium text-base">09h00 - 21h00</p>
          </div>
        </div>
      </div>
      <div class="w-2/5">
        <div
          class="flex flex-col space-y-3 h-fit border-[var(--cl-yellow)] border-2 rounded-lg shadow-md sticky p-4 top-2"
        >
          <div>
            <h3 class="text-xl font-semibold capitalize">
              Tên quán ăn hoặc cửa hàng
            </h3>
          </div>
          <div class="flex space-x-2 items-start">
            <i class="fa-solid fa-location-dot text-xl"></i>
            <p class="text-slate-700 font-medium text-base">
              Số 12 ngõ 103 đường bờ sông sét,thịnh liệt
            </p>
          </div>
          <div class="flex space-x-2 items-center">
            <i class="fa-solid fa-hand-holding-dollar text-xl"></i>
            <p class="text-slate-700 font-medium text-base">
              40.000 - 80.000 VNĐ
            </p>
          </div>
          <div class="flex space-x-2 items-center">
            <i class="fa-regular fa-clock text-xl"></i>
            <p class="text-slate-700 font-medium text-base">09h00 - 21h00</p>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[1230px] mt-32"></div>
  </div>
</template>

<script>
import SideBar from "@/components/Clients/sideBar/SideBar.vue";
export default {
  components: {
    SideBar,
  },
};
</script>

<style></style>
