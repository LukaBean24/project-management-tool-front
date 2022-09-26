<template>
  <UserLayout>
    <div
      class="w-full min-h-[calc(100vh-11rem)] h-fit grid grid-cols-1 lg:grid-rows-3 grid-flow-row gap-6 lg:grid-cols-4"
    >
      <ProjectsBox :projects="projects" />
      <div
        class="col-span-1 lg:row-span-1 w-full h-56 lg:h-full bg-secondary border-[1px] border-main rounded-lg"
      >
        <div class="w-full h-1/3 px-6 flex justify-start items-center">
          <p class="text-xl text-main">Tasks</p>
        </div>
        <div class="w-full h-1/3 flex justify-start items-center px-6">
          <p class="text-5xl text-main">{{ tasks && tasks.length }}</p>
        </div>
        <div class="w-full h-1/3 flex justify-start items-center px-6">
          <span
            class="flex justify-center items-center cursor-pointer space-x-2"
            ><p class="text-xl text-main">See All</p>
            <DoubleRightArrowIcon fill="#FD7014"
          /></span>
        </div>
      </div>
      <div
        class="col-span-1 lg:row-span-1 w-full h-56 lg:h-full bg-secondary border-[1px] border-main rounded-lg overflow-y-auto"
      >
        <div class="w-full h-1/3 px-6 flex justify-between items-center">
          <p class="text-xl text-main">Upcoming Events</p>
          <div
            class="w-10 h-10 bg-main rounded-full flex justify-center items-center"
          >
            <p class="text-md text-white">{{ events && events.length }}</p>
          </div>
        </div>
        <div
          class="w-full flex flex-col items-center px-6 space-y-6 pb-6"
          :class="
            events && events.length > 0
              ? 'justify-start h-fit'
              : 'justify-center h-2/3'
          "
        >
          <UpcommingEventCard
            v-if="events && events.length > 0"
            v-for="event in events"
            :key="event.id"
            :event="event"
          />
          <p v-else class="text-xl text-main">There is no upcoming events</p>
        </div>
      </div>
      <CalendarBox />
      <div
        class="col-span-1 lg:row-span-1 w-full h-56 lg:h-full bg-secondary border-[1px] border-main rounded-lg"
      >
        <div class="w-full h-1/3 px-6 flex justify-start items-center">
          <p class="text-xl text-main">Members</p>
        </div>
        <div class="w-full h-1/3 flex justify-start items-center px-6">
          <p class="text-5xl text-main">{{ members && members.length }}</p>
        </div>
        <div class="w-full h-1/3 flex justify-start items-center px-6">
          <span
            class="flex justify-center items-center cursor-pointer space-x-2"
            ><p class="text-xl text-main">See All</p>
            <DoubleRightArrowIcon fill="#FD7014"
          /></span>
        </div>
      </div>
      <div
        class="col-span-1 lg:row-span-1 w-full h-56 lg:h-full bg-secondary border-[1px] border-main rounded-lg"
      >
        <div class="w-full h-1/3 px-6 flex justify-start items-center">
          <p class="text-xl text-main">Teams</p>
        </div>
        <div class="w-full h-1/3 flex justify-start items-center px-6">
          <p class="text-5xl text-main">{{ teams && teams.length }}</p>
        </div>
        <div class="w-full h-1/3 flex justify-start items-center px-6">
          <span
            class="flex justify-center items-center cursor-pointer space-x-2"
            ><p class="text-xl text-main">See All</p>
            <DoubleRightArrowIcon fill="#FD7014"
          /></span>
        </div>
      </div>
      <div
        class="col-span-1 lg:row-span-1 w-full h-56 lg:h-full bg-secondary border-[1px] border-main rounded-lg"
      >
        <div class="w-full h-1/3 px-6 flex justify-start items-center">
          <p class="text-xl text-main">Latest Chats</p>
        </div>
        <div
          class="w-full flex flex-col items-center px-6 space-y-6 pb-6"
          :class="
            events && events.length > 0
              ? 'justify-start h-fit'
              : 'justify-center h-2/3'
          "
        >
          <UpcommingEventCard
            v-if="events && events.length > 0"
            v-for="event in events"
            :key="event.id"
            :event="event"
          />
          <p v-else class="text-xl text-main">There is no upcoming events</p>
        </div>
      </div>
      <div
        v-if="store.role === 'admin'"
        class="col-span-1 lg:row-span-1 w-full h-56 lg:h-full bg-secondary border-[1px] border-main rounded-lg"
      >
        <div class="w-full h-1/3 px-6 flex justify-start items-center">
          <p class="text-xl text-main">Workspace Join Requests</p>
        </div>
        <div class="w-full h-1/3 flex justify-start items-center px-6">
          <p class="text-5xl text-main">{{ teams && teams.length }}</p>
        </div>
        <div class="w-full h-1/3 flex justify-start items-center px-6">
          <span
            class="flex justify-center items-center cursor-pointer space-x-2"
            ><p class="text-xl text-main">See All</p>
            <DoubleRightArrowIcon fill="#FD7014"
          /></span>
        </div>
      </div>
    </div>
  </UserLayout>
</template>

<script setup>
import UserLayout from "@/components/Layout/UserLayout.vue";
import DoubleRightArrowIcon from "@/assets/icons/DoubleRightArrowIcon.vue";
import UpcommingEventCard from "@/components/cards/UpcommingEventCard.vue";
import CalendarBox from "@/components/cards/CalendarBox.vue";
import ProjectsBox from "@/components/cards/ProjectsBox.vue";
import axios from "@/config/axios/index.js";
import { useUserStore } from "@/stores/userStore.js";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
const store = useUserStore();
const projects = ref();
const tasks = ref();
const events = ref();
const teams = ref();
const members = ref();

axios.get(`/workspaces/${route.params.id}/projects`).then((response) => {
  projects.value = response.data;
});
axios.get(`/workspaces/${route.params.id}/tasks`).then((response) => {
  tasks.value = response.data;
});
axios.get(`/workspaces/${route.params.id}/users`).then((response) => {
  members.value = response.data;
});
axios.get(`/workspaces/${route.params.id}/teams`).then((response) => {
  teams.value = response.data;
});
watch(store, () => {
  axios.get(`/users/${store.user.id}/upcoming-events`).then((response) => {
    events.value = response.data;
  });
  axios
    .get(`/users/${store.user.id}/role/${route.params.id}`)
    .then((response) => {
      store.updateUserRole(response.data[0].role);
    });
});
</script>
