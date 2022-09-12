<template>
  <div
    class="w-full h-screen bg-black bg-opacity-50 fixed top-0 left-0 flex flex-col justify-start items-center z-50 py-16 px-6 backdrop-blur-sm"
  >
    <CloseIcon
      fill="#FD7014"
      class="absolute right-6 top-6"
      @click="closeSearchbar"
    />
    <input
      type="text"
      class="px-2 text-main w-full h-10 bg-transparent outline-none border-[1px] border-main rounded-lg"
      placeholder="Search anything..."
      v-model="search"
    />
  </div>
  <SearchCard />
</template>

<script setup>
import SearchCard from "@/components/cards/SearchCard.vue";
import CloseIcon from "@/assets/icons/CloseIcon.vue";
import { ref } from "vue";

const emit = defineEmits(["closeSearch"]);
const search = ref("");

const closeSearchbar = () => {
  emit("closeSearch");
};
</script>
