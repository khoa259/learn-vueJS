<template>
    <nav class="border-gray-200 bg-zinc-800 dark:bg-gray-900">
        <div
            class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-2 py-1"
        >
            <router-link to="/" class="flex items-center">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    class="mr-3 h-8"
                    alt="Flowbite Logo"
                />
                <!-- <WeatherIcon :itemWeather="dataWeather" /> -->
            </router-link>

            <div class="flex items-center md:order-2">
                <div class="flex space-x-5">
                    <router-link
                        v-if="roleAdmin === 1"
                        class="pr-4 text-base font-normal text-white sm:hidden"
                        to="/admin"
                        >Quản trị viên</router-link
                    >
                    <button @click="showSearch">
                        <i
                            class="fa-solid fa-magnifying-glass text-gray-200"
                        ></i>
                    </button>
                    <div class="dropdown">
                        <button class="dropbtn text-gray-200">
                            <i class="fa-solid fa-user"></i>
                        </button>
                        <div class="dropdown-content">
                            <router-link
                                to="/auth"
                                v-if="local === null"
                                @click="logout"
                                >đăng nhập</router-link
                            >
                            <div
                                v-if="local !== null"
                                class="users_info block border-b-2 border-slate-600"
                            >
                                <p
                                    class="text-sm text-gray-900 dark:text-white"
                                    role="none"
                                >
                                    {{ local.userName }}
                                </p>
                                <p
                                    class="truncate text-sm font-medium text-gray-900 dark:text-gray-300"
                                    role="none"
                                >
                                    {{ local.email }}
                                </p>
                            </div>
                            <router-link to="/profile" v-if="local !== null"
                                >Thông tin cá nhân</router-link
                            >

                            <router-link
                                to="/profile"
                                v-if="local !== null"
                                @click="logout"
                                >Đăng xuất</router-link
                            >
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 dark:text-gray-400 dark:hover:bg-gray-700 md:hidden"
                    @click="toggleMenu"
                >
                    <i class="fa-solid fa-bars text-2xl text-white"></i>
                </button>
            </div>
            <div
                class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
                id="navbar-user"
                :class="{ open: isOpen }"
            >
                <ul
                    class="flex flex-col rounded-lg bg-none p-4 font-medium md:mt-0 md:flex-row md:space-x-8"
                >
                    <li
                        v-for="item in menuItems.slice(0, 4)"
                        :key="item"
                        @click="toggleMenu"
                    >
                        <router-link
                            :to="item.path"
                            class="sm:block rounded py-2 pl-3 pr-4 text-white md:bg-transparent"
                            aria-current="page"
                            >{{ item.label }}</router-link
                        >
                    </li>
                    <li>
                        <router-link
                            v-if="roleAdmin === 1"
                            class="sm:block rounded py-2 pl-3 pr-4 text-white md:bg-transparent"
                            to="/admin"
                            >Quản trị viên</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
        <SearchItem v-show="isOpenModal" @closeModal="showSearch" />
    </nav>
</template>

<script>
import { urlRouter } from '@/utils/contants'
import SearchItem from './search/searchItem.vue'
import WeatherIcon from './WeatherIcon.vue'
export default {
    name: 'NavBar',
    data() {
        return {
            dataWeather: {},
            isOpenModal: false,
            isOpen: false,
            menuItems: urlRouter,
            local: JSON.parse(localStorage.getItem('user')),
            roleAdmin: JSON.parse(localStorage.getItem('role')),
        }
    },
    // get weather
    // computed: {
    //     getAPIWeather() {
    //         axios
    //             .get(import.meta.env.VITE_APP_API_WEATHER)
    //             .then((res) => (this.dataWeather = res.data))
    //     },
    // },
    // mounted() {
    //     setTimeout(() => {
    //         this.getAPIWeather
    //     }, 200)
    // },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
        },
        showModal() {
            this.isOpen = !this.isOpen
        },
        showSearch() {
            this.isOpenModal = !this.isOpenModal
        },
        logout() {
            if (this.local) {
                localStorage.clear()
                this.$router.push('/auth')
            }
        },
    },
    components: { SearchItem, WeatherIcon },
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
}
.open {
    display: block;
}
.dropbtn {
    font-size: 16px;
    margin-right: 5px;
    border: none;
}
.dropdown {
    position: relative;
    display: inline-block;
}
.dropdown-content {
    display: none;
    right: 0;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 220px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}
.dropdown-content a {
    color: #6b6b6b;
    padding: 8px 16px;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    display: block;
}
.users_info {
    padding: 8px 16px;
}

.dropdown-content a:hover {
    background-color: #ebe8e8;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>
