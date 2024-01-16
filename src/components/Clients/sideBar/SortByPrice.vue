<template>
    <div>
        <div class="text-base font-medium pb-2">Quận/Huyện</div>
        <select
            class="bg-gray-50 border border-[var(--cl-yellow)] text-gray-900 mb-6 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="idDistrict"
            @change="handleGetPostsByDistrict(idDistrict)"
        >
            <option class="text-[var(--cl-yellow)]" value="" selected>
                Tất cả
            </option>
            <option
                class="max-h-20"
                v-for="(item, index) in itemDistrict"
                :key="index"
                :value="item.district_id"
            >
                {{ item.district_name }}
            </option>
        </select>
    </div>
</template>

<script>
import API_PROVINCE from '@/api/province'
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            itemDistrict: [],
            idDistrict: '',
        }
    },
    created() {
        this.getDistrict()
    },
    methods: {
        ...mapActions(['SearchPost', 'getAllPosts']),
        getDistrict() {
            API_PROVINCE.apiGetDistricts('01').then((res) => {
                this.itemDistrict = res.data.results
            })
        },
        handleGetPostsByDistrict(e) {
            console.log('e', e)
            if (e) {
                setTimeout(() => {
                    this.SearchPost(e)
                }, 1000)
            } else {
                return this.getAllPosts()
            }
        },
    },
}
</script>

<style></style>
