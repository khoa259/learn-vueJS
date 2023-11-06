<script>
import FormChat from "@/components/ChatBox/FormChat.vue";
import MemBerChat from "@/components/ChatBox/MemBerChat.vue";
export default {
  name: "ChatRoom",
  components: {
    FormChat,
    MemBerChat,
  },
};
</script>

<template>
  <div class="h-screen">
    <div class="flex h-full">
      <MemBerChat />
      <FormChat />
    </div>
  </div>
</template>

<style></style>
