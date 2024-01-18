<template>
    <div class="dashboard">
        <div class="title_admin">
            <h1>Thống kê</h1>
        </div>
        <div
            class="flex lg:max-h-[600px] md:max-h-[600px] sm:max-h-screen lg:flex-row lg:space-x-5 lg:space-y-0 md:space-x-5 md:space-y-0 sm:flex-col-reverse sm:space-y-3 sm:space-y-reverse"
        >
            <div class="lg:w-4/5 md:w-4/5 sm:w-full">
                <div class="grid grid-cols-2 lg:gap-6 md:gap-4 sm:gap-3">
                    <CountPosts />
                    <CountCate />
                </div>
                <Chart />
            </div>
            <div
                class="flex lg:flex-col lg:space-y-6 md:flex-col md:space-y-4 lg:w-2/5 md:w-2/5 sm:flex-col-reverse sm:w-full sm:space-y-3 sm:space-y-reverse"
            >
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
