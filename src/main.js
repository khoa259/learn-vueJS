import { createApp } from "vue";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

createApp(App).use(store).use(ToastPlugin).use(router).mount("#app");
