import HomePage from "@/pages/Clients/homepage/HomePage.vue";
import ListAll from "@/pages/Clients/listAll/ListAll.vue";
import Contact from "@/pages/Clients/Contact.vue";
import About from "@/pages/Clients/About.vue";
import Posts from "@/pages/Clients/Posts.vue";
import ChatRoom from "@/pages/Clients/ChatRoom.vue";
import Login from "@/pages/auth/Login.vue";
import Register from "@/pages/auth/Register.vue";
import Profile from "@/pages/Clients/profile/profile.vue";
import DetailPage from "@/pages/Clients/detailpage/DetailPage.vue";

export const urlRouter = [
  { path: "/", component: HomePage, label: "Trang chủ" },
  { path: "/list-all", component: ListAll, label: "Danh sách" },
  { path: "/about", component: About, label: "Giới thiệu" },
  { path: "/contact", component: Contact, label: "Liên hệ" },
  { path: "/message", component: ChatRoom, label: "Chat" },
  //
  { path: "/posts", component: Posts, label: "Thêm bài viết" },
  { path: "/profile", component: Profile, label: "Thông tin cá nhân" },
  { path: "/detail", component: DetailPage, label: "Chi tiết bài viết" },
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
