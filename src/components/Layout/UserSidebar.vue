<template>
  <div
    class="w-1/2 md:w-2/6 xl:w-1/6 h-screen bg-white fixed z-50 top-0 duration-200 pl-10 flex justify-end items-center"
    :class="sidebar ? 'left-0' : '-left-1/2 lg:-left-1/6'"
  >
    <CloseIcon
      fill="#FD7014"
      class="absolute right-4 top-4 cursor-pointer"
      @click="closeUserSidenar"
    />
    <div
      class="w-full h-5/6 flex flex-col justify-center items-center space-y-6 py-6"
    >
      <router-link
        to="/workspace"
        class="w-full h-16 bg-main rounded-l-xl hover:bg-orange-600 duration-150 cursor-pointer px-6 flex justify-start items-center space-x-6"
      >
        <WorkspaceIcon fill="#ffffff" />
        <p class="text-xl text-white">Workspaces</p>
      </router-link>
      <router-link
        to="/dashboard"
        class="w-full h-16 bg-main rounded-l-xl hover:bg-orange-600 duration-150 cursor-pointer px-6 flex justify-start items-center space-x-6"
      >
        <DashboardIcon fill="#ffffff" />
        <p class="text-xl text-white">Dashboard</p>
      </router-link>
      <router-link
        to="/projects"
        class="w-full h-16 bg-main rounded-l-xl hover:bg-orange-600 duration-150 cursor-pointer px-6 flex justify-start items-center space-x-6"
      >
        <ProjectsIcon fill="#ffffff" />
        <p class="text-xl text-white">Projects</p>
      </router-link>
      <router-link
        to="/tasks"
        class="w-full h-16 bg-main rounded-l-xl hover:bg-orange-600 duration-150 cursor-pointer px-6 flex justify-start items-center space-x-6"
      >
        <TasksIcon fill="#ffffff" />
        <p class="text-xl text-white">Tasks</p>
      </router-link>
      <router-link
        to="/tasks"
        class="w-full h-16 bg-main rounded-l-xl hover:bg-orange-600 duration-150 cursor-pointer px-6 flex justify-start items-center space-x-6"
      >
        <TeamsIcon fill="#ffffff" />
        <p class="text-xl text-white">Tasks</p>
      </router-link>
      <router-link
        to="/messages"
        class="w-full h-16 bg-main rounded-l-xl hover:bg-orange-600 duration-150 cursor-pointer px-6 flex justify-start items-center space-x-6"
      >
        <MessagesIcon fill="#ffffff" />
        <p class="text-xl text-white">Messages</p>
      </router-link>
      <router-link
        to="/messages"
        class="w-full h-16 bg-main rounded-l-xl hover:bg-orange-600 duration-150 cursor-pointer px-6 flex justify-start items-center space-x-6"
      >
        <SettingsIcon fill="#ffffff" />
        <p class="text-xl text-white">Settings</p>
      </router-link>
      <router-link
        to="/messages"
        class="w-full h-16 bg-main rounded-l-xl hover:bg-orange-600 duration-150 cursor-pointer px-6 flex justify-start items-center space-x-6"
      >
        <LogoutIcon fill="#ffffff" />
        <p class="text-xl text-white">Logout</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import CloseIcon from "@/assets/icons/CloseIcon.vue";
import WorkspaceIcon from "@/assets/icons/WorkspaceIcon.vue";
import ProjectsIcon from "@/assets/icons/ProjectsIcon.vue";
import TasksIcon from "@/assets/icons/TasksIcon.vue";
import DashboardIcon from "@/assets/icons/DashboardIcon.vue";
import TeamsIcon from "@/assets/icons/TeamsIcon.vue";
import MessagesIcon from "@/assets/icons/MessagesIcon.vue";
import SettingsIcon from "@/assets/icons/SettingsIcon.vue";
import LogoutIcon from "@/assets/icons/SettingsIcon.vue";

const emit = defineEmits(["closeSidebar"]);
const props = defineProps(["sidebar"]);

const closeUserSidenar = () => {
  emit("closeSidebar", false);
};
</script>
