<script setup>
import data from '../data.json';
</script>

<template>
  <div class="min-h-screen flex flex-col md:flex-row pt-24 pb-12 px-6 lg:px-12 gap-8 items-center justify-center overflow-hidden">
    
    <div class="w-full md:w-1/2 flex flex-col items-start z-10">
      <div class="bg-[#4D6BFF] text-white px-4 py-1 text-sm font-bold rotate-2 inline-block mb-4 shadow-[4px_4px_0px_0px_black]">
        OPEN FOR WORK
      </div>

      <h1 class="text-6xl md:text-8xl font-black leading-none mb-6">
        HELLO, <br>
        I'M <span class="text-[#4D6BFF] drop-shadow-[4px_4px_0px_black]">TITO</span>
      </h1>

      <p class="text-lg md:text-xl font-bold bg-[#F6F1E8] border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-md">
        {{ data.profile.description }}
      </p>

      <div class="mt-10 flex gap-4">
        <router-link to="/about" class="px-8 py-4 bg-[#FFD400] border-4 border-black text-xl font-black uppercase shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          Get to know Me
        </router-link>
      </div>
    </div>

    <div class="w-full md:w-1/3 relative mt-12 md:mt-0">
      <div class="absolute top-0 right-0 w-full h-full bg-[#8B2CFF] border-4 border-black transform translate-x-4 translate-y-4"></div>
      
      <div class="relative border-4 border-black bg-white p-2">
        <img 
          :src="data.profile.image" 
          alt="Profile" 
          class="w-full h-125 object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
        >
        <div class="absolute -bottom-6 -left-6 bg-[#FFD400] border-4 border-black px-4 py-2 font-black text-2xl rotate-[-5deg]">
          WEBSITE DEV
        </div>
      </div>
    </div>

  </div>
</template>