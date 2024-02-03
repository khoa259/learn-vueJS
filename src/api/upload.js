import instance from './instance'

export default {
    UploadImage(payload) {
        const url = '/upload'
        return instance.post(url, payload)
    },
}
