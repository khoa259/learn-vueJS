import API_DASHBOARD from "../../api/dashboard";

const actionsDashBoard = {
  async getPostsTopTrend({ commit }) {
    const { data } = await API_DASHBOARD.getPostsTrending();
    commit("GetPostsTopTrend", data.response);
  },
};
export default actionsDashBoard;
