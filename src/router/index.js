import { urlRouter, urlRouterAuth, urlRouterAdmin } from "@/utils/contants";

import Error404 from "@/pages/404/404.vue";
import DefaulLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: DefaulLayout,
    children: urlRouter,
  },
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: AdminLayout,
    children: urlRouterAdmin,
    beforeEnter: (to, from, next) => {
      const local = JSON.parse(localStorage.getItem("role"));
      if (local != 1) {
        return next({ path: "/auth" });
      }
      next();
    },
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
