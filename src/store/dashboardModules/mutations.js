const mutationsDashBoard = {
  GetPostsTopTrend(state, Items) {
    state.PostsTrending = Items.TopTrending;
  },
};
export default mutationsDashBoard;
