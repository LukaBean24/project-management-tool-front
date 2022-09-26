<template>
  <router-link
    :to="{ name: 'single-event', params: { id: event && event.id } }"
    class="col-span-1 w-full h-14 bg-background rounded-lg flex justify-between items-center px-4"
  >
    <p class="text-md text-main">{{ event && event.title }}</p>
    <DoubleRightArrowIcon fill="#FD7014" class="cursor-pointer" />
  </router-link>
</template>

<script setup>
import DoubleRightArrowIcon from "@/assets/icons/DoubleRightArrowIcon.vue";
const props = defineProps(["event"]);
</script>
