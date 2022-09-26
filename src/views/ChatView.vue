<template>
  <UserLayout :padding="false">
    <div class="w-full h-[calc(100vh-5rem)] bg-background">
      <div
        class="w-full h-[10%] px-3 grid grid-cols-8 border-b-[1px] border-main"
      >
        <div class="col-span-1 w-full h-full flex justify-center items-center">
          <div class="w-10 h-10 bg-black rounded-full"></div>
        </div>
        <div class="col-span-5 w-full h-full flex justify-center items-center">
          <p class="text-md text-main">Giorgi Yarmazanashvili</p>
        </div>
        <div
          class="col-span-2 w-full h-full flex justify-end items-center space-x-5"
        >
          <CameraIcon fill="#FD7014" />
          <PhoneIcon fill="#FD7014" />
        </div>
      </div>
      <div
        class="w-full h-[75%] flex flex-col-reverse justify-start pb-4 px-2 overflow-y-scroll space-y-4"
      >
        <div class="w-2/3 h-10 bg-green-500 rounded-3xl rounded-bl-none"></div>
      </div>
      <div class="w-full h-[15%] p-2 border-t-[1px] border-main relative">
        <SendIcon
          class="absolute right-4 bottom-4 duration-150"
          :class="message.length > 0 ? 'opcaity-100' : 'opacity-0'"
          fill="#FD7014"
        />
        <textarea
          v-model="message"
          placeholder="Your message goes here"
          class="w-full h-full rounded-lg bg-secondary p-2 outline-none text-md text-white"
        ></textarea>
      </div>
    </div>
  </UserLayout>
</template>

<script setup>
import UserLayout from "@/components/Layout/UserLayout.vue";
import LeftArrowIcon from "@/assets/icons/LeftArrowIcon.vue";
import PhoneIcon from "@/assets/icons/PhoneIcon.vue";
import CameraIcon from "@/assets/icons/CameraIcon.vue";
import SendIcon from "@/assets/icons/SendIcon.vue";
import { ref } from "vue-demi";

const message = ref();
</script>
