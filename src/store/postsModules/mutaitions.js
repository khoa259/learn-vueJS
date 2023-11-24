const mutationsPost = {
  CreatePosts(state, ItemPosts) {
    state.ItemPosts = ItemPosts;
  },
  GetAllPosts(state, ItemPosts) {
    state.ItemPosts = ItemPosts;
  },
  GetPostsDetail(state, ItemPosts) {
    state.ItemPosts = ItemPosts;
  },
  GetPostsRelated(state, ItemPosts) {
    state.ItemPostsRelated = ItemPosts;
  },
};
export default mutationsPost;
