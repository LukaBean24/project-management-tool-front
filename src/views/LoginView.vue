<template>
  <GuestLayout>
    <form
      @submit.prevent="onSubmit"
      class="w-full h-[calc(100vh-5rem)] flex flex-col justify-center items-center lg:grid lg:grid-cols-2"
    >
      <div
        class="lg:col-span-1 w-full h-full flex flex-col justify-center items-center"
      >
        <div class="w-full lg:w-2/3 h-20 flex justify-center items-center">
          <p class="text-3xl text-main font-semibold">Login</p>
        </div>
        <div
          class="w-full lg:w-2/3 h-28 flex flex-col justify-evenly items-start px-6"
        >
          <label for="email" class="text-xl text-main">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full h-10 border-[1px] border-main rounded-lg bg-transparent text-main outline-none px-2"
          />
          <div
            v-if="emailError"
            class="w-full h-10 flex text-sm justify-start items-center text-red-500"
          >
            {{ emailError }}
          </div>
        </div>

        <div
          class="w-full lg:w-2/3 h-28 flex flex-col justify-evenly items-start px-6 relative"
        >
          <label for="password" class="text-xl text-main">Password</label>

          <div class="w-full h-10 flex justify-center items-center">
            <VissibleIcon
              v-if="!passwordIsVissible"
              @click="makePasswordVissible"
              class="absolute right-8 cursor-pointer"
              width="20px"
              height="20px"
              fill="#FD7014"
            />
            <UnvissibleIcon
              v-else
              @click="makePasswordUnvissible"
              class="absolute right-8 cursor-pointer"
              width="20px"
              height="20px"
              fill="#FD7014"
            />
            <input
              v-model="password"
              :type="passwordIsVissible ? 'text' : 'password'"
              class="w-full h-10 border-[1px] border-main rounded-lg bg-transparent text-main outline-none px-2"
            />
          </div>
          <div
            v-if="passwordError"
            class="w-full h-10 text-sm flex justify-start items-center text-red-500"
          >
            {{ passwordError }}
          </div>
        </div>
        <div
          v-if="errorMessage"
          class="w-lg:w-2/3 h-10 flex justify-center items-end px-6 text-red-500"
        >
          {{ errorMessage }}
        </div>
        <div
          class="w-full lg:w-2/3 h-28 flex flex-col justify-evenly items-start px-6"
        >
          <button
            type="submit"
            class="w-full h-12 bg-main text-xl text-whit rounded-lg"
          >
            Log In
          </button>
        </div>
        <div class="w-full lg:w-2/3 h-8 px-6 grid grid-cols-5">
          <div
            class="col-span-2 w-full h-full flex justify-center items-center"
          >
            <div class="w-full h-[1px] bg-gradient-to-r from-main"></div>
          </div>
          <div
            class="col-span-1 w-full h-full flex justify-center items-center text-md text-main"
          >
            OR
          </div>
          <div
            class="col-span-2 w-full h-full flex justify-center items-center"
          >
            <div class="w-full h-[1px] bg-gradient-to-l from-main"></div>
          </div>
        </div>
        <div
          class="w-full lg:w-2/3 h-28 flex flex-col justify-evenly items-start px-6"
        >
          <button
            type="button"
            class="w-full h-12 bg-main text-xl text-whit rounded-lg flex justify-center items-center space-x-6"
          >
            <p>Continue with Google</p>
            <GoogleIcon fill="#ffffff" />
          </button>
        </div>
      </div>
      <div class="lg:col-span-1 lg:flex justify-center items-center hidden">
        <LoginIllustration />
      </div>
    </form>
  </GuestLayout>
</template>
<script setup>
import GuestLayout from "@/components/Layout/GuestLayout.vue";
import GoogleIcon from "@/assets/icons/GoogleIcon.vue";
import VissibleIcon from "@/assets/icons/VissibleIcon.vue";
import UnvissibleIcon from "@/assets/icons/UnvissibleIcon.vue";
import LoginIllustration from "@/assets/illustrations/LoginIllustration.vue";
import axios from "@/config/axios/index.js";
import { setJwtToken } from "@/helpers/jwt/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");
const emailError = ref("");
const passwordError = ref("");
const errorMessage = ref();
const passwordIsVissible = ref(false);

const makePasswordVissible = () => {
  passwordIsVissible.value = true;
};
const makePasswordUnvissible = () => {
  passwordIsVissible.value = false;
};

const onSubmit = () => {
  axios
    .post("/login", {
      email: email.value,
      password: password.value,
    })
    .then((response) => {
      if (response.status === 200) {
        setJwtToken(response.data.access_token, response.data.expires_in);
        router.push({ name: "workspaces" });
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        errorMessage.value = error.response.data.error;
        emailError.value = "";
        passwordError.value = "";
      } else if (error.response.status === 422) {
        passwordError.value = error.response.data.errors.password[0];
        emailError.value = error.response.data.errors.email[0];
        errorMessage.value = "";
      }
    });
};
</script>
