<template>
    <div class="text-center input_search">
        <form action="">
            <input
                type="text"
                placeholder="Tìm kiếm...."
                v-model="key"
                @input="filterSearchPosts(this.key)"
                class="rounded-md w-full border-[var(--cl-yellow)] focus:border-[var(--cl-yellow)]"
            />
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import debounce from 'lodash.debounce'
export default {
    data() {
        return {
            key: '',
        }
    },
    created() {
        this.filterSearchPosts = debounce((e) => {
            if (e) {
                return this.SearchPost(e)
            } else {
                this.getAllPosts()
            }
        }, 600)
    },

    methods: {
        ...mapActions(['SearchPost', 'getAllPosts']),
    },
}
</script>

<style></style>
