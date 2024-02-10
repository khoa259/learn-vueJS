<template>
    <div
        v-if="item"
        class="bg-white rounded-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 cursor-pointer hover:shadow-lg"
    >
        <router-link :to="item._id">
            <img
                v-if="item.imagePosts"
                loading="lazy"
                class="rounded-t-lg h-52 w-full object-cover bg-gray-50"
                :src="item.imagePosts && item.imagePosts.url"
                :alt="item.title"
            />
            <img
                v-else
                loading="lazy"
                class="rounded-t-lg h-52 w-full object-cover bg-gray-50"
                src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                :alt="item.title"
            />
        </router-link>
        <div
            class="lg:p-5 md:p-4 sm:p-3 flex flex-col lg:space-y-5 sm:space-y-2"
        >
            <router-link
                :to="item._id"
                class="text-xl font-bold truncate tracking-tight text-gray-900 dark:text-white"
            >
                {{ item.title }}
            </router-link>
            <div class="h-8 lg:block sm:hidden">
                <p
                    class="mb-3 font-normal line-clamp-2 text-gray-500 dark:text-gray-400"
                >
                    {{ item.description }}
                </p>
            </div>
            <div class="info align-bottom">
                <div
                    class="lg:flex lg:flex-row lg:justify-between lg:h-8 lg:items-center md:h-12 md:flex-col md:space-y-1 md:mb-2 sm:flex sm:flex-col sm:space-y-3 sm:items-start"
                >
                    <span
                        class="timestamp text-[var(--cl-yellow)] font-normal text-sm flex gap-1 items-center"
                        >{{ formatDates(item.createdAt) }}</span
                    >
                    <span class="rating mt-0">
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
                <div
                    class="lg:flex md:flex justify-between items-center sm:hidden"
                >
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
                        class="text-sm w-20 text-end truncate font-medium underline underline-offset-4 decoration-solid decoration-2 text-[var(--cl-yellow)] decoration-[var(--cl-yellow)]"
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
            loading: true,
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
