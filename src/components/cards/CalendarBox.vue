<template>
  <div
    class="lg:col-span-1 lg:row-span-2 lg:h-auto w-full h-96 bg-secondary border-[1px] border-main rounded-lg overflow-y-auto"
  >
    <div class="w-full h-1/6 flex justify-between items-center px-6">
      <p class="text-xl text-main">Calendar</p>
      <CalendarIcon fill="#FD7014" />
    </div>
    <div class="w-full h-5/6 border-t-[1px] border-main">
      <div
        class="w-full h-1/6 flex justify-center items-center border-b-[1px] border-main relative"
      >
        <DoubleLeftArrowIcon
          class="absolute left-6 cursor-pointer"
          fill="#FD7014"
          @click="decrementMonth"
        />
        <p class="text-md text-main">{{ monthInWords }} {{ year }}</p>
        <DoubleRightArrowIcon
          class="absolute right-6 cursor-pointer"
          fill="#FD7014"
          @click="incrementMonth"
        />
      </div>
      <div class="w-full h-5/6 grid grid-cols-6 bg-secondary gap-[2px]">
        <DayBox
          v-for="date in dates"
          :key="date"
          :date="date"
          :events="events"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import CalendarIcon from "@/assets/icons/CalendarIcon.vue";
import DoubleRightArrowIcon from "@/assets/icons/DoubleRightArrowIcon.vue";
import DoubleLeftArrowIcon from "@/assets/icons/DoubleLeftArrowIcon.vue";
import DayBox from "@/components/cards/DayBox.vue";
import axios from "@/config/axios/index.js";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { getMonthInWords, getAllDaysInMonth } from "@/helpers/date/index.js";

const route = useRoute();
const month = ref(
  parseInt(new Date().getMonth() + 1).toString().length === 1
    ? "0" + parseInt(new Date().getMonth() + 1).toString()
    : parseInt(new Date().getMonth() + 1).toString()
);
const monthInWords = ref(getMonthInWords(parseInt(month.value)));
const year = ref(new Date().getFullYear());
const dates = ref(getAllDaysInMonth(month.value, year.value));
const events = ref([]);
watch(month, () => {
  monthInWords.value = getMonthInWords(month.value);
  dates.value = getAllDaysInMonth(month.value, year.value);
});

axios
  .post("/calendar", {
    date: year.value + "-" + month.value + "-01",
    workspace: route.params.id,
  })
  .then((response) => {
    events.value = response.data;
  });

const decrementMonth = () => {
  if (parseInt(month.value) === 1) {
    year.value--;
    month.value = "12";
  } else {
    month.value =
      String(parseInt(month.value) - 1).length === 1
        ? "0" + String(parseInt(month.value) - 1)
        : String(parseInt(month.value) - 1);
  }
  axios
    .post("/calendar", {
      date: year.value + "-" + month.value + "-01",
      workspace: route.params.id,
    })
    .then((response) => {
      events.value = response.data;
    });
};
const incrementMonth = () => {
  if (parseInt(month.value) === 12) {
    year.value++;
    month.value = "01";
  } else {
    month.value =
      String(parseInt(month.value) + 1).length === 1
        ? "0" + String(parseInt(month.value) + 1)
        : String(parseInt(month.value) + 1);
  }
  axios
    .post("/calendar", {
      date: year.value + "-" + month.value + "-01",
      workspace: route.params.id,
    })
    .then((response) => {
      events.value = response.data;
    });
};
</script>
