<template>
    <div class="container">
        <div class="new_eating_area w-4/5">
            <h2 class="titleCate">top các bài viết</h2>
        </div>
        <div
            class="pt-6 grid lg:grid-cols-4 lg:px-0 lg:gap-4 md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-2"
            v-if="itemsPostsTopView"
        >
            <div
                v-for="(item, index) in itemsPostsTopView"
                :key="index"
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 cursor-pointer hover:shadow-lg"
            >
                <CartItemVue :item="item" />
            </div>
        </div>
        <div class="text-center my-10" v-else>Loading...</div>
    </div>
</template>

<script>
import CartItemVue from '@/components/Clients/cartItem/CartItem.vue'
export default {
    props: ['itemsPostsTopView'],
    data() {
        return {
            time: '',
        }
    },
    components: {
        CartItemVue,
    },
}
// console.log(this.time);
</script>

<style></style>
