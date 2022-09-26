<template>Hello User {{ store?.user?.name }}</template>

<script setup>
import { useUserStore } from "@/stores/userStore.js";
import { ref, watch } from "vue-demi";

const store = useUserStore();

store.getUserInfo();

console.log(store?.user?.name);
</script>
