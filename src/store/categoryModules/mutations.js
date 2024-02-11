const MutationCategories = {
    StatusLoading(state, status) {
        state.loading = status
    },
    GetAllCategories(state, ItemCate) {
        state.itemCate = ItemCate
    },
    CreateCategories(state, ItemCate) {
        state.itemCate = ItemCate
    },
    GetDetailCate(state, ItemCate) {
        state.itemCateDetail = ItemCate
    },
    UpdateCate(state, ItemCate) {
        state.itemCate = ItemCate
    },
}
export default MutationCategories
