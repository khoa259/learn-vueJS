<template>
    <div class="bg-white">
        <button
            @click="showDrawer"
            class="lg:hidden md:hidden sm:inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
            <span class="sr-only">Open sidebar</span>
            <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
            </svg>
        </button>

        <div
            v-if="isShow"
            id="default-sidebar"
            class="fixed lg:block lg:w-64 md:w-52 md:block top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div
                v-if="isVisibleIconTogle"
                class="absolute -right-5 top-1/2 bg-white p-2 rounded-r-lg"
            >
                <button @click="showDrawer">
                    <i class="fa-solid fa-backward"></i>
                </button>
            </div>
            <div
                class="flex justify-between flex-col h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800"
            >
                <div class="sidebar">
                    <ul class="space-y-2 font-medium">
                        <li
                            v-for="(item, index) in MenuItem.slice(0, 5)"
                            :key="index"
                        >
                            <router-link
                                @click="showDrawer"
                                :to="`/admin/${item.path}`"
                                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 focus:bg-gray-200 dark:hover:bg-gray-700 group"
                            >
                                <i class="text-xl" :class="item.icon"></i>

                                <span class="ml-4">{{ item.label }}</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                to="/"
                                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 focus:bg-gray-200 dark:hover:bg-gray-700 group"
                            >
                                <i
                                    class="fa-solid fa-earth-americas text-xl"
                                ></i>

                                <span class="ml-4">Trang chủ</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3
                        class="text-center pt-3 border-t-2 border-black font-medium text-lg"
                    >
                        Xin chào, {{ local ? local.userName : null }}
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { urlRouterAdmin } from '@/utils/contants.js'
export default {
    data() {
        return {
            MenuItem: urlRouterAdmin,
            local: JSON.parse(localStorage.getItem('user')),
            isShow: true,
            isVisibleIconTogle: false,
            widthScreen: window.innerWidth,
        }
    },
    mounted() {
        this.showDrawer()
        window.addEventListener('resize', this.updateWindowWidth)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateWindowWidth)
    },
    methods: {
        showDrawer() {
            this.isShow = !this.isShow
        },
        updateWindowWidth() {
            this.widthScreen = window.innerWidth
            if (this.widthScreen < 700) {
                this.isShow = false
                this.isVisibleIconTogle = true
            } else {
                this.isShow = true
                this.isVisibleIconTogle = false
            }
        },
    },
}
</script>

<style></style>
