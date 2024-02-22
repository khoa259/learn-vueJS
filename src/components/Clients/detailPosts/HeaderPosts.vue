<template>
    <div
        class="heading_posts bg-slate-50 lg:flex lg:justify-between md:flex md:justify-between sm:block shadow-md rounded-bl-lg rounded-br-lg p-4"
    >
        <div class="title lg:w-4/6 md:w-4/5 sm:w-full leading-loose">
            <h1 class="lg:text-3xl md:text-3xl sm:text-2xl font-bold">
                {{ item.title }}
            </h1>
            <span
                class="hidden lg:block md:block text-base font-semibold text-slate-600"
                >{{ item.title }}</span
            >
            <div class="border-t-2 my-3 flex flex-col space-y-2">
                <div
                    class="lg:hidden md:hidden sm:flex sm:justify-between sm:items-center sm:pt-1"
                >
                    <span class="text-base font-medium">
                        Giá: {{ formatPrice(item.pricemin) }} -
                        {{ formatPrice(item.pricemax) }} VNĐ
                    </span>
                    <button
                        class="text-[var(--cl-yellow)] text-sm px-4 py-1 rounded-md"
                        @click="handleSave(item._id)"
                        :class="[
                            item.statusSave
                                ? 'bg-sky-700 text-white border-2'
                                : 'text-[var(--cl-yellow)] border-2 border-[var(--cl-yellow)]',
                        ]"
                    >
                        {{ item.statusSave ? 'Bỏ thích !' : 'Yêu thích' }}
                    </button>
                </div>
                <div class="flex space-x-2 items-start">
                    <i
                        class="fa-solid fa-location-dot text-xl text-red-600"
                    ></i>
                    <p class="text-slate-700 font-medium text-base capitalize">
                        {{
                            item.fullAdress
                                ? item.fullAdress
                                : 'đang cập nhật địa chỉ'
                        }}
                    </p>
                </div>
                <div class="flex space-x-1 justify-start items-center">
                    <span
                        class="text-[var(--cl-yellow)] bg-white rounded-md text-sm font-semibold border-2 border-[var(--cl-yellow)] px-2 py-1"
                        ><i
                            class="fa-solid fa-calendar-days text-red-400 pr-2"
                        ></i>
                        {{ formatDate(item.createdAt) }}</span
                    >
                    <div
                        class="lg:hidden md:hidden sm:block sm:text-[var(--cl-yellow)] bg-white rounded-md text-sm font-semibold border-2 border-[var(--cl-yellow)] px-2 py-1"
                    >
                        <i class="fa-solid fa-eye pr-1 text-blue-500"></i>
                        {{ formatNumberView(item.review) }}
                    </div>
                    <div v-if="item.categoryId">
                        <router-link
                            :to="`/list-all/${item.categoryId._id}`"
                            class="text-[var(--cl-yellow)] bg-white rounded-md text-sm font-semibold border-2 border-[var(--cl-yellow)] px-2 py-1 hover:bg-[var(--cl-yellow)] hover:text-white duration-200"
                        >
                            {{
                                item.categoryId ? item.categoryId.nameCate : ''
                            }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="lg:flex lg:flex-col lg:justify-start lg:space-y-2 md:flex md:flex-col md:justify-start md:space-y-2 sm:hidden"
        >
            <div class="flex space-x-2 items-center">
                <i class="fa-solid fa-hand-holding-dollar text-xl"></i>
                <p class="text-slate-700 font-medium text-base">
                    {{ formatPrice(item.pricemin) }} -
                    {{ formatPrice(item.pricemax) }} VNĐ
                </p>
            </div>
            <div class="flex space-x-2 items-center">
                <i class="fa-regular fa-clock text-xl"></i>
                <p class="text-slate-700 font-medium text-base">
                    {{ item.timeopen }} - {{ item.timeclose }}
                </p>
            </div>
            <div class="flex space-x-2 items-center">
                <span
                    class="text-[var(--cl-yellow)] bg-white rounded-md text-sm font-semibold border-2 border-[var(--cl-yellow)] px-2 py-1"
                >
                    <i class="fa-solid fa-star text-yellow-400 pr-2"></i
                    >{{ item.rating }}
                </span>
                <span
                    class="text-[var(--cl-yellow)] bg-white rounded-md text-sm font-semibold border-2 border-[var(--cl-yellow)] px-2 py-1"
                >
                    <i class="fa-solid fa-eye pr-2 text-blue-500"></i>
                    {{ formatNumberView(item.review) }}</span
                >
            </div>
            <div class="block">
                <button
                    class="w-full border-[var(--cl-yellow)] text-[var(--cl-yellow)] border-2 py-1 rounded-lg"
                    @click="handleSave(item._id)"
                    :class="[
                        item.statusSave
                            ? 'bg-blue-700 text-white border-none'
                            : 'text-[var(--cl-yellow)]',
                    ]"
                >
                    {{ item.statusSave ? 'Bỏ thích' : 'Yêu thích' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import { formatPrice, formatDateFull, formatNumberView } from '@/utils/contants'
export default {
    props: ['item'],
    data() {
        return {
            isSave: false,
            local: JSON.parse(localStorage.getItem('user')),
        }
    },
    methods: {
        ...mapActions(['addWishList', 'removeWishList']),
        formatDate(value) {
            return formatDateFull(value)
        },
        formatPrice(value) {
            return formatPrice(value)
        },
        formatNumberView(value) {
            return formatNumberView(value)
        },
        handleSave(id) {
            if (this.local === null) {
                return alert('Bạn cần đăng nhập')
            } else {
                this.item.statusSave = this.isSave = !this.isSave
                const payload = {
                    email: this.local.email,
                    postsId: id,
                }
                if (this.isSave) {
                    this.addWishList(payload)
                } else {
                    this.removeWishList(payload)
                }
            }
        },
    },
}
</script>

<style></style>
