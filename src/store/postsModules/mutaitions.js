const mutationsPost = {
  CreatePosts(state, ItemPosts) {
    state.ItemPosts = ItemPosts;
  },
  GetAllPosts(state, ItemPosts) {
    console.log("items", ItemPosts);
    state.ItemPosts = ItemPosts;
  },
};
export default mutationsPost;
