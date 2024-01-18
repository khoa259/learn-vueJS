<template>
    <div class="w-full p-0 sm:px-4">
        <h2 class="titleCate">lựa chọn nhanh chóng</h2>
        <div class="pt-6 flex space-x-3 overflow-x-auto">
            <figure
                class="flex flex-col max-w-[180px] h-48 flex-shrink-0 overflow-hidden rounded-md bg-[var(--cl-yellow)] px-3 py-8"
                v-for="(item, index) in itemsCategories"
                :key="index"
            >
                <figcaption
                    class="px-4 text-center text-base font-medium uppercase text-slate-700"
                >
                    <p>{{ item.nameCate }}</p>
                </figcaption>
                <router-link :to="item._id">
                    <img
                        class="rounded-lg"
                        :src="item.imageCate"
                        alt="image description"
                    />
                </router-link>
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    props: ['itemsCategories'],
}
</script>

<style></style>
