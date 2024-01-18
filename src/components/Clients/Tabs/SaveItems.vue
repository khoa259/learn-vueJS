<template>
    <div v-if="items">
        <div v-for="(itemWishlist, index) in items" :key="index">
            <div
                v-if="itemWishlist.wishlist"
                class="grid lg:grid-cols-5 lg:gap-4 md:grid-cols-4 md:gap-3 sm:grid-cols-2 sm:gap-3"
            >
                <div
                    v-for="(item, i) in itemWishlist.wishlist"
                    :key="i"
                    class="bg-gray-100"
                >
                    <div class="relative">
                        <router-link :to="item._id">
                            <img
                                loading="lazy"
                                class="rounded-lg h-64 w-full"
                                :src="item.imagePosts"
                                alt=""
                            />
                        </router-link>
                        <div class="absolute top-1 right-2">
                            <button
                                class="bg-none"
                                @click="handleRemove(item._id)"
                            >
                                <i
                                    class="fa-solid fa-circle-xmark text-indigo-900 text-2xl hover:text-red-600 duration-100"
                                ></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <span
                v-else
                class="text-base font-medium border-2 border-green-400 px-4 py-2 text-green-400 rounded-md"
                >Hiện chưa có bài viết yêu thích nào</span
            >
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import { formatPrice, formatDateFull } from '@/utils/contants'

export default {
    data() {
        return {
            local: JSON.parse(localStorage.getItem('user')),
        }
    },
    computed: {
        items() {
            return this.$store.state.userMod.userStore
        },
    },
    created() {
        console.log('store')
        this.wishLists({ email: this.local.email })
    },
    methods: {
        ...mapActions(['wishLists', 'removeWishList']),
        formatDate(value) {
            return formatDateFull(value)
        },
        formatPrice(value) {
            return formatPrice(value)
        },
        async handleRemove(e) {
            console.log(e)
            const payload = {
                email: this.local.email,
                postsId: e,
            }
            await this.removeWishList(payload)
            await this.wishLists({ email: payload.email })
        },
    },
}
</script>

<style></style>
