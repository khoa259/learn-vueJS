import instance from './instance'

export default {
    getPostsTrending() {
        const url = '/dashboard'
        return instance.get(url)
    },
}
