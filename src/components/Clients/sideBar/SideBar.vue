<template>
    <div
        v-if="isModalVisible"
        class="lg:w-1/4 max-h-[500px] bg-white lg:sticky md:sticky px-2 py-3 top-2"
    >
        <div class="text-[var(--cl-yellow)] uppercase font-semibold">
            <i class="fa-solid fa-filter"></i>
            danh mục và địa điểm
        </div>
        <div class="flex flex-col gap-4 mt-5">
            <InputSearch />
            <ListAllCategory />
            <SortByPrice />
        </div>
    </div>
</template>

<script>
import InputSearch from './InputSearch.vue'
import ListAllCategory from './ListAllCategory.vue'
import SortByPrice from './SortByPrice.vue'

export default {
    name: 'SideBar',
    components: { InputSearch, ListAllCategory, SortByPrice },
    props: ['isModalVisible'],
    data() {
        return {
            isVisible: true,
        }
    },
    computed: {
        showModal() {
            this.isModalVisible
            console.log('iteim', this.isModalVisible)
        },
    },
}
</script>

<style></style>
