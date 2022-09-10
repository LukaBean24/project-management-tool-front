<template>
  <GuestLayout>
    <div class="w-full h-[550px] grid grid-cols-2">
      <div class="w-full h-full col-span-1">
        <OrganizeProjectIllustration />
      </div>
      <div class="w-full h-full col-span-1 flex justify-center items-center">
        <p class="text-center text-main text-5xl font-semibold">
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
          <MetaLogo />
          <TeslaLogo />
          <TwitterLogo />
          <OmegaLogo />
          <LinkedInLogo />
        </div>
      </div>
    </div>
    <div
      id="features"
      class="w-full h-screen pt-[1px] bg-gradient-to-l from-main to-background"
    >
      <div class="w-full h-full bg-background">
        <div class="w-full h-20 flex justify-center items-center">
          <p class="text-2xl text-main">Features</p>
        </div>
        <div class="w-full h-[calc(100%-5rem)] grid grid-cols-2">
          <div class="col-span-1 flex flex-col justify-center items-center">
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
          <div class="col-span-1 flex justify-center items-center">
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
