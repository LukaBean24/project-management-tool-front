<template>
  <div
    class="w-full h-screen fixed left-0 top-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm"
  >
    <div
      class="w-3/4 lg:w-1/4 h-2/5 bg-secondary rounded-lg flex flex-col justify-start items-center lg:py-6 py-10 px-6 lg:space-y-8 space-y-10"
    >
      <EmailSentIcon />
      <p class="text-2xl text-main">Verification Email Sent</p>
      <p class="text-md text-main text-center">
        Check your email for verification mail and verify account
      </p>
      <button
        @click="closeModal"
        class="w-full h-10 bg-main text-white text-lg rounded-lg"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script setup>
import EmailSentIcon from "@/assets/icons/EmailSentIcon.vue";

const emit = defineEmits(["closeVerifyModal"]);

const closeModal = () => {
  emit("closeVerifyModal", false);
};
</script>
