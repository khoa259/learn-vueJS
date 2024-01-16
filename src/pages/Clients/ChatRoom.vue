<script>
import FormChat from "@/components/Clients/ChatBox/FormChat.vue";
import MemBerChat from "@/components/Clients/ChatBox/MemBerChat.vue";
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
