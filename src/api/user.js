import instance from "./instance";

export default {
  addWishlist(payload) {
    const url = "/wishlist";
    return instance.post(url, payload);
  },
  removeWishlist(payload) {
    const url = "/rm_wishlist";
    return instance.put(url, payload);
  },
  Wishlist(payload) {
    console.log("payload", payload);
    const url = `/wishlists?email=${payload}`;
    return instance.get(url, payload);
  },
};
