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
      commit("GetAllPosts", data.response.getAll);
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
      console.log("data action", data.response);
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
};
export default actionsPosts;
