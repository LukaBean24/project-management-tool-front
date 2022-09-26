<template>
  <UserLayout :burger="false">
    <div class="w-full h-10 flex justify-start items-start">
      <p class="text-lg text-main">Workspaces</p>
    </div>
    <!-- <WorkspaceCard
      v-for="workspace in workspaces"
      :key="workspace.id"
      :workspace="workspace"
    /> -->
  </UserLayout>
</template>

<script setup>
import UserLayout from "@/components/Layout/UserLayout.vue";
import WorkspaceCard from "@/components/cards/WorkspaceCard.vue";
import { ref, watch } from "vue";
import axios from "@/config/axios/index.js";
import { useUserStore } from "@/stores/userStore.js";

const workspaces = ref([]);
const store = useUserStore();

console.log(store.userInfo);

// watch(store, () => {
//   axios.get(`/users/${store.user.id}/workspaces`).then((response) => {
//     workspaces.value = response.data;
//   });
// });
</script>
