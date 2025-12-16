<script setup>
defineProps({
  title: String,
  desc: String,
  tech: Array
})
</script>

<template>
  <div class="group relative bg-white border-4 border-black p-6 h-full transition-all duration-200 hover:-translate-y-2 hover:-translate-x-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
    
    <div class="h-48 bg-[#4ECDC4] border-b-4 border-black mb-6 flex items-center justify-center overflow-hidden -mx-6 -mt-6">
      <span class="text-4xl font-black text-black opacity-20">IMG</span>
    </div>

    <h3 class="text-2xl font-black mb-3 uppercase leading-tight">{{ title }}</h3>
    
    <p class="text-sm font-bold text-gray-600 mb-6 font-sans border-l-4 border-[#FF6B6B] pl-3">
      {{ desc }}
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
      <a href="#" class="inline-block text-sm font-bold underline decoration-2 underline-offset-2 hover:bg-black hover:text-white px-1">
        Read Case Study ->
      </a>
    </div>
  </div>
</template>