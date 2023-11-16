import instance from "./instance";

export default {
  getCategory() {
    const url = "/getAllCategory";
    return instance.get(url);
  },
  creatCategory(payload) {
    const url = "/creatCategory";
    return instance.post(url, payload);
  },
};
