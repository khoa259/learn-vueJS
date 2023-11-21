import actionsPosts from "./actions";
import gettersPosts from "./getters";
import mutationsPost from "./mutaitions";

const postModules = {
  state: {
    ItemPosts: [],
  },
  getters: gettersPosts,
  mutations: mutationsPost,
  actions: actionsPosts,
};
export default postModules;
