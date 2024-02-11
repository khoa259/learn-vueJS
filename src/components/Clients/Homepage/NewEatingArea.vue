<template>
    <div class="container">
        <div class="new_eating_area w-4/5">
            <h2 class="titleCate">Một số địa điểm mới</h2>
        </div>
        <div v-if="statusLoading"><CardItemSkeleton /></div>
        <div
            class="pt-6 grid lg:grid-cols-4 lg:px-0 lg:gap-4 md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-3 container"
            v-else
        >
            <div
                v-for="(item, index) in itemsPosts.slice(0, 8)"
                :key="index"
                class="max-w-sm"
            >
                <CardItemVue :item="item" />
            </div>
        </div>
        <div class="text-center py-10">
            <router-link
                to="/list-all"
                class="text-[var(--cl-yellow)] bg-white rounded-md text-base font-semibold border-2 border-[var(--cl-yellow)] px-9 py-3 hover:bg-[var(--cl-yellow)] hover:text-white duration-200"
                >Xem thêm</router-link
            >
        </div>
    </div>
</template>

<script>
import CardItemSkeleton from '@/components/LoadingCpn/CardItemSkeleton.vue'
import CardItemVue from '@/components/Clients/cardItem/CardItem.vue'
export default {
    props: ['itemsPosts', 'statusLoading'],
    data() {
        return {
            time: '',
        }
    },
    components: {
        CardItemVue,
        CardItemSkeleton,
    },
}
</script>

<style></style>
