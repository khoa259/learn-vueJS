const gettersPosts = {
  get8Posts(state) {
    if (state.ItemPosts.getAll) {
      return state.ItemPosts.getAll.slice(0, 4);
    }
  },
};
export default gettersPosts;
