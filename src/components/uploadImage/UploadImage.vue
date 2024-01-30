<template>
    <div>
        <div class="mb-1">
            <input
                type="file"
                @change="handleUploadFile"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                :class="[keyLoaction === 'view' && 'hidden']"
            />
        </div>
        <div v-if="urlImg">
            <div class="relative w-[120px]">
                <img
                    :src="urlImg"
                    class="w-[120px] h-[120px] object-cover rounded-md"
                    :class="[loading && 'bg-gray-50 opacity-50']"
                />
                <button
                    v-if="urlImg && keyLoaction !== 'view'"
                    type="button"
                    class="bg-red-500 text-white absolute py-1 px-1.5 top-0 left-0"
                    @click="removeImage"
                >
                    X
                </button>
                <div
                    class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                >
                    <i
                        v-if="loading"
                        class="fa-solid fa-spinner animate-spin text-xl"
                    ></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API_UPLOAD from '@/api/upload.js'
export default {
    props: {
        keyLoaction: String,
        GetUrlImage: String,
    },
    data() {
        return {
            public_id: '',
            loading: true,
            fileUpload: null,
            urlImg: null,
        }
    },
    watch: {
        GetUrlImage(e) {
            this.urlImg = e
            this.loading = false
        },
    },
    methods: {
        handleUploadFile(e) {
            this.fileUpload = e.target.files[0]
            this.urlImg = URL.createObjectURL(this.fileUpload)

            const formData = new FormData()
            formData.append('images', this.fileUpload)
            API_UPLOAD.UploadImage(formData)
                .then((res) => {
                    this.$emit('repsonseImage', res.data.response)
                    this.loading = false
                    this.public_id = res.data.response.publicid
                })
                .catch((er) => console.log('lỗi', er))
        },

        removeImage() {
            localStorage.setItem('id_image', this.public_id)
            this.urlImg = ''
            this.loading = true
        },
    },
}
</script>

<style scoped></style>
