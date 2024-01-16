import { createStore } from "vuex";
import categoriesModules from "./categoryModules/index";
import postModules from "./postsModules";
import userModules from "./userModules";
import dashboardModule from "./dashboardModules";
// Create a new store instance.
const store = createStore({
  modules: {
    dashboardMod: dashboardModule,
    categoryMod: categoriesModules,
    postsMod: postModules,
    userMod: userModules,
  },
});
export default store;
