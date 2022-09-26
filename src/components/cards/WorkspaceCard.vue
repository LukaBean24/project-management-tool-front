<template>
  <div
    class="w-full h-20 bg-secondary border-[1px] border-main rounded-lg grid grid-cols-7 lg:grid-cols-10"
  >
    <div class="col-span-2 lg:col-span-1 flex justify-start items-center px-3">
      <router-link
        :to="{ name: 'single-workspace', params: { id: workspace.id } }"
      >
        <p class="text-md text-main">{{ workspace.title }}</p>
      </router-link>
    </div>
    <div class="col-span-4 lg:hidden flex justify-start items-center px-6">
      <p class="text-md text-main">Members: {{ members.length }}</p>
    </div>
    <div
      class="hidden col-span-1 lg:flex justify-start items-center -space-x-5"
    >
      <div v-for="member in members.slice(0, 5)" class="w-12 h-12 rounded-full">
        <img
          :src="member.profile_picture"
          alt="Profile Picture"
          class="w-full h-full object-cover object-center rounded-full"
        />
      </div>
    </div>
    <div class="hidden col-span-5 lg:flex justify-start items-center space-x-6">
      <p class="text-md text-main">Members: {{ members.length }}</p>
      <p class="text-md text-main">Projects: {{ projects.length }}</p>
      <p class="text-md text-main">Tasks: {{ tasks.length }}</p>
      <p class="text-md text-main">Teams: {{ teams.length }}</p>
    </div>
    <div
      class="col-span-1 lg:col-span-3 lg:justify-end flex justify-center items-center relative lg:px-6"
    >
      <MoreSettingsIcon class="cursor-pointer" @click="openMoreSettings" />
      <div
        v-if="settingsOpened"
        class="absolute w-48 z-50 lg:w-56 h-36 bg-secondary border-[1px] border-main -bottom-32 right-8 rounded-lg flex flex-col justify-start items-center"
      >
        <div
          class="w-full h-1/2 rounded-t-lg flex justify-start items-center space-x-4 bg-secondary hover:bg-background duration-150 cursor-pointer px-3 lg:px-6"
        >
          <LogoutIcon fill="#FD7014" />
          <p class="text-sm text-main">Leave Workspace</p>
        </div>
        <div
          class="w-full h-1/2 rounded-b-lg flex justify-start items-center space-x-4 bg-secondary hover:bg-background duration-150 cursor-pointer px-3 lg:px-6"
        >
          <SettingsIcon fill="#FD7014" />
          <p class="text-sm text-main">Settings</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MoreSettingsIcon from "@/assets/icons/MoreSettingsIcon.vue";
import LogoutIcon from "@/assets/icons/LogoutIcon.vue";
import SettingsIcon from "@/assets/icons/SettingsIcon.vue";
import { ref } from "vue-demi";
import axios from "@/config/axios/index.js";

const settingsOpened = ref(false);
const props = defineProps(["workspace"]);
const members = ref([]);
const tasks = ref([]);
const projects = ref([]);
const teams = ref([]);

const openMoreSettings = () => {
  settingsOpened.value = !settingsOpened.value;
};

axios.get(`/workspaces/${props.workspace.id}/users`).then((response) => {
  members.value = response.data;
});
axios.get(`/workspaces/${props.workspace.id}/teams`).then((response) => {
  teams.value = response.data;
});
axios.get(`/workspaces/${props.workspace.id}/tasks`).then((response) => {
  tasks.value = response.data;
});
axios.get(`/workspaces/${props.workspace.id}/projects`).then((response) => {
  projects.value = response.data;
});
</script>

<!-- <div class="col-span-1 px-6 flex justify-end items-center relative">
      <MoreSettingsIcon class="cursor-pointer" @click="openMoreSettings" />
      <div
        v-if="settingsOpened"
        class="absolute w-48 z-50 lg:w-2/5 h-36 bg-secondary border-[1px] border-main -bottom-32 right-8 rounded-lg flex flex-col justify-start items-center"
      >
        <div
          class="w-full h-1/2 rounded-t-lg flex justify-start items-center space-x-4 bg-secondary hover:bg-background duration-150 cursor-pointer px-3 lg:px-6"
        >
          <LogoutIcon fill="#FD7014" />
          <p class="text-sm text-main">Leave Workspace</p>
        </div>
        <div
          class="w-full h-1/2 rounded-b-lg flex justify-start items-center space-x-4 bg-secondary hover:bg-background duration-150 cursor-pointer px-3 lg:px-6"
        >
          <SettingsIcon fill="#FD7014" />
          <p class="text-sm text-main">Settings</p>
        </div>
      </div>
    </div> -->
