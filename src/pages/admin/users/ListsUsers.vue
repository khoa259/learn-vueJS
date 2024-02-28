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

            <Tabs :tabs="tabs">
                <template v-slot="{ activeTab }">
                    <div v-if="tabs[activeTab]">
                        <component :is="tabs[activeTab].component"></component>
                    </div>
                </template>
            </Tabs>
        </div>
    </div>
</template>

<script>
import Author from '@/api/auth'

import { formatDateFull } from '@/utils/contants.js'
import Tabs from '@/components/Clients/Tabs/Tabs.vue'
import SelectLocation from '@/components/Admin/SelectLocation.vue'
import ModalComponent from '@/components/ModalComponent.vue'
import UserTable from '@/components/Admin/usersManager/UserTable.vue'
import AdminTable from '@/components/Admin/usersManager/AdminTable.vue'

export default {
    components: { SelectLocation, ModalComponent, Tabs, AdminTable, UserTable },

    data() {
        return {
            user: {
                userName: '',
                role: 0,
                email: '',
                password: '',
            },
            tabs: [
                { label: 'Người dùng', component: 'UserTable' },
                { label: 'Quản trị viên', component: 'AdminTable' },
            ],
            updateRole: 0,
            isModalVisible: false,
        }
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
}
</script>

<style></style>
