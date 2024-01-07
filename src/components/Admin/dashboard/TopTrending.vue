<template>
  <div class="bg-white mt-6 shadow-md rounded-md min-h-full p-5">
    <div class="count_cate">
      <div class="flex flex-col space-y-2">
        <h2 class="text-slate-700 text-xl font-medium">Bài viết thịnh hành</h2>
        <div class="flex flex-col h-[470px] space-y-2 overflow-y-auto">
          <div class="posts" v-for="(item, index) in topTrend" :key="index">
            <router-link
              to=""
              class="posts_trending flex space-x-5 items-center"
            >
              <div class="posts_count w-5 text-left">
                <span class="text-slate-700 text-2xl font-medium">{{
                  index + 1
                }}</span>
              </div>
              <div class="flex space-x-2">
                <div class="max-w-[150px]">
                  <img
                    class="max-h-28 object-cover rounded-md"
                    src="https://www.datanami.com/wp-content/uploads/2021/10/tonic_ai_real_fake_data.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div class="posts_content my-2 flex flex-col">
                  <div class="posts_title">
                    <h3
                      class="font-medium truncate tracking-tight text-base w-44 text-slate-800"
                    >
                      {{ item.title }}
                    </h3>
                  </div>
                  <div class="posts_view w-full">
                    <div class="text-sm">
                      Lượt xem:
                      <span class="font-medium">{{ item.review }}</span>
                    </div>
                    <div class="text-sm font-medium">
                      {{
                        item.categoryId
                          ? item.categoryId.nameCate
                          : "danh mục trống"
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      topTrend: (state) => state.dashboardMod.PostsTrending,
    }),
  },
};
</script>

<style></style>
