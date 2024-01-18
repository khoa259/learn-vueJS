import { createApp } from 'vue'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { OptionsToast } from './utils/contants'

const app = createApp(App)
app.use(store)
app.use(Toast, OptionsToast)
app.use(router)
app.mount('#app')
