<template>
    <div class="container">
        <div class="lg:mt-5 md:mt-3 sm:pt-0">
            <img
                class="w-full rounded-md shadow-md max-h-72"
                src="./vietnam-flag-map-national-day-in.jpg"
                alt=""
            />
        </div>
        <h2 class="title-page">Bài viết</h2>
        <div class="flex lg:justify-end sm:justify-between sm:px-4 mb-2">
            <div>
                <button
                    class="lg:hidden md:hidden sm:block border-2 rounded-md border-[var(--cl-yellow)] px-2 py-1"
                    @click="showModal"
                >
                    <i class="fa-solid fa-bars text-[var(--cl-yellow)]"></i>
                </button>
            </div>
            <div>
                <select
                    name=""
                    id=""
                    class="py-1 rounded-md border-[var(--cl-yellow)]"
                >
                    <option class="text-[var(--cl-yellow)]" selected>
                        tất cả
                    </option>
                    <option value="">xem nhiều nhất</option>
                    <option value="">xem ít nhất</option>
                    <option value="">bài viết mới</option>
                </select>
            </div>
        </div>
        <div class="lg:flex lg:gap-5 lg:px-0 sm:blocks sm:px-4 rounded-md">
            <Sidebar :isModalVisible="isShow" />
            <div v-if="Loading" class="text-center w-full mt-8">
                <SpinLoading />
            </div>
            <div class="lg:w-4/5 md:w-4/5 sm:w-full" v-else>
                <div
                    class="grid lg:grid-cols-3 lg:px-0 lg:gap-4 md:grid-cols-2 md:gap-3 md:px-5 sm:grid-cols-2 sm:gap-3 container"
                >
                    <div
                        v-for="(item, index) in items"
                        :key="index"
                        class="max-w-sm bg-white"
                    >
                        <CardItemVue :item="item" />
                    </div>
                </div>
                <Pagination />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import { debounceCallAPI } from '@/utils/contants'
import SpinLoading from '@/components/LoadingCpn/SpinLoading.vue'
import CardItemVue from '@/components/Clients/cardItem/CardItem.vue'
import Sidebar from '@/components/Clients/sideBar/SideBar.vue'
import Pagination from '@/components/Pagination.vue'

export default {
    components: {
        CardItemVue,
        Sidebar,
        Pagination,
        SpinLoading,
    },
    data() {
        return {
            page: 0,
            isShow: true,
        }
    },
    computed: {
        ...mapState({
            items: (state) => state.postsMod.ItemPosts,
            countPage: (state) => state.postsMod.NumberItemPosts,
            Loading: (state) => state.postsMod.loading,
        }),
    },

    created() {
        setTimeout(() => {
            this.getAllPosts()
        }, 300)
    },
    methods: {
        ...mapActions(['getAllPosts']),
        showModal() {
            this.isShow = !this.isShow
        },
    },
}
</script>

<style></style>
