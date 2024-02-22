<template>
    <div class="posts_page">
        <div class="title_admin">
            <h1>quản lý người dùng</h1>
        </div>
        <div class="main pt-2">
            <div class="flex justify-between items-center py-4">
                <div>
                    <input type="text" placeholder="Tìm kiếm..." />
                </div>
                <div class="btn_action">
                    <button
                        @click="showModal"
                        type="button"
                        class="text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                        <i class="fa-solid fa-plus"></i>
                        Tao tài khoản
                    </button>
                </div>
            </div>

            <div class="relative">
                <table
                    class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                >
                    <thead
                        class="text-xs bg-white border-b-2 uppercas dark:bg-gray-700 dark:text-gray-400"
                    >
                        <tr>
                            <th scope="col" class="px-6 py-3">STT</th>
                            <th scope="col" class="px-6 py-3">Họ tên</th>
                            <th scope="col" class="px-6 py-3">Email</th>
                            <th scope="col" class="px-6 py-3">Phân quyền</th>
                            <th scope="col" class="px-6 py-3">
                                Ngày kích hoạt
                            </th>
                            <th scope="col" class="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            v-for="(item, index) in itemUser"
                            :key="index"
                        >
                            <td class="px-6 py-4 text-base font-medium w-10">
                                {{ index + 1 }}
                            </td>
                            <td class="px-6 py-4 text-base font-medium">
                                {{ item.userName }}
                            </td>
                            <td class="px-6 py-4 text-base font-medium">
                                {{ item.email }}
                            </td>
                            <td class="px-6 py-4 text-base font-medium w-36">
                                <select v-model="updateRole">
                                    <option value="" selected>
                                        {{ item.role === 1 ? 'user' : 'admin' }}
                                    </option>
                                    <option value="0">admin</option>
                                    <option value="1">user</option>
                                </select>
                            </td>
                            <td class="px-6 py-4 text-base font-medium">
                                {{ item.createdAt }}
                            </td>
                            <td class="px-6 py-4 w-36">
                                <button
                                    class="text-[var(--cl-yellow)] text-base font-semibold capitalize"
                                >
                                    xem
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <ModalComponent
            v-show="isModalVisible"
            @closeModal="hidenModal"
            @submitModal="onSubmit"
        >
            <template v-slot:title>Tạo tài khoản</template>
            <template v-slot:body>
                <form @submit.prevent="onSubmit">
                    <div class="mb-2 flex space-x-2">
                        <div class="fullname w-full">
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Họ tên</label
                            >
                            <input
                                type="text"
                                v-model="user.userName"
                                placeholder="Họ tên..."
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <div class="role">
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Vai trò</label
                            >
                            <select
                                v-model="user.role"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                            >
                                <option value="1">Admin</option>
                                <option value="0">Người dùng</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-2">
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Email</label
                        >
                        <input
                            v-model="user.email"
                            type="text"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div class="mb-2">
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Mật khẩu</label
                        >
                        <input
                            v-model="user.password"
                            type="text"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                </form>
            </template>
        </ModalComponent>
    </div>
</template>

<script>
import API_AUTH from '@/api/auth.js'
import Author from '@/api/auth'

import { formatDateFull } from '@/utils/contants.js'
import SelectLocation from '@/components/Admin/SelectLocation.vue'
import ModalComponent from '@/components/ModalComponent.vue'

export default {
    data() {
        return {
            user: {
                userName: '',
                role: 0,
                email: '',
                password: '',
            },
            itemUser: [],
            updateRole: 0,
            isModalVisible: false,
        }
    },
    created() {
        API_AUTH.getUser()
            .then((res) => {
                this.itemUser = res.data.response
            })
            .catch((err) => console.log('error', err))
    },
    methods: {
        getFormatDate(date) {
            return formatDateFull(date)
        },
        showModal() {
            this.isModalVisible = true
        },
        hidenModal() {
            this.isModalVisible = false
        },
        async onSubmit() {
            await Author.signup(this.user)
                .then((res) => {
                    this.isModalVisible = false
                    this.user = ''
                    alert(
                        `Đăng ký thành công, bạn vui lòng vào email để xác thực tài khoản`
                    )
                })
                .catch((err) => {
                    const { data } = err?.response
                    alert(`${data.message}`)
                })
        },
    },
    components: { SelectLocation, ModalComponent },
}
</script>

<style></style>
