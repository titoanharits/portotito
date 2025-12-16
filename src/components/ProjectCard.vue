<script setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';

defineProps({
  title: String,
  desc: String,
  project_type: String,
  role: String,
  tech: Array,
  link: String,
  image: String
})
</script>

<template>
  <div class="group relative bg-white border-4 border-black p-6 h-full transition-all duration-200 hover:-translate-y-2 hover:-translate-x-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
    
    <div class="h-48 bg-[#4ECDC4] border-b-4 border-black mb-6 flex items-center justify-center overflow-hidden -mx-6 -mt-6">
      <img 
        v-if="image" 
        :src="image" 
        :alt="title" 
        class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
      >
      
      <div v-else class="w-full h-full flex items-center justify-center bg-[#4ECDC4]">
        <span class="text-4xl font-black text-black opacity-20">IMG</span>
      </div>
    </div>

    <h3 class="text-2xl font-black leading-tight">{{ title }}</h3>
    
    <p class="text-sm text-black mb-4">
      {{ project_type }}
    </p>

    <p class="text-sm font-bold text-black mb-6 border-l-4 border-[#8B2CFF] pl-3">
      {{ role }}
    </p>

    <div class="flex flex-wrap gap-2 mt-auto">
      <span 
        v-for="t in tech" 
        :key="t" 
        class="text-xs font-bold border-2 border-black bg-[#FFE66D] px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
      >
        {{ t }}
      </span>
    </div>

    <div class="mt-6 text-right">
      <a :href="link" target="_blank" class="inline-block text-sm font-bold border-2 bg-pink-500 px-2 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        <ArrowTopRightOnSquareIcon class="w-5 h-5 stroke-2" />
      </a>
    </div>
  </div>
</template>