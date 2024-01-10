import instance from "./instance";

export default {
  getPosts(page) {
    const url = `/getPosts?page=${page || 1}`;
    return instance.get(url);
  },
  createPosts(payload) {
    const url = "/creatPosts";
    return instance.post(url, payload);
  },
  createRandomPost() {
    const url = "/creatRandomPosts";
    return instance.post(url);
  },
  getPostsDetail(id) {
    const url = `/getById/${id}`;
    return instance.get(url);
  },
  getPostsById(id) {
    const url = `/readById/${id}`;
    return instance.get(url);
  },
  getPostsRelated(id) {
    const url = `/posts_related/${id}`;
    return instance.get(url);
  },
  searchPosts(key) {
    const url = `/search?search=${key}`;
    return instance.post(url, key);
  },
  getPostsByCategory(payload) {
    const url = `/getPostByCategories?category=${payload}`;
    return instance.post(url, payload);
  },
  editPosts(id, payload) {
    const url = `/updatePosts/${id}`;
    console.log("adpi", id);
    return instance.put(url, payload);
  },
  rmImage(payload) {
    const url = "/deleteImage";
    return instance.post(url, payload);
  },
  removePosts(id) {
    const url = `/removePosts/${id}`;
    return instance.delete(url);
  },
};
