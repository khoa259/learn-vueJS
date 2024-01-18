<template>
    <div
        class="w-full lg:w-1/4 bg-slate-50 shadow-md rounded-lg p-5 sm:h-60 max-h-[60vh]"
    >
        <h2 class="capitalize text-xl font-semibold">có thể bạn thích</h2>
        <div
            class="mt-3 flex lg:flex-col lg:overflow-y-auto lg:space-y-2 lg:space-x-0 md:space-y-2 md:overflow-y-auto sm:space-x-2 sm:overflow-x-auto h-[90%] relative"
        >
            <div
                class="flex flex-col"
                v-for="(item, index) in postRelated"
                :key="index"
            >
                <router-link
                    :to="`${item._id}`"
                    @click="next(item._id)"
                    class="flex lg:flex-row md:flex-row sm:flex-col sm:space-x-2 pb-2 border-b-2 lg:w-full lg:h-full sm:w-40 sm:h-60"
                >
                    <img
                        :src="item.imagePosts"
                        class="lg:max-h-24 rounded lg:w-20 md:max-h-24 md:w-20 sm:w-full sm:min-h-60"
                        alt=""
                    />
                    <div class="flex flex-col justify-between sm:mt-2">
                        <h2 class="line-clamp-2 text-md font-semibold">
                            {{ item.title }}
                        </h2>
                        <span class="text-[var(--cl-yellow)]"
                            >{{ item.review }} views</span
                        >
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: ['postRelated'],

    methods: {
        ...mapActions(['getPostsDetail']),
        next(id) {
            this.getPostsDetail({ id })
        },
    },
}
</script>

<style scoped>
::-webkit-scrollbar {
    width: 5px;
}
::-webkit-scrollbar-track {
    background: #f3f3f3;
}

::-webkit-scrollbar-thumb {
    background: rgb(217, 217, 217);
}
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
