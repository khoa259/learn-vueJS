import instance from "./instance";

export default {
  getPosts() {
    const url = `/getPosts`;
    return instance.get(url);
  },
  createPosts(payload) {
    const url = "/creatPosts";
    return instance.post(url, payload);
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
};
