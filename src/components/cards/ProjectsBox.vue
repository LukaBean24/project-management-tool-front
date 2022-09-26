<template>
  <div
    class="col-span-1 lg:row-span-2 w-full h-96 lg:h-full bg-secondary border-[1px] border-main rounded-lg px-6 space-y-4 lg:space-y-6"
  >
    <div class="w-full h-1/6 flex justify-start items-center">
      <p class="text-xl text-main">Projects</p>
    </div>
    <div class="w-full h-1/6 flex justify-start items-center">
      <p class="text-6xl text-main">{{ projects && projects.length }}</p>
    </div>
    <div
      class="w-full h-10 rounded-lg bg-background flex justify-start items-center relative"
    >
      <div
        class="h-full bg-main rounded-lg"
        :style="'width:' + ongoing + '%;'"
      ></div>
      <p class="text-lg text-white absolute right-6">{{ ongoing }}%</p>
      <p class="text-lg text-white absolute left-6">Ongoing</p>
    </div>
    <div
      class="w-full h-10 rounded-lg bg-background flex justify-start items-center relative"
    >
      <div
        class="h-full bg-main rounded-lg"
        :style="'width:' + completed + '%;'"
      ></div>
      <p class="text-lg text-white absolute right-6">{{ completed }}%</p>
      <p class="text-lg text-white absolute left-6">Completed</p>
    </div>
    <div
      class="w-full h-10 rounded-lg bg-background flex justify-start items-center relative"
    >
      <div
        class="h-full bg-main rounded-lg"
        :style="'width:' + archived + '%;'"
      ></div>
      <p class="text-lg text-white absolute right-6">{{ archived }}%</p>
      <p class="text-lg text-white absolute left-6">Archived</p>
    </div>
    <div class="w-full h-10 flex justify-start items-center">
      <router-link :to="{ name: 'projects' }">
        <span class="flex justify-center items-center cursor-pointer">
          <p class="text-xl text-main">See All</p>
          <DoubleRightArrowIcon fill="#FD7014" />
        </span>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import DoubleRightArrowIcon from "@/assets/icons/DoubleRightArrowIcon.vue";
import { ref } from "vue";

const props = defineProps(["projects"]);
const allProjects = props && props.projects?.length;

const completed = ref(
  parseInt(
    (props.projects.filter((project) => project.stage === "Completed").length /
      allProjects) *
      100
  )
);
const archived = ref(
  parseInt(
    (props.projects.filter((project) => project.stage === "Archived").length /
      allProjects) *
      100
  )
);
const ongoing = ref(
  parseInt(
    (props.projects.filter((project) => project.stage === "Ongoing").length /
      allProjects) *
      100
  )
);

const sum = completed.value + archived.value + ongoing.value;

if (sum > 100) {
  let remainder = sum - 100;
  if (archived.value !== 0) {
    archived.value = archived.value - remainder;
  } else {
    completed.value = completed.value - remainder / 2;
    ongoing.value = ongoing.value - remainder / 2;
  }
} else if (sum < 100) {
  let remainder = 100 - sum;
  if (archived.value !== 0) {
    archived.value = archived.value + remainder;
  } else {
    completed.value = completed.value + remainder / 2;
    ongoing.value = ongoing.value + remainder / 2;
  }
}
</script>
