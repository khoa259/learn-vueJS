import API_POSTS from "@/api/posts.js";
const actionsPosts = {
  async createPosts({ commit, dispatch }, payload) {
    try {
      const { data } = await API_POSTS.createPosts(payload);
      commit("CreatePosts", data);
      dispatch("GetAllPosts");
    } catch (error) {
      console.log("Error");
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
  async getPostsRelated({ commit }, { id }) {
    try {
      const { data } = await API_POSTS.getPostsRelated(id);
      commit("GetPostsRelated", data.related);
    } catch (error) {
      console.log(error);
    }
  },
};
export default actionsPosts;
