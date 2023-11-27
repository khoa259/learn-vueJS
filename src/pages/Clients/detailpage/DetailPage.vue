<template>
  <div class="max-w-[1200px] mx-auto">
    <img src="./vietnam-flag-map-national-day-in.jpg" alt="" />
    <div class="flex space-x-3">
      <div class="w-full h-[1230px]">
        <div
          class="container_posts"
          v-for="(item, index) in detailPost"
          :key="index"
        >
          <HeaderPosts :item="item" />
          <div class="flex space-x-3 mt-4">
            <DescriptionPosts :item="item" />
            <RelatedPosts :postRelated="postRelated" />
          </div>
          <Comment />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderPosts from "@/components/Clients/detailPosts/HeaderPosts.vue";
import DescriptionPosts from "@/components/Clients/detailPosts/DescriptionPosts.vue";
import SideBar from "@/components/Clients/sideBar/SideBar.vue";
import RelatedPosts from "@/components/Clients/detailPosts/RelatedPosts.vue";
import { mapActions, mapState } from "vuex";
import Comment from "../../../components/Clients/detailPosts/Comment.vue";
export default {
  components: {
    SideBar,
    DescriptionPosts,
    HeaderPosts,
    RelatedPosts,
    Comment,
  },
  computed: mapState({
    detailPost: (state) => state.postsMod.ItemPosts,
    postRelated: (state) => state.postsMod.ItemPostsRelated,
  }),
  created() {
    const params = this.$route.params;
    this.getPostsDetail(params);
    this.getPostsRelated(params);
    console.log("this.store", this.$store.state.postsMod);
  },
  methods: {
    ...mapActions(["getPostsDetail", "getPostsRelated"]),
  },
};
</script>

<style></style>
