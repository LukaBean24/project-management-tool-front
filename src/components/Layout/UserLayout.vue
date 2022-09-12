<template>
  <UserSidebar @closeSidebar="closeSidebar" :sidebar="sidebar" />
  <Searchbar v-if="searchbar" @closeSearch="closeSearchBar" />
  <div
    class="w-full h-20 bg-secondary fixed top-0 left-0 z-30 px-6 grid grid-cols-6 lg:grid-cols-12"
  >
    <div
      class="col-span-2 lg:col-span-1 w-full h-full flex justify-start items-center"
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
      class="col-span-2 lg:col-span-7 w-full h-full flex justify-center lg:justify-start items-center space-x-10"
    >
      <p class="text-3xl text-white font-bold">
        Action<span class="text-main">Point</span>
      </p>
      <div
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
      class="col-span-2 lg:col-span-4 w-full h-full flex justify-end items-center space-x-6 lg:space-x-10"
    >
      <NotificationIcon fill="#FD7014" class="cursor-pointer" />
      <SearchIcon
        fill="#FD7014"
        class="cursor-pointer lg:hidden"
        @click="openSearchbar"
      />
      <p class="lg:flex hidden text-md text-main text-center">
        Luka Kotchloshvili
      </p>
      <div
        class="w-10 h-10 bg-gradient-to-tr from-main to-red-500 rounded-full p-[2px]"
      >
        <img
          src="https://i.pinimg.com/originals/35/b5/49/35b549a74bd709c3cb3e8e499442e90a.jpg"
          alt="Profile Picture"
          class="w-full h-full rounded-full object-cover object-center"
        />
      </div>
    </div>
  </div>
  <div
    class="absolute top-20 left-0 w-full min-h-[calc(100vh-5rem)] h-auto bg-background px-6"
  >
    <div class="w-full h-[4000px] bg-main"></div>
  </div>
</template>

<script setup>
import NotificationIcon from "@/assets/icons/NotificationIcon.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import UserSidebar from "@/components/Layout/UserSidebar.vue";
import Searchbar from "@/components/modals/Searchbar.vue";
import SearchContainer from "@/components/modals/SearchContainer.vue";
import { ref } from "vue";

const sidebar = ref(false);
const search = ref("");
const searchbar = ref(false);

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
</script>
