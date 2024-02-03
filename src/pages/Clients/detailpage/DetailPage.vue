<template>
    <div class="max-w-[1200px] mx-auto">
        <img src="./vietnam-flag-map-national-day-in.jpg" alt="" />
        <div class="flex space-x-3">
            <div class="w-full h-[1230px]">
                <div class="container_posts">
                    <HeaderPosts :item="detailPosts" />
                    <div
                        class="flex lg:flex-row lg:space-x-3 lg:space-y-0 md:space-x-2 sm:flex-col sm:space-y-4 mt-4 min-h-[60vh]"
                    >
                        <DescriptionPosts :item="detailPosts" />
                        <RelatedPosts :postRelated="postRelated" />
                    </div>
                    <Comment />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import HeaderPosts from '@/components/Clients/detailPosts/HeaderPosts.vue'
import DescriptionPosts from '@/components/Clients/detailPosts/DescriptionPosts.vue'
import SideBar from '@/components/Clients/sideBar/SideBar.vue'
import RelatedPosts from '@/components/Clients/detailPosts/RelatedPosts.vue'
import Comment from '@/components/Clients/detailPosts/Comment.vue'
export default {
    components: {
        SideBar,
        DescriptionPosts,
        HeaderPosts,
        RelatedPosts,
        Comment,
    },
    computed: mapState({
        detailPosts: (state) => state.postsMod.ItemPostsDetail,
        postRelated: (state) => state.postsMod.ItemPostsRelated,
    }),
    created() {
        const params = this.$route.params
        this.getPostsDetail(params)
        this.getPostsRelated(params)
    },
    methods: {
        ...mapActions(['getPostsDetail', 'getPostsRelated']),
    },
}
</script>

<style></style>
