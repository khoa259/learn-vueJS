<template>
  <div>
    <div class="flex space-x-4 px-4 py-3 border-b-2 border-[var(--cl-yellow)]">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="{
          'bg-[var(--cl-yellow)] text-white': activeTab === index,
          'bg-gray-200 text-gray-600': activeTab !== index,
        }"
        class="px-4 py-2 rounded"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="p-2">
      <slot :activeTab="activeTab"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
    };
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped></style>
