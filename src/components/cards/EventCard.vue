<template>
  <div class="w-full h-auto bg-secondary rounded-lg">
    <div
      v-if="event.type === 'Project'"
      class="w-full h-16 flex justify-center items-center border-b-[1px] border-main relative"
    >
      <div class="w-4 h-4 rounded-full bg-red-500 absolute right-2 top-2"></div>
      <p class="text-xl text-main">Project Deadline</p>
    </div>
    <div
      v-if="event.type === 'Task'"
      class="w-full h-16 flex justify-center items-center border-b-[1px] border-main relative"
    >
      <div class="w-4 h-4 rounded-full bg-red-500 absolute right-2 top-2"></div>
      <p class="text-xl text-main">Task Deadline</p>
    </div>
    <div
      v-if="event.type === 'Event'"
      class="w-full h-16 flex justify-center items-center border-b-[1px] border-main"
    >
      <p class="text-xl text-main">Event</p>
    </div>
    <div class="w-full h-auto p-3 relative">
      <p class="text-lg text-main">{{ eventInfo && eventInfo.title }}</p>
      <br />
      <p class="text-sm text-main">{{ eventInfo && eventInfo.description }}</p>
    </div>
    <div class="w-full h-10 flex justify-start items-center px-3">
      <router-link
        v-if="event && event.type === 'Project'"
        :to="{
          name: 'single-project',
          params: { id: event && event.id },
        }"
      >
        <span class="flex justify-center items-center space-x-2 cursor-pointer">
          <p class="text-lg text-main">
            See full {{ event.type.toLowerCase() }}
          </p>
          <DoubleRightArrowIcon fill="#FD7014" /> </span
      ></router-link>
      <router-link
        v-if="event && event.type === 'Task'"
        :to="{
          name: 'single-task',
          params: { id: event && event.id },
        }"
      >
        <span class="flex justify-center items-center space-x-2 cursor-pointer">
          <p class="text-lg text-main">
            See full {{ event.type.toLowerCase() }}
          </p>
          <DoubleRightArrowIcon fill="#FD7014" /> </span
      ></router-link>
      <router-link
        v-if="event && event.type === 'Event'"
        :to="{
          name: 'single-event',
          params: { id: event && event.id },
        }"
      >
        <span class="flex justify-center items-center space-x-2 cursor-pointer">
          <p class="text-lg text-main">
            See full {{ event.type.toLowerCase() }}
          </p>
          <DoubleRightArrowIcon fill="#FD7014" /> </span
      ></router-link>
    </div>
  </div>
</template>

<script setup>
import axios from "@/config/axios/index.js";
import DoubleRightArrowIcon from "@/assets/icons/DoubleRightArrowIcon.vue";
import { ref } from "vue";

const props = defineProps(["event"]);
const eventInfo = ref();

if (props.event.type === "Event") {
  axios.get(`/events/${props.event.id}`).then((response) => {
    eventInfo.value = response.data;
  });
} else if (props.event.type === "Project") {
  axios.get(`/projects/${props.event.id}`).then((response) => {
    eventInfo.value = response.data;
  });
} else if (props.event.type === "Task") {
  axios.get(`/projects/${props.event.id}`).then((response) => {
    eventInfo.value = response.data;
  });
}
</script>
