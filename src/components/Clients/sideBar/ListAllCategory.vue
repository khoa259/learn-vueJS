<template>
  <div>
    <div class="text-xl font-medium text-start pb-2">Món ngon</div>
    <div class="flex flex-wrap gap-1">
      <router-link
        v-for="(item, index) in ItemCate"
        :key="index"
        :to="item._id"
        class="border-[var(--cl-yellow)] text-[var(--cl-yellow)] border-2 py-1 px-2 rounded-lg focus:bg-[var(--cl-yellow)] focus:text-white"
      >
        {{ item.nameCate }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    ItemCate() {
      return this.$store.state.categoryMod.itemCate;
    },
  },
  created() {
    this.getItemCate();
  },
  methods: {
    ...mapActions(["getItemCate"]),
  },
};
</script>

<style></style>
