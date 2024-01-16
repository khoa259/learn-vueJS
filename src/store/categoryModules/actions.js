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
  async getDetailCate({ commit, dispatch }, { id }) {
    try {
      const { data } = await API_CATEORIES.getCategoryDetail(id);
      commit("GetDetailCate", data.response);
      dispatch("getItemCate");
    } catch (error) {}
  },
  async updateCate({ commit, dispatch }, { id, payload }) {
    try {
      const { data } = await API_CATEORIES.updateCategory(id, payload);
      console.log("payload gửi lên", data);
      commit("UpdateCate", data);
      dispatch("getItemCate");
    } catch (error) {
      console.log(error);
    }
  },
};
export default ActionCategories;
