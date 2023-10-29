import HomePage from "../pages/HomePage.vue";
import Contact from "../pages/Contact.vue";
import About from "../pages/About.vue";
import Posts from "../pages/Posts.vue";
import ChatRoom from "../pages/ChatRoom.vue";

import { createRouter, createWebHistory } from "vue-router";
export const routes = [
  { path: "/", component: HomePage, label: "Trang chủ" },
  { path: "/about", component: About, label: "Giới thiệu" },
  { path: "/contact", component: Contact, label: "Liên hệ" },
  { path: "/posts", component: Posts, label: "Thêm bài viết" },
  { path: "/message", component: ChatRoom, label: "Chat" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
