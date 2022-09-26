<template>
  <router-link :to="{name: 'chat', params: {id: chat.id}}"
    class="w-full h-20 bg-background rounded-lg border-[1px] border-main grid grid-cols-8"
  >
    <div class="col-span-2 flex justify-center items-center">
      <div class="w-14 h-14 rounded-full">
        <img
          :src="receiver && receiver.profile_picture"
          alt="Profile Picture"
          class="w-full h-full object-cover object-center rounded-full"
        />
      </div>
    </div>
    <div
      class="col-span-4 flex flex-col justify-center items-center overflow-x-hidden relative px-4"
    >
      <div class="w-full h-1/2 flex justify-start items-center">
        <p class="text-sm text-main whitespace-nowrap">
          {{ receiver && receiver.name + " " + receiver.last_name }}
        </p>
      </div>
      <div class="w-full h-1/2 flex justify-start items-center">
        <p class="text-sm text-main whitespace-nowrap">
          <p v-if="lastMessage && lastMessage.message.user_id === store && store.user.id">You: {{ lastMessage&&lastMessage.message.body }}</p>
          <p v-if="lastMessage && lastMessage.message.user_id !== store && store.user.id">{{receiver.name}}: {{ lastMessage&&lastMessage.message.body }}</p>
        </p>
      </div>
      <div
        class="w-full h-full bg-gradient-to-l from-background absolute top-0 left-0"
      ></div>
    </div>
    <div class="col-span-2 w-full h-full flex justify-start items-center">
      <p class="text-main text-xs">{{lastMessage && lastMessage.ago}}</p>
    </div>
  </router-link>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore.js";
import { ref, watch } from "vue";
import axios from "@/config/axios/index.js";

const store = useUserStore();
const props = defineProps(["chat"]);
const receiver = ref();
const lastMessage = ref();

watch(store, () => {
  axios.get(`/chats/${props.chat.id}/users`).then((response) => {
    receiver.value = response.data.filter(
      (user) => user.id !== store.user.id
    )[0];
  });

  axios.get(`/chats/${props.chat.id}/last-message`).then((response) => {
    lastMessage.value = response.data;
  });
});
</script>
