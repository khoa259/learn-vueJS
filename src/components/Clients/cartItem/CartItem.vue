<template>
    <div v-if="item">
        <router-link :to="item._id">
            <img
                loading="lazy"
                class="rounded-t-lg h-52 w-full"
                :src="item.imagePosts"
                alt=""
            />
        </router-link>
        <div class="p-5 flex flex-col space-y-5">
            <router-link
                :to="item._id"
                class="mb-2 text-xl font-bold truncate tracking-tight text-gray-900 dark:text-white"
            >
                {{ item.title }}
            </router-link>
            <div class="h-8">
                <p
                    class="mb-3 font-normal line-clamp-2 text-gray-500 dark:text-gray-400"
                >
                    {{ item.description }}
                </p>
            </div>
            <div class="info align-bottom">
                <div class="flex justify-between h-8 items-center">
                    <span
                        class="timestamp text-[var(--cl-yellow)] font-normal text-sm flex gap-1 items-center"
                        >{{ formatDates(item.createdAt) }}</span
                    >
                    <span class="rating">
                        <div class="flex items-center">
                            <i class="fa-solid fa-star text-yellow-300"></i>
                            <p
                                class="ml-2 text-sm font-bold text-gray-900 dark:text-white"
                            >
                                {{ item.rating }}
                            </p>
                            <span
                                class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"
                            ></span>
                            <a
                                href="#"
                                class="text-sm font-md text-gray-900 no-underline dark:text-white"
                                >{{ formatNumberView(item.review) }} views</a
                            >
                        </div>
                    </span>
                </div>
                <div class="flex justify-between items-center">
                    <router-link
                        :to="item._id"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[var(--cl-yellow)] rounded-lg hover:bg-[var(--cl-yellow2)]"
                    >
                        Xem thêm
                        <svg
                            class="w-3.5 h-3.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </router-link>
                    <router-link
                        v-if="item.categoryId"
                        :to="item._id"
                        class="text-sm font-medium underline underline-offset-4 decoration-solid decoration-2 text-[var(--cl-yellow)] decoration-[var(--cl-yellow)]"
                        >{{ item.categoryId.nameCate }}</router-link
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { formatDate, formatNumberView } from '@/utils/contants'

export default {
    data() {
        return {
            idSave: null,
            isSave: false,
        }
    },
    props: ['item'],

    methods: {
        formatNumberView(e) {
            return formatNumberView(e)
        },
        formatDates(e) {
            return formatDate(e)
        },
    },
}
</script>

<style></style>
