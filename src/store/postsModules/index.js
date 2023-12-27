import actionsPosts from "./actions";
import gettersPosts from "./getters";
import mutationsPost from "./mutaitions";

const postModules = {
  state: {
    ItemPosts: [],
    ItemPostsDetail: [],
    ItemPostsRelated: [],
  },
  getters: gettersPosts,
  mutations: mutationsPost,
  actions: actionsPosts,
};
export default postModules;
