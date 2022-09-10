<template>
  <GuestLayout>
    <div id="home" class="w-full h-[550px] lg:grid grid-cols-2 relative">
      <div
        class="w-full h-full lg:col-span-1 sm:flex justify-center items-center"
      >
        <OrganizeProjectIllustration />
      </div>
      <div
        class="w-full absolute top-3 h-20 lg:h-full lg:static lg:col-span-1 flex justify-center items-center"
      >
        <p class="text-center text-main text-2xl lg:text-5xl font-semibold">
          Make Your Project's Lifecycle <br />
          Funnier and Easy
        </p>
      </div>
    </div>
    <div
      class="w-full h-[318px] flex justify-center items-center pt-[1px] bg-gradient-to-l from-main to-background"
    >
      <div class="w-full h-full bg-background py-6">
        <div class="w-full h-1/6 flex justify-center items-center">
          <p class="text-2xl text-main">Trusted By Many Companies</p>
        </div>
        <div class="w-full h-5/6 flex justify-evenly items-center">
          <MetaLogo class="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px]" />
          <TeslaLogo class="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px]" />
          <TwitterLogo class="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px]" />
          <OmegaLogo class="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px]" />
          <LinkedInLogo class="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px]" />
        </div>
      </div>
    </div>
    <div
      id="features"
      class="w-full h-auto lg:h-screen pt-[1px] bg-gradient-to-l from-main to-background"
    >
      <div class="w-full h-full bg-background">
        <div class="w-full h-20 flex justify-center items-center">
          <p class="text-2xl text-main">Features</p>
        </div>
        <div
          class="w-full h-[calc(100%-5rem)] flex flex-col lg:grid lg:grid-cols-2"
        >
          <div class="lg:col-span-1 flex flex-col justify-center items-center">
            <div class="w-full h-20 flex justify-start items-center">
              <p class="text-2xl text-main">Project Planning</p>
            </div>
            <div class="w-full h-20 flex justify-start items-center">
              <p class="text-2xl text-main">Task Management</p>
            </div>
            <div class="w-full h-20 flex justify-start items-center">
              <p class="text-2xl text-main">
                Communication, Direct messages and group chat inside workspace
              </p>
            </div>
            <div class="w-full h-20 flex justify-start items-center">
              <p class="text-2xl text-main">
                Resource Management, create teams for projects or assign tasks
                to them
              </p>
            </div>
            <div class="w-full h-20 flex justify-start items-center">
              <p class="text-2xl text-main">Share needed documents and files</p>
            </div>
            <div class="w-full h-20 flex justify-start items-center">
              <p class="text-2xl text-main">
                Slack and Email integration for notifications
              </p>
            </div>
          </div>
          <div class="lg:col-span-1 flex justify-center items-center">
            <TasksIllustration />
          </div>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>

<script setup>
import GuestLayout from "@/components/Layout/GuestLayout.vue";
import OrganizeProjectIllustration from "@/assets/illustrations/OrganizeProjectIllustration.vue";
import TasksIllustration from "@/assets/illustrations/TasksIllustration.vue";
import MetaLogo from "@/assets/logos/MetaLogo.vue";
import TeslaLogo from "@/assets/logos/TeslaLogo.vue";
import TwitterLogo from "@/assets/logos/TwitterLogo.vue";
import OmegaLogo from "@/assets/logos/OmegaLogo.vue";
import LinkedInLogo from "@/assets/logos/LinkedInLogo.vue";
</script>
