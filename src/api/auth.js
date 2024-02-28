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
    getAdmin() {
        const url = '/getAdmin'
        return instance.get(url)
    },
    changeRole(id, payload) {
        const url = `/changeRole/${id}`
        return instance.put(url, payload)
    },
}
