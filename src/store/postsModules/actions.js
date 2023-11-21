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
};
export default actionsPosts;
