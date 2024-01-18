import instance from './instance'

export default {
    login(users) {
        const url = '/login'
        return instance.post(url, users)
    },
    signup(users) {
        const url = '/signup'
        return instance.post(url, users)
    },
    getUser() {
        const url = '/getUser'
        return instance.get(url)
    },
}
