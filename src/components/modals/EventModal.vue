<template>
  <div
    class="w-full h-screen fixed left-0 top-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex justify-center items-center"
  >
    <div
      class="w-[85%] lg:w-1/3 h-[90%] bg-background rounded-lg space-y-6 px-3 lg:px-6 pb-6 overflow-y-auto relative"
    >
      <CloseIcon
        class="absolute lg:right-6 lg:top-6 right-3 top-3 cursor-pointer"
        fill="#FD7014"
        @click="closeEventModal"
      />
      <div class="w-full h-[10%] flex justify-center items-center">
        <p class="text-md text-main">{{ formattedDate }}</p>
      </div>
      <EventCard v-for="event in events" :event="event" />
    </div>
  </div>
</template>

<script setup>
import { getFormattedDate } from "@/helpers/date/index.js";
import { ref } from "vue";
import EventCard from "@/components/cards/EventCard.vue";
import CloseIcon from "@/assets/icons/CloseIcon.vue";

const props = defineProps(["date", "events"]);
const emit = defineEmits(["eventModalClose"]);

const year = props.date.slice(0, 4);
const month = props.date.slice(5, 7);
const day = props.date.slice(-2);
const formattedDate = ref(getFormattedDate(year, month, day));

const closeEventModal = () => {
  emit("eventModalClose");
};
</script>
