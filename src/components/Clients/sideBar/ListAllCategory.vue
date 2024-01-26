<template>
    <div>
        <div class="text-base font-medium text-start pb-2">Món ngon</div>
        <div class="flex flex-wrap gap-1">
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
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            btnForcus: false,
        }
    },
    computed: {
        ItemCate() {
            return this.$store.state.categoryMod.itemCate
        },
    },
    created() {
        this.getItemCate()
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
