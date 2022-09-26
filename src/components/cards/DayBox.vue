<template>
  <EventModal
    v-if="eventModalOpened"
    :date="date"
    :events="todaysEvents"
    @eventModalClose="closeEventModal"
  />
  <div
    @click="openEventModal"
    class="col-span-1 w-full h-full border-none bg-background flex justify-center items-center relative"
    :class="markers ? 'cursor-pointer' : ''"
  >
    <div
      v-if="markers"
      class="w-3 h-3 rounded-full bg-red-500 absolute top-1 left-1"
    ></div>
    <p class="text-sm text-main">{{ date.slice(-2) }}</p>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import EventModal from "@/components/modals/EventModal.vue";

const props = defineProps(["date", "events"]);
const meetings = ref([]);
const projects = ref([]);
const tasks = ref([]);
const eventModalOpened = ref(false);
const todaysEvents = ref([]);

watch(props, () => {
  if (props.events.length > 0 && props.date.length > 0) {
    projects.value = props.events.filter(
      (event) => event.type === "Project" && event.finish_date === props.date
    );
    tasks.value = props.events.filter(
      (event) => event.type === "Task" && event.finish_date === props.date
    );
    meetings.value = props.events.filter(
      (event) =>
        event.type === "Event" && event.start_date.slice(0, 10) === props.date
    );
  }
  todaysEvents.value = props.events.filter(
    (event) =>
      event.start_date === props.date || event.finish_date === props.date
  );
});

const markers = computed(() => {
  if (
    meetings.value.length > 0 ||
    projects.value.length > 0 ||
    tasks.value.length > 0
  ) {
    return true;
  }

  return false;
});

const openEventModal = () => {
  eventModalOpened.value = true;
};

const closeEventModal = () => {
  eventModalOpened.value = false;
};
</script>
