import actionsDashBoard from "./actions";
import mutationsDashBoard from "./mutations";

const dashboardModule = {
  state: {
    PostsTrending: [],
  },
  actions: actionsDashBoard,
  mutations: mutationsDashBoard,
};
export default dashboardModule;
