<template>
  <UserLayout>
    <div
      class="w-full h-[calc(100vh-12rem)] flex justify-start items-center border-[1px] border-main rounded-lg bg-secondary"
    >
      <div
        class="lg:w-1/4 w-full h-full overflow-y-auto lg:border-r-[1px] border-main p-4"
      >
        <div class="w-full h-10 flex justify-start items-center relative">
          <SearchIcon class="absolute left-3" fill="#FD7014" />
          <input
            type="text"
            class="w-full h-full px-12 outline-none border-[1px] border-main rounded-lg bg-background text-main"
          />
        </div>
        <div class="w-full h-[calc(100%-56px)] space-y-4 mt-4 overflow-y-auto">
          <ChatCard v-for="chat in chats" :key="chat.id" :chat="chat" />
        </div>
      </div>
      <div
        class="w-3/4 h-full hidden lg:flex lg:justify-center lg:items-center"
      >
        <p class="text-xl text-main">No chats opened</p>
      </div>
    </div>
  </UserLayout>
</template>

<script setup>
import UserLayout from "@/components/Layout/UserLayout.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import ChatCard from "@/components/cards/ChatCard.vue";
import { useUserStore } from "@/stores/userStore.js";
import { ref, watch } from "vue";
import axios from "@/config/axios/index.js";

const store = useUserStore();
const chats = ref();

watch(store, () => {
  if (store.user) {
    axios.get(`/users/${store.user.id}/chats`).then((response) => {
      chats.value = response.data;
    });
  }
});
</script>
