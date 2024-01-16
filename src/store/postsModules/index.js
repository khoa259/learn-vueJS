import actionsPosts from "./actions";
import gettersPosts from "./getters";
import mutationsPost from "./mutaitions";

const postModules = {
  state: {
    ItemPosts: [],
    ItemPostsTopView: [],
    limitItem: 0,
    NumberItemPosts: 0,
    ItemPostsDetail: [],
    ItemPostsRelated: [],
  },
  getters: gettersPosts,
  mutations: mutationsPost,
  actions: actionsPosts,
};
export default postModules;
