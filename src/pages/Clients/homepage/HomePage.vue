<template>
    <div class="homepage">
        <img
            src="./img/ndo_br_3-8417.jpg"
            alt=""
            class="homepage_image relative"
        />
        <div
            class="lg:block md:hidden sm:hidden absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/3"
        >
            <div class="lg:flex lg:gap-2 max-h-[380px] mt-6 container">
                <Banner />
                <!-- <Weather /> -->
            </div>
        </div>
        <div class="container flex justify-center pt-8">
            <BoxItemCate :itemsCategories="categories" />
        </div>
        <div class="container sub_banner pt-8">
            <img
                src="https://www.shutterstock.com/image-vector/march-8-happy-womens-day-260nw-1029869584.jpg"
                alt=""
            />
        </div>
        <div class="pt-8 static lg:px-0 md:px-5 sm:px-4">
            <PostsTopView :itemsPostsTopView="postsTopView" />
        </div>
        <div class="pt-8 static lg:px-0 md:px-5 sm:px-4">
            <NewEatingArea :itemsPosts="posts" />
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Banner from '@/components/Clients/Homepage/Banner.vue'
import BoxItemCate from '@/components/Clients/Homepage/BoxItemCate.vue'
import NewEatingArea from '@/components/Clients/Homepage/NewEatingArea.vue'
import PostsTopView from '@/components/Clients/Homepage/PostsTopView.vue'
export default {
    name: 'HomePage',
    components: {
        Banner,
        BoxItemCate,
        NewEatingArea,
        PostsTopView,
    },
    computed: mapState({
        categories: (state) => state.categoryMod.itemCate,
        posts: (state) => state.postsMod.ItemPosts,
        postsTopView: (state) => state.postsMod.ItemPostsTopView,
    }),

    created() {
        setTimeout(() => {
            this.getItemCate()
            this.getAllPosts()
        }, 1200)
    },
    methods: {
        ...mapActions(['getAllPosts', 'getItemCate']),
    },
}
</script>

<style scoped>
.homepage {
    background-color: rgb(243, 230, 214);
}
.homepage_image {
    width: 100%;
    max-height: 700px;
    object-fit: cover;
    filter: brightness(0.8);
}
.sub_banner img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}
</style>
