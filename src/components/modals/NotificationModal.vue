<template>
  <div
    class="w-full h-screen fixed z-50 top-0 left-0 bg-black bg-opacity-50 backdrop-blur-sm"
    @click.self="closeNotifications"
  >
    <div
      class="w-8 h-8 absolute bg-background rotate-45 top-[70px] right-[275px]"
    ></div>
    <div
      class="w-96 h-96 bg-background absolute top-20 right-[105px] rounded-lg px-3 overflow-y-auto pb-6"
    >
      <CloseIcon
        fill="#FD7014"
        class="cursor-pointer absolute top-3 right-3"
        @click="closeNotifications"
      />
      <div class="w-full h-1/6 flex justify-center items-center">
        <p class="text-lg text-main">Notifications</p>
      </div>
      <div
        class="w-full h-20 bg-secondary rounded-lg grid grid-cols-9 cursor-pointer mt-3"
      >
        <div class="col-span-2 flex justify-center items-center">
          <div class="w-14 h-14 bg-green-500 rounded-full"></div>
        </div>
        <div
          class="col-span-6 p-3 overflow-hidden shadow-secondary shadow-inner relative"
        >
          <div
            class="w-full h-full absolute bg-gradient-to-t from-secondary"
          ></div>
          <p class="text-sm text-main">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            reprehenderit tempore in et iste omnis rem eaque voluptatem
            voluptate neque.
          </p>
        </div>
        <div class="col-span-1 flex justify-center items-center">
          <p class="text-xs text-main">20m</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CloseIcon from "@/assets/icons/CloseIcon.vue";
const emit = defineEmits(["closeNotificationModal"]);

const closeNotifications = () => {
  emit("closeNotificationModal");
};
</script>
