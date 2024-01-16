const MutationCategories = {
  getAllCategories(state, ItemCate) {
    state.itemCate = ItemCate;
  },
  CreateCategories(state, ItemCate) {
    state.itemCate = ItemCate;
  },
  GetDetailCate(state, ItemCate) {
    state.itemCateDetail = ItemCate;
  },
  UpdateCate(state, ItemCate) {
    state.itemCate = ItemCate;
  },
};
export default MutationCategories;
