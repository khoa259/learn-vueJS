import { createStore } from "vuex";
import categoriesModules from "./categoryModules/index";
import postModules from "./postsModules";
// Create a new store instance.
const store = createStore({
  modules: {
    categoryMod: categoriesModules,
    postsMod: postModules,
  },
});
export default store;
