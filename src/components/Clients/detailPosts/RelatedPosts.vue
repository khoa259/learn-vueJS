<template>
  <div
    class="w-1/4 bg-slate-50 shadow-md rounded-lg mt-4 p-5 sticky top-2 max-h-[60vh]"
  >
    <h2 class="capitalize text-xl font-semibold">có thể bạn thích</h2>
    <div
      class="flex flex-col space-y-4 mt-2 overflow-auto relative max-h-[50vh]"
    >
      <router-link to="@" class="flex space-x-2">
        <img
          src="http://localhost:5000/api/public/1700869023925.1695052719383.png"
          class="max-h-24 w-20"
          alt=""
        />
        <div class="flex flex-col justify-between">
          <h2 class="line-clamp-2 text-md font-semibold">
            tieue ddeef bafi vieest
          </h2>
          <span class="text-[var(--cl-yellow)]">3 views</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #f3f3f3;
}

::-webkit-scrollbar-thumb {
  background: rgb(217, 217, 217);
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
