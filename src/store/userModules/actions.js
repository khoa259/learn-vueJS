import API_USERS from "../../api/user.js";
export const actions = {
  async addWishList({ commit }, payload) {
    const { data } = await API_USERS.addWishlist(payload);
    commit("AddWishList", data.response);
  },
  async removeWishList({ commit }, payload) {
    const { data } = await API_USERS.removeWishlist(payload);
    commit("RemoveWishList", data.response);
  },
  async wishLists({ commit }, { email }) {
    const { data } = await API_USERS.Wishlist(email);
    console.log("payload action", email);
    commit("WishLists", data.response);
  },
};
