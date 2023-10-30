import HomePage from "../pages/HomePage.vue";
import Contact from "../pages/Contact.vue";
import About from "../pages/About.vue";
import Posts from "../pages/Posts.vue";
import ChatRoom from "../pages/ChatRoom.vue";
import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";

export const urlRouter = [
  { path: "/", component: HomePage, label: "Trang chủ" },
  { path: "/about", component: About, label: "Giới thiệu" },
  { path: "/contact", component: Contact, label: "Liên hệ" },
  { path: "/posts", component: Posts, label: "Thêm bài viết" },
  { path: "/message", component: ChatRoom, label: "Chat" },
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

export const baseURL = "http:localhost:5000/api";
