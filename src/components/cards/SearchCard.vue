<template>
  <div class="w-full h-20 bg-background rounded-lg grid grid-cols-8">
    <div class="col-span-2 flex justify-center items-center">
      <div
        class="w-14 h-14 p-[2px] bg-gradient-to-tr from-main to-red-500 rounded-full"
      >
        <img
          class="w-full h-full object-cover object-center rounded-full"
          src="https://i.pinimg.com/originals/35/b5/49/35b549a74bd709c3cb3e8e499442e90a.jpg"
          alt="Profile Picture"
        />
      </div>
    </div>
    <div class="col-span-3 flex justify-start items-center px-4">
      <p class="text-md text-main">Luka Kotchloshvili</p>
    </div>
    <div
      class="col-span-3 w-full h-full flex justify-center items-center space-x-6"
    >
      <AddFriendIcon fill="#FD7014" class="cursor-pointer" />
      <RejectFriendIcon fill="#FD7014" class="cursor-pointer" />
      <RemoveFriendIcon fill="#FD7014" class="cursor-pointer" />
    </div>
  </div>
</template>

<script setup>
import AddFriendIcon from "@/assets/icons/AddFriendIcon.vue";
import RejectFriendIcon from "@/assets/icons/RejectFriendIcon.vue";
import RemoveFriendIcon from "@/assets/icons/RemoveFriendIcon.vue";
</script>
