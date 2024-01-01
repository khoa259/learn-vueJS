import API_POSTS from "@/api/posts.js";
import { data } from "autoprefixer";
const actionsPosts = {
  async createPosts({ commit }, payload) {
    try {
      const { data } = await API_POSTS.createPosts(payload);
      commit("CreatePosts", data);
    } catch (error) {
      console.log("Error");
    }
  },
  async createRandomPosts({ commit }) {
    try {
      const { data } = await API_POSTS.createRandomPost();
      commit("CreateRandomPosts", data);
    } catch (error) {
      console.log("Error");
      // this.$toast.open({
      //   message: data.message,
      //   type: "error",
      //   position: "top-right",
      // });
    }
  },

  async getAllPosts({ commit }) {
    try {
      const { data } = await API_POSTS.getPosts();
      commit("GetAllPosts", data.response);
    } catch (error) {
      console.log(error);
    }
  },
  async getPostsDetail({ commit }, { id }) {
    try {
      const { data } = await API_POSTS.getPostsDetail(id);
      commit("GetPostsDetail", data.response);
    } catch (error) {
      console.log(error);
    }
  },
  async getPostsById({ commit }, { id }) {
    try {
      const { data } = await API_POSTS.getPostsById(id);
      commit("GetPostsById", data.response);
    } catch (error) {
      console.log(error);
    }
  },
  async getPostsRelated({ commit }, { id }) {
    try {
      const { data } = await API_POSTS.getPostsRelated(id);
      commit("GetPostsRelated", data.related);
    } catch (error) {
      console.log(error);
    }
  },
  async SearchPost({ commit }, payload) {
    try {
      const { data } = await API_POSTS.searchPosts(payload);
      commit("GetSearchPosts", data.response);
    } catch (error) {
      console.log(error);
    }
  },
  async getPostsByCate({ commit }, { categoryId }) {
    try {
      const { data } = await API_POSTS.getPostsByCategory(categoryId);
      commit("GetPostsByCate", data.response);
    } catch (error) {
      console.log(error);
    }
  },
  async updatePosts({ commit }, { id, payload }) {
    try {
      const { data } = await API_POSTS.editPosts(id, payload);
      commit("UpdatePosts", data.response);
    } catch (error) {
      console.log(error);
    }
  },
  async deletePosts({ commit, dispatch }, { id }) {
    try {
      const { data } = await API_POSTS.removePosts(id);
      commit("DeletePosts", data.response);
      dispatch("getAllPosts");
    } catch (error) {
      console.log(error);
    }
  },
};
export default actionsPosts;
