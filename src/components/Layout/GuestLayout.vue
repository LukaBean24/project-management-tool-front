<template>
  <div
    class="w-full h-auto flex flex-col justify-start items-center bg-background"
  >
    <div class="w-full h-20 bg-secondary flex justify-center items-center">
      <div
        class="w-[90%] h-full flex justify-start items-center lg:grid grid-cols-6 relative"
      >
        <div class="col-span-1 flex justify-start items-center">
          <p class="text-4xl text-whit font-bold">
            Action<span class="text-main">Point</span>
          </p>
        </div>
        <div
          class="col-span-4 hidden lg:flex justify-end items-center px-6 space-x-6"
        >
          <p
            class="text-xl text-main cursor-pointer hover:text-whit duration-200"
          >
            Home
          </p>
          <p
            class="text-xl text-main cursor-pointer hover:text-whit duration-200"
          >
            Features
          </p>
          <p
            class="text-xl text-main cursor-pointer hover:text-whit duration-200"
          >
            Pricing
          </p>
          <p
            class="text-xl text-main cursor-pointer hover:text-whit duration-200"
          >
            About Us
          </p>
          <p
            class="text-xl text-main cursor-pointer hover:text-whit duration-200"
          >
            Contact
          </p>
        </div>
        <div
          class="hidden col-span-1 lg:flex justify-end items-center space-x-6"
        >
          <p
            class="text-xl text-main cursor-pointer hover:text-whit duration-200"
          >
            Log In
          </p>
          <button
            class="px-6 h-10 bg-main text-whit rounded-lg hover:bg-orange-600 duration-200"
          >
            Sign Up
          </button>
        </div>
        <div class="w-10 h-8 absolute right-0 flex flex-col justify-between">
          <div class="w-full h-1 bg-main"></div>
          <div class="w-[80%] h-1 bg-main"></div>
          <div class="w-full h-1 bg-main"></div>
        </div>
      </div>
    </div>
    <div class="w-[90%] h-auto min-h-[calc(100vh-5rem)]"><slot></slot></div>
  </div>
</template>
