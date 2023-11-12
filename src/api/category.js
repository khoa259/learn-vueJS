import instance from "./instance";

export default {
  getCategory() {
    const url = "/getAllCategory";
    return instance.get(url);
  },
};
