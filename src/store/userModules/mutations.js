export const mutations = {
    AddWishList(state, itemUser) {
        state.userStore = itemUser
    },
    RemoveWishList(state, itemUser) {
        state.userStore = itemUser
    },
    WishLists(state, itemUser) {
        console.log('item user', itemUser)
        state.userStore = itemUser
    },
}
