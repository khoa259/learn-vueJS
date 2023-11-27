<template>
  <div>
    <nav class="bg-zinc-800 border-gray-200 dark:bg-gray-900">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <router-link to="/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
        </router-link>

        <div class="flex items-center md:order-2">
          <div class="flex space-x-7">
            <router-link
              v-if="local"
              class="text-white text-base font-normal pr-4"
              to="/admin"
              >Quản trị viên</router-link
            >
            <button @click="showModal">
              <i class="fa-solid fa-magnifying-glass text-gray-200"></i>
            </button>
            <div class="dropdown">
              <button class="dropbtn text-gray-200">
                <i class="fa-solid fa-user"></i>
              </button>
              <div class="dropdown-content">
                <router-link to="/auth" v-if="local === null"
                  >đăng nhập</router-link
                >
                <div
                  v-if="local !== null"
                  class="block users_info border-b-2 border-slate-600"
                >
                  <p class="text-sm text-gray-900 dark:text-white" role="none">
                    {{ local.userName }}
                  </p>
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                    role="none"
                  >
                    {{ local.email }}
                  </p>
                </div>
                <router-link to="/profile" v-if="local !== null"
                  >Thông tin cá nhân</router-link
                >

                <router-link to="/profile" v-if="local !== null"
                  >Đăng xuất</router-link
                >
              </div>
            </div>
          </div>
          <!-- Dropdown menu -->
          <div
            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li v-for="item in menuItems.slice(0, 4)" :key="item">
                <router-link
                  :to="item.path"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >{{ item.label }}</router-link
                >
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
            @click="toggleMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
          :class="{ open: isOpen }"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-none md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-none dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li v-for="item in menuItems.slice(0, 4)" :key="item">
              <router-link
                :to="item.path"
                class="block py-2 pl-3 pr-4 text-gray-200 rounded md:bg-transparent"
                aria-current="page"
                >{{ item.label }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <SearchItem v-show="isOpen" @closeModal="showModal" />
  </div>
</template>

<script>
import { urlRouter } from "@/utils/contants";
import SearchItem from "./search/SearchItem.vue";
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false,
      menuItems: urlRouter,
      local: JSON.parse(localStorage.getItem("user")),
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    showModal() {
      this.isOpen = !this.isOpen;
    },
  },
  components: { SearchItem },
};
</script>

<style scoped>
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
