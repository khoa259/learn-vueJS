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
        <div
            class="lg:flex lg:gap-5 lg:px-0 sm:blocks sm:px-4 bg-white rounded-md"
        >
            <Sidebar :isModalVisible="isShow" />
            <div class="lg:w-4/5 md:w-4/5 sm:w-full">
                <div
                    class="grid lg:grid-cols-3 lg:px-0 lg:gap-4 md:grid-cols-2 md:gap-3 md:px-5 sm:grid-cols-2 sm:gap-3 container"
                >
                    <div
                        v-for="(item, index) in items"
                        :key="index"
                        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 cursor-pointer hover:shadow-lg"
                    >
                        <CartItem :item="item" />
                    </div>
                </div>
                <Pagination />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import CartItem from '@/components/Clients/cartItem/CartItem.vue'
import Sidebar from '@/components/Clients/sideBar/SideBar.vue'
import Pagination from '@/components/Pagination.vue'
export default {
    components: {
        CartItem,
        Sidebar,
        Pagination,
    },
    data() {
        return {
            page: 0,
            isShow: true,
        }
    },
    computed: {
        items() {
            return this.$store.state.postsMod.ItemPosts
        },
        countPage() {
            return this.$store.state.postsMod.NumberItemPosts
        },
    },

    created() {
        this.getAllPosts()
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
