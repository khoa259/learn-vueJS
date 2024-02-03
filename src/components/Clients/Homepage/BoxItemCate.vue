<template>
    <div class="w-full lg:p-0 md:px-3 sm:px-4">
        <h2 class="titleCate">lựa chọn nhanh chóng</h2>
        <div class="mt-6 flex space-x-3 overflow-x-auto">
            <div
                class="flex flex-col max-w-[180px] h-48 flex-shrink-0 overflow-hidden rounded-md bg-[var(--cl-yellow)] p-4"
                v-for="(item, index) in itemsCategories"
                :key="index"
            >
                <div
                    class="px-4 text-center text-base font-medium uppercase text-slate-700"
                >
                    <p>{{ item.nameCate }}</p>
                </div>
                <router-link :to="item._id" class="mt-2">
                    <img
                        class="rounded-lg h-[130px] w-[130px] object-cover"
                        :src="item.imageCate && item.imageCate.url"
                        :alt="item.nameCate"
                    />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['itemsCategories'],
}
</script>

<style></style>
