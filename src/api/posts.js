import instance from "./instance";

export default {
  getPosts() {
    const url = "/getPosts";
    return instance.get(url);
  },
  createPosts(payload) {
    const url = "creatPosts";
    return instance.post(url, payload);
  },
};
