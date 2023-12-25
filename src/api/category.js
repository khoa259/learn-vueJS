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
  getCategoryDetail(id) {
    const url = `/getCategory/${id}`;
    return instance.get(url);
  },
  updateCategory(id, payload) {
    const url = `/updateCategory/${id}`;
    return instance.put(url, payload);
  },
};
