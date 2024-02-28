<template>
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
                    <th scope="col" class="px-6 py-3">Ngày kích hoạt</th>
                    <th scope="col" class="px-6 py-3">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    v-for="(item, index) in dataUser"
                    :key="index"
                >
                    <td class="px-6 py-4 text-base w-10">
                        {{ index + 1 }}
                    </td>
                    <td class="px-6 py-4 text-base">
                        {{ item.userName }}
                    </td>
                    <td class="px-6 py-4 text-base">
                        {{ item.email }}
                    </td>
                    <td class="px-6 py-4 text-base w-36">
                        <span
                            class="text-white bg-green-500 px-4 py-1 rounded-md"
                            v-if="item.role === 0"
                            checked
                            >User</span
                        >
                        <span
                            class="text-white bg-purple-500 px-4 py-1 rounded-md"
                            v-else-if="item.role === 1"
                        >
                            Admin
                        </span>
                        <span
                            class="text-white bg-red-500 px-4 py-1 rounded-md"
                            v-else
                            >Lỗi phân quyền</span
                        >
                    </td>
                    <td class="px-6 py-4 text-base">
                        {{ formatDate(item.createdAt) }}
                    </td>
                    <td class="px-6 py-4 w-36">
                        <button
                            @click="showModal(e)"
                            class="text-[var(--cl-yellow)] text-base font-semibold capitalize"
                        >
                            xem
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <ModalComponent
            v-show="isModalVisible"
            @closeModal="hidenModal"
            @submitModal="onSubmit"
        >
            <template v-slot:title>Quản Lý Người Dùng</template>
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
                                disabled
                            />
                        </div>
                        <div class="role">
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Vai trò</label
                            >
                            <select
                                v-model="user.role"
                                class="bg-gray-50 border border-green-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-green-400"
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
                            disabled
                        />
                    </div>
                </form>
            </template>
        </ModalComponent>
    </div>
</template>

<script>
import API_AUTH from '@/api/auth.js'

import { formatDateFull } from '@/utils/contants'
import ModalComponent from '@/components/ModalComponent.vue'

export default {
    components: { ModalComponent },
    props: {
        dataUser: Array,
    },
    data() {
        return {
            isModalVisible: false,
            updateRole: '',
            user: {
                userName: '',
                role: 0,
                email: '',
                password: '',
            },
        }
    },
    methods: {
        formatDate(value) {
            return formatDateFull(value)
        },
        showModal() {
            this.isModalVisible = true
        },
        hidenModal() {
            this.isModalVisible = false
        },
        async handleChangeRole(e) {
            try {
                await API_AUTH.changeRole(e, { role: this.updateRole })
            } catch (error) {
                console.log(err)
            }
        },
        onSubmit() {},
    },
}
</script>

<style></style>
