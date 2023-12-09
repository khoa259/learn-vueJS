import { createApp } from "vue";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

const app = createApp(App);
app.use(store);
app.use(ToastPlugin);
app.use(router);
app.mount("#app");
