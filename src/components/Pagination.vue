<template>
    <nav class="flex justify-center my-5">
        <ul class="flex items-center -space-x-px h-8 text-sm">
            <li>
                <button
                    @click="handlePrevious"
                    :disabled="currentPage === 1"
                    class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    <span class="sr-only">Previous</span>
                    <svg
                        class="w-2.5 h-2.5 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                </button>
            </li>
            <li>
                <button
                    to=""
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    {{ currentPage }} / {{ totalPage }}
                </button>
            </li>
            <li>
                <button
                    @click="handleNext"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    <span class="sr-only">Next</span>
                    <svg
                        class="w-2.5 h-2.5 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            currentPage: this.$route.query.page || 1,
            perPage: 0,
        }
    },
    computed: {
        ...mapState({
            dataCount: (state) => state.postsMod.NumberItemPosts,
            limitItem: (state) => state.postsMod.limitItem,
        }),
        totalPage() {
            return Math.ceil(this.dataCount / this.limitItem)
        },
    },
    methods: {
        ...mapActions(['getAllPosts']),
        handlePrevious() {
            if (this.currentPage > 1) {
                this.$router.push({
                    path: this.$route.path,
                    query: { page: this.currentPage - 1 },
                })
                this.getAllPosts(this.currentPage - 1)
                this.currentPage--
            }
        },
        handleNext() {
            if (this.currentPage < this.totalPage) {
                this.$router.push({
                    path: this.$route.path,
                    query: { page: this.currentPage + 1 },
                })
                this.getAllPosts(this.currentPage + 1)
                this.currentPage++
            }
        },
    },
}
</script>

<style></style>
