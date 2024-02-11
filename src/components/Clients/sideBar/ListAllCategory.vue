<template>
    <div>
        <div class="text-base font-medium text-start pb-2">Món ngon</div>
        <div v-if="loading">
            <SpinLoading />
        </div>
        <div class="flex flex-wrap gap-1" v-else>
            <button
                v-for="(item, index) in ItemCate"
                :key="index"
                :on-focus="btnForcus"
                @click="handleGetPostsByCategories(item._id)"
                class="border-[var(--cl-yellow)] text-[var(--cl-yellow)] border-2 py-1 px-2 rounded-lg"
                :class="{ active: btnForcus }"
            >
                {{ item.nameCate }}
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SpinLoading from '@/components/LoadingCpn/SpinLoading.vue'

export default {
    components: { SpinLoading },
    data() {
        return {
            btnForcus: false,
        }
    },
    computed: {
        ...mapState({
            ItemCate: (state) => state.categoryMod.itemCate,
            loading: (state) => state.categoryMod.loading,
        }),
    },
    created() {
        setTimeout(() => {
            this.getItemCate()
        }, 300)
    },
    methods: {
        ...mapActions(['getItemCate', 'getPostsByCate', 'getAllPosts']),
        handleGetPostsByCategories(e) {
            if (e) {
                this.getPostsByCate({ categoryId: e })
                this.btnForcus = true
            }
        },
    },
}
</script>

<style>
.active:focus {
    color: white;
    background: var(--cl-yellow);
}
</style>
