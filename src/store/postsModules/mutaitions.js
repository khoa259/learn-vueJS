const mutationsPost = {
    SetLoading(state, status) {
        state.loading = status
    },
    CreatePosts(state, ItemPosts) {
        state.ItemPosts = ItemPosts
    },
    CreateRandomPosts(state, ItemPosts) {
        state.ItemPosts = ItemPosts
    },
    GetAllPosts(state, ItemPosts) {
        state.loading = true
        state.ItemPosts = ItemPosts.getAll
        state.ItemPostsTopView = ItemPosts.topView
        state.NumberItemPosts = ItemPosts.getLength
        state.limitItem = ItemPosts.limitItem
    },
    GetPostsById(state, ItemPosts) {
        state.ItemPosts = ItemPosts
    },
    GetPostsDetail(state, ItemPosts) {
        state.ItemPostsDetail = ItemPosts
    },
    GetPostsRelated(state, ItemPosts) {
        state.ItemPostsRelated = ItemPosts
    },
    GetSearchPosts(state, ItemPosts) {
        state.ItemPosts = ItemPosts
    },
    GetPostsByCate(state, ItemPosts) {
        state.ItemPosts = ItemPosts
    },
    UpdatePosts(state, ItemPosts) {
        state.ItemPosts = ItemPosts
    },
    DeletePosts(state, ItemPosts) {
        state.ItemPosts = ItemPosts
    },
}
export default mutationsPost
