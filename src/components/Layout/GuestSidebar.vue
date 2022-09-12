<template>
  <div
    class="fixed w-1/2 h-screen bg-whit top-0 duration-200 z-40 flex flex-col justify-start items-center"
    :class="sidebar ? 'right-0' : '-right-1/2'"
  >
    <div class="w-full h-1/6"></div>
    <div class="w-full h-5/6 flex flex-col justify-evenly items-center">
      <a
        href="#home"
        @click="closeSidebar"
        class="text-lg text-main duration-150 hover:text-secondary"
      >
        Home
      </a>
      <a
        @click="closeSidebar"
        href="#features"
        class="text-lg text-main duration-150 hover:text-secondary"
      >
        Features
      </a>
      <a
        @click="closeSidebar"
        href="#pricing"
        class="text-lg text-main duration-150 hover:text-secondary"
      >
        Pricing
      </a>
      <a
        @click="closeSidebar"
        href="#about"
        class="text-lg text-main duration-150 hover:text-secondary"
      >
        About Us
      </a>
      <a
        @click="closeSidebar"
        href="#contact"
        class="text-lg text-main duration-150 hover:text-secondary"
      >
        Contact
      </a>
      <router-link
        @click="closeSidebar"
        to="login"
        class="text-lg text-main duration-150 hover:text-secondary"
      >
        Log in
      </router-link>
      <router-link
        @click="closeSidebar"
        to="register"
        class="text-lg text-main duration-150 hover:text-secondary"
      >
        Sign up
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { useUiStore } from "@/stores/uiStore.js";
import { storeToRefs } from "pinia";

const store = useUiStore();
const { sidebar } = storeToRefs(store);

const closeSidebar = () => {
  store.closeSidebar();
};
</script>
