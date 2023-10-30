import { createApp } from "vue";
import ToastPlugin from "vue-toast-notification";
import "./style.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(ToastPlugin).use(router).mount("#app");
