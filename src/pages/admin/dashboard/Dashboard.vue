<template>
    <div class="dashboard">
        <div class="title_admin">
            <h1>Thống kê</h1>
        </div>
        <div class="flex space-x-5">
            <div class="w-4/5">
                <div class="grid grid-cols-2 gap-6">
                    <CountPosts />
                    <CountCate />
                </div>
                <Chart />
            </div>
            <div class="flex flex-col h-[60vh] w-2/5">
                <CountView />
                <TopTrending />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import CountCate from '@/components/Admin/dashboard/CountCate.vue'
import CountPosts from '@/components/Admin/dashboard/CountPosts.vue'
import CountView from '@/components/Admin/dashboard/CoutView.vue'
import TopTrending from '@/components/Admin/dashboard/TopTrending.vue'
import Chart from '@/components/Admin/dashboard/Chart.vue'

export default {
    components: {
        CountPosts,
        CountCate,
        CountView,
        TopTrending,
        Chart,
        TopTrending,
    },
    created() {
        this.getPostsTopTrend()
    },
    methods: {
        ...mapActions(['getPostsTopTrend']),
    },
}
</script>

<style></style>
