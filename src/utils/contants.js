import { POSITION } from 'vue-toastification'
import moment from 'moment'

import HomePage from '@/pages/Clients/homepage/HomePage.vue'
import ListAll from '@/pages/Clients/listAll/ListAll.vue'
import Contact from '@/pages/Clients/Contact.vue'
import About from '@/pages/Clients/About.vue'
import Posts from '@/pages/Clients/Posts.vue'
import Login from '@/pages/auth/Login.vue'
import Register from '@/pages/auth/Register.vue'
import Profile from '@/pages/Clients/profile/profile.vue'
import DetailPage from '@/pages/Clients/detailpage/DetailPage.vue'
// admin
import ListCategory from '@/pages/admin/category/ListCategory.vue'
import Dashboard from '@/pages/admin/dashboard/Dashboard.vue'
import ListPosts from '@/pages/admin/posts/ListPosts.vue'
import FormPosts from '@/pages/admin/posts/FormPosts.vue'
import ListsUsers from '@/pages/admin/users/ListsUsers.vue'
import ProvinceTest from '@/pages/admin/ProvinceTest.vue'

const debounceCallAPI = (e) => {
    console.log('1', e)
    setTimeout(() => {
        console.log('2', e)
        return e
    }, 30000)
}
export { debounceCallAPI }
// 1 phút trước, 1 giờ trước,...
const formatDate = (value) => {
    const date = value instanceof Date ? value : new Date(value)
    const formatter = new Intl.RelativeTimeFormat('vn-VN')
    const ranges = {
        years: 3600 * 24 * 365,
        months: 3600 * 24 * 30,
        weeks: 3600 * 24 * 7,
        days: 3600 * 24,
        hours: 3600,
        minutes: 60,
        seconds: 1,
    }
    const secondsElapsed = (date.getTime() - Date.now()) / 1000
    for (let key in ranges) {
        if (ranges[key] < Math.abs(secondsElapsed)) {
            const delta = secondsElapsed / ranges[key]
            return formatter.format(Math.round(delta), key)
        }
    }
}

// 1,2K, 1,2M,...
const formatNumberView = (value) => {
    const formatter = Intl.NumberFormat('en', { notation: 'compact' })
    return formatter.format(value)
}

// 09/01/2024, 14:22
const formatDateFull = (value) => {
    if (value) {
        return moment(String(value)).format('DD/MM/YYYY hh:mm:ss')
    }
}

// 1,000,000
const formatPrice = (value) => {
    let val = (value / 1).toFixed().replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export { formatDate, formatNumberView, formatDateFull, formatPrice }
//router
export const urlRouter = [
    { path: '/', component: HomePage, label: 'Trang chủ' },
    { path: '/list-all', component: ListAll, label: 'Danh sách' },
    { path: '/about', component: About, label: 'Giới thiệu' },
    { path: '/contact', component: Contact, label: 'Liên hệ' },
    //
    { path: '/posts', component: Posts, label: 'Thêm bài viết' },
    { path: '/profile', component: Profile, label: 'Thông tin cá nhân' },
    { path: '/:id', component: DetailPage, label: 'Chi tiết bài viết' },
    { path: '/list-all/:id', component: ListAll, label: 'Chi tiết bài viết' },
]

export const urlRouterAdmin = [
    {
        path: 'dashboard',
        component: Dashboard,
        label: 'Thống kê',
        icon: 'fa-solid fa-chart-line',
    },
    {
        path: 'category',
        component: ListCategory,
        label: 'Danh mục',
        icon: 'fa-solid fa-calendar',
    },
    {
        path: 'posts',
        component: ListPosts,
        label: 'Bài viết',
        icon: 'fa-solid fa-book',
    },
    {
        path: 'users',
        component: ListsUsers,
        label: 'Người dùng',
        icon: 'fa-solid fa-user',
    },
    {
        path: 'test',
        component: ProvinceTest,
        label: 'Test',
        icon: 'fa-solid fa-user',
    },
    //
    {
        path: 'posts/:id/:key',
        icon: 'fa-solid fa-book',
        component: FormPosts,
        label: 'Tạo bài viết',
    },
    {
        path: 'posts/:key',
        icon: 'fa-solid fa-book',
        component: FormPosts,
        label: 'Tạo bài viết',
    },
]

export const urlRouterAuth = [
    {
        path: '/login',
        component: Login,
        label: 'Đăng nhập',
    },
    {
        path: '/register',
        component: Register,
        label: 'Đăng ký',
    },
]

export const OptionsToast = {
    position: POSITION.TOP_CENTER,
    transition: 'Vue-Toastification__bounce',
    timeout: 2000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: 'button',
    icon: true,
    // rtl: false,
}
