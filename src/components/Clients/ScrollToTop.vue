<template>
    <div data-dial-init class="fixed right-6 bottom-20 group">
        <button
            v-if="showBtn"
            @click="scrollToTop"
            class="rounded-sm p-3 bg-[var(--cl-yellow)] hover:bg-[var(--cl-yellow2)] text-white"
        >
            <i class="fa-solid fa-angle-up"></i>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: false,
        }
    },
    methods: {
        showBtn() {
            this.isVisible = window.scrollY > 100
        },
        scrollToTop() {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        },
    },
}
</script>

<style></style>
