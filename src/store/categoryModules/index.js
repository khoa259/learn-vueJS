import GetterCategories from "./getters";
import ActionCategories from "./actions";
import MutationCategories from "./mutations";
const categoriesModules = {
  namespace: true,
  state: {
    itemCate: [],
  },
  getters: GetterCategories,
  actions: ActionCategories,
  mutations: MutationCategories,
};
export default categoriesModules;
