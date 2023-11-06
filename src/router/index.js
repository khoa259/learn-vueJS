import { urlRouter, urlRouterAuth } from "../utils/contants";

import Error404 from "../pages/404/404.vue";
import DefaulLayout from "../layouts/DefaultLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: DefaulLayout,
    children: urlRouter,
  },
  {
    path: "/auth",
    component: AuthLayout,
    redirect: "/login",
    children: urlRouterAuth,
  },
  { path: "/:pathMatch(.*)*", component: Error404 },
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  history: createWebHistory(),
  routes,
});

export default router;
// { path: "/", component: HomePage, label: "Trang chủ" },
// { path: "/about", component: About, label: "Giới thiệu" },
// { path: "/contact", component: Contact, label: "Liên hệ" },
// { path: "/posts", component: Posts, label: "Thêm bài viết" },
// { path: "/message", component: ChatRoom, label: "Chat" },
// { path: "/login", component: Posts, label: "Thêm bài viết" },
// { path: "/register", component: ChatRoom, label: "Chat" },
