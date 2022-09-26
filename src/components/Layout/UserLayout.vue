<template>
  <UserSidebar @closeSidebar="closeSidebar" :sidebar="sidebar" />
  <Searchbar v-if="searchbar" @closeSearch="closeSearchBar" />
  <NotificationModal
    v-if="notificationModal"
    @closeNotificationModal="closeNotificationModal"
  />
  <div
    class="w-full h-20 bg-secondary fixed top-0 left-0 z-30 px-6 grid grid-cols-6 lg:grid-cols-12"
  >
    <div
      v-if="burger"
      class="col-span-1 lg:col-span-1 w-full h-full flex justify-start items-center"
    >
      <div
        class="w-9 h-9 flex flex-col justify-between overflow-x-hidden absolute z-50"
        @click="openSidebar"
      >
        <div
          class="w-full h-1 bg-main duration-200"
          :class="
            sidebar ? 'absolute translate-y-1/2 top-1/2 -rotate-45' : 'flex'
          "
        ></div>
        <div
          class="w-[80%] h-1 bg-main duration-200"
          :class="sidebar ? 'absolute left-full' : 'flex'"
        ></div>
        <div
          class="w-full h-1 bg-main duration-200"
          :class="
            sidebar ? 'absolute translate-y-1/2 top-1/2 rotate-45' : 'flex'
          "
        ></div>
      </div>
    </div>
    <div
      class="col-span-3 lg:col-span-7 w-full h-full flex justify-center lg:justify-start items-center space-x-10"
    >
      <p class="text-xl lg:text-3xl text-white font-bold">
        Action<span class="text-main">Point</span>
      </p>
      <div
        v-if="burger"
        class="hidden w-1/2 h-1/2 relative lg:grid grid-cols-12 border-[1px] border-main rounded-lg"
      >
        <div class="col-span-1 w-full h-full flex justify-center items-center">
          <SearchIcon fill="#FD7014" />
        </div>
        <div class="col-span-11 w-full h-full">
          <input
            type="text"
            class="px-2 text-main w-full h-full bg-transparent outline-none"
            placeholder="Search anything..."
            v-model="search"
          />
        </div>
        <SearchContainer v-if="search.length > 0" />
      </div>
    </div>
    <div
      class="col-span-2 w-full h-full flex justify-end items-center space-x-6 lg:space-x-10"
      :class="burger ? 'col-span-2 lg:col-span-4' : 'col-span-3 lg:col-span-5'"
    >
      <NotificationIcon
        fill="#FD7014"
        class="cursor-pointer"
        @click="openNotificationModal"
      />
      <SearchIcon
        fill="#FD7014"
        class="cursor-pointer lg:hidden"
        @click="openSearchbar"
      />
      <p class="lg:flex hidden text-md text-main text-center">
        {{ store && store?.user?.name + " " + store?.user?.last_name }}
      </p>
      <div
        class="lg:w-10 w-8 h-7 lg:h-10 bg-gradient-to-tr from-main to-red-500 rounded-full p-[2px]"
      >
        <img
          :src="store?.user?.profile_picture"
          alt="Profile Picture"
          class="w-full h-full rounded-full object-cover object-center"
        />
      </div>
    </div>
  </div>
  <div
    class="w-full h-fit min-h-screen bg-background absolute left-0 block pt-32 px-6 space-y-6"
    :class="padding ? 'pt-32 px-6' : 'pt-20 px-0'"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import NotificationIcon from "@/assets/icons/NotificationIcon.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import LeftArrowIcon from "@/assets/icons/LeftArrowIcon.vue";
import UserSidebar from "@/components/Layout/UserSidebar.vue";
import Searchbar from "@/components/modals/Searchbar.vue";
import SearchContainer from "@/components/modals/SearchContainer.vue";
import NotificationModal from "@/components/modals/NotificationModal.vue";
import { ref } from "vue";
import axios from "@/config/axios/index.js";

const props = defineProps({
  burger: {
    type: Boolean,
    default: true,
  },
  padding: {
    type: Boolean,
    default: true,
  },
});
const sidebar = ref(false);
const search = ref("");
const searchbar = ref(false);
const notificationModal = ref(false);

const closeSearchBar = () => {
  searchbar.value = false;
};

const openSidebar = () => {
  sidebar.value = true;
};

const openSearchbar = () => {
  searchbar.value = true;
};

const closeSidebar = () => {
  sidebar.value = false;
};

const openNotificationModal = () => {
  notificationModal.value = true;
};

const closeNotificationModal = () => {
  notificationModal.value = false;
};
</script>
