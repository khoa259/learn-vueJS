import HomePage from "@/pages/Clients/homepage/HomePage.vue";
import ListAll from "@/pages/Clients/listAll/ListAll.vue";
import Contact from "@/pages/Clients/Contact.vue";
import About from "@/pages/Clients/About.vue";
import Posts from "@/pages/Clients/Posts.vue";
import Login from "@/pages/auth/Login.vue";
import Register from "@/pages/auth/Register.vue";
import Profile from "@/pages/Clients/profile/profile.vue";
import DetailPage from "@/pages/Clients/detailpage/DetailPage.vue";
// admin
import ListCategory from "@/pages/admin/category/ListCategory.vue";
import Dashboard from "@/pages/admin/dashboard/Dashboard.vue";
import ListPosts from "@/pages/admin/posts/ListPosts.vue";
import FormPosts from "@/pages/admin/posts/FormPosts.vue";
import ListUser from "@/pages/admin/users/listUser.vue";

import ProvinceTest from "@/pages/admin/ProvinceTest.vue";
export const urlRouter = [
  { path: "/", component: HomePage, label: "Trang chủ" },
  { path: "/list-all", component: ListAll, label: "Danh sách" },
  { path: "/about", component: About, label: "Giới thiệu" },
  { path: "/contact", component: Contact, label: "Liên hệ" },
  //
  { path: "/posts", component: Posts, label: "Thêm bài viết" },
  { path: "/profile", component: Profile, label: "Thông tin cá nhân" },
  { path: "/:id", component: DetailPage, label: "Chi tiết bài viết" },
  { path: "/list-all/:id", component: ListAll, label: "Chi tiết bài viết" },
];

export const urlRouterAdmin = [
  {
    path: "dashboard",
    component: Dashboard,
    label: "Thống kê",
    icon: "fa-solid fa-chart-line",
  },
  {
    path: "category",
    component: ListCategory,
    label: "Danh mục",
    icon: "fa-solid fa-calendar",
  },
  {
    path: "posts",
    component: ListPosts,
    label: "Bài viết",
    icon: "fa-solid fa-book",
  },
  {
    path: "users",
    component: ListUser,
    label: "Người dùng",
    icon: "fa-solid fa-user",
  },
  {
    path: "test",
    component: ProvinceTest,
    label: "Test",
    icon: "fa-solid fa-user",
  },
  //
  {
    path: "posts/:id/:key",
    icon: "fa-solid fa-book",
    component: FormPosts,
    label: "Tạo bài viết",
  },
  {
    path: "posts/:key",
    icon: "fa-solid fa-book",
    component: FormPosts,
    label: "Tạo bài viết",
  },
];

export const urlRouterAuth = [
  {
    path: "/login",
    component: Login,
    label: "Đăng nhập",
  },
  {
    path: "/register",
    component: Register,
    label: "Đăng ký",
  },
];
