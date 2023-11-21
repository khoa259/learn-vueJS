import API_CATEORIES from "@/api/category.js";

const ActionCategories = {
  async getItemCate({ commit }) {
    try {
      const { data } = await API_CATEORIES.getCategory();
      commit("getAllCategories", data.response);
    } catch (error) {
      console.log(error);
    }
  },
  async createCate({ commit, dispatch }, payload) {
    try {
      const { data } = await API_CATEORIES.creatCategory(payload);
      commit("CreateCategories", data);
      dispatch("getItemCate");
    } catch (error) {
      console.log(error);
    }
  },
};
export default ActionCategories;
