import { createStore } from "vuex";
import categoriesModules from "./categoryModules/index";
import postModules from "./postsModules";
import userModules from "./userModules";
// Create a new store instance.
const store = createStore({
  modules: {
    categoryMod: categoriesModules,
    postsMod: postModules,
    userMod: userModules,
  },
});
export default store;
