<template>
    <Transition name="bounce">
        <!-- <div
      class="absolute top-0 left-0 w-full h-full bg-gray-200 opacity-50"
    ></div> -->
        <div
            id="modal"
            class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 cursor-pointer"
        >
            <div class="bg-white p-8 rounded shadow-md min-w-[60vh]">
                <div class="mb-4 flex justify-between">
                    <h2 class="text-2xl text-[var(--cl-yellow)] font-bold">
                        <slot name="title" />
                    </h2>
                    <button
                        @click="closeModal"
                        class="text-gray-600 hover:text-gray-800 focus:outline-none"
                    >
                        <svg
                            class="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
                <slot name="body" />
                <div class="float-right mt-3">
                    <button
                        @click="closeModal"
                        class="px-3 py-2 ml-2 text-[var(--cl-yellow)] bg-white border-[var(--cl-yellow)] border-2 rounded-md"
                    >
                        Hủy
                    </button>
                    <button
                        type="submit"
                        class="px-3 py-2 ml-2 text-white bg-[var(--cl-yellow)] rounded-md"
                        @click="submitModal"
                    >
                        Gửi
                    </button>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit('closeModal')
        },
        submitModal() {
            this.$emit('submitModal')
        },
    },
}
</script>

<style scoped>
.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
</style>
