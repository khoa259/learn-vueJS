<template>
    <div class="grid gap-6 mb-6 md:grid-cols-3">
        <div>
            <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Thành phố/Tỉnh</label
            >
            <select
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="getProvinceId.province"
                @change="handleGetProvinceId"
            >
                <option selected>--Chọn Thành phố/Tỉnh--</option>

                <option
                    v-for="item in api.province"
                    :key="item.province_id"
                    :value="item.province_id"
                >
                    {{ item.province_name }}
                </option>
            </select>
        </div>
        <div>
            <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Quận/Huyện</label
            >
            <select
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="getProvinceId.district"
                @change="handleGetDistrictId"
                :disabled="!getProvinceId.province"
            >
                <option selected>--Chọn Quận/Huyện--</option>
                <option
                    v-for="item in api.district"
                    :key="item.district_id"
                    :value="item.district_id"
                >
                    {{ item.district_name }}
                </option>
            </select>
        </div>
        <div>
            <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Phường/Xã</label
            >
            <select
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="getProvinceId.ward"
                @change="handleGetWardId"
                :disabled="!getProvinceId.district"
            >
                <option selected>--Chọn Phường/Xã--</option>
                <option
                    v-for="item in api.ward"
                    :key="item.ward_id"
                    :value="item.ward_id"
                >
                    {{ item.ward_name }}
                </option>
            </select>
        </div>
        <div>province: {{ posts.province }}</div>
    </div>
</template>

<script>
import API_PROVINCE from '@/api/province.js'
export default {
    data() {
        return {
            getProvinceId: {
                province: null,
                district: null,
                ward: null,
            },
            api: {
                province: [],
                district: [],
                ward: [],
            },
            posts: {
                province: null,
                district: null,
                ward: null,
            },
        }
    },
    created() {
        this.handleGetProvinceId()
        console.log(1)
    },

    methods: {
        handleGetProvinceId() {
            API_PROVINCE.apiGetProvince().then((res) => {
                this.api.province = res.data.results
            })
        },
        handleGetDistrictId() {
            API_PROVINCE.apiGetDistricts(this.getProvinceId.province).then(
                (res) => {
                    this.api.district = res.data.results
                }
            )
        },
        handleGetWardId() {
            API_PROVINCE.apiGetWard(this.getProvinceId.district).then((res) => {
                this.api.ward = res.data.results
            })
        },
        findProvinceNameById(id) {
            const val = this.api.province((item) => item.province_id === id)
            console.log(val)
            return val ? val.province_name : null
        },
        getProvinceNameById() {
            this.posts.province = this.findProvinceNameById(
                this.getProvinceId.province
            )
        },
    },
}
</script>

<style></style>
