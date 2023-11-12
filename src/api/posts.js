import instance from "./instance";

export default {
  getPosts() {
    const url = "/getPosts";
    return instance.get(url);
  },
};
