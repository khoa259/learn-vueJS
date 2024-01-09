import { POSITION } from "vue-toastification";
import moment from "moment";

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

// 1 phút trước, 1 giờ trước,...
const formatDate = (value) => {
  // let startDate = new Date().getHours();
  let calcDate =
    new Date().getTime() - new Date("2024-01-09T09:05:01.330+00:00").getTime();
  // let Dake = new Date(calcDate).getHours();
  console.log("time", Date(calcDate).getHours());

  let calcDates = new Intl.RelativeTimeFormat("vn-VN", { style: "short" });
  console.log("timeformat", calcDates.format(-calcDate, "hour"));
  // console.log(getTime.format(Dake, "hours"));
  // if (getTime >= 1440) {
  //   return `${getTime} ngày`;
  // } else if (getTime >= 60) {
  //   return getTime.format(-1, "hours");
  // } else if (getTime > 0) {
  //   return getTime.format(-1, "minutes");
  // } else if ((getTime = 0)) {
  //   return `bây giờ`;
  // }
};

// 1,2K, 1,2M,...
const formatNumberView = (value) => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(value);
};

// 09/01/2024, 14:22
const formatDateFull = (value) => {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY HH:SS");
  }
};

// 1,000,000
const formatPrice = (value) => {
  let val = (value / 1).toFixed().replace(".", ",");
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export { formatDate, formatNumberView, formatDateFull, formatPrice };

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

export const OptionsToast = {
  position: POSITION.TOP_CENTER,
  transition: "Vue-Toastification__bounce",
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  // rtl: false,
};
