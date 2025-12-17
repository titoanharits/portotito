<script setup>
import data from '../data.json';
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline';

// 1. Simpan class panjang di sini sebagai variable const
const socialBtnClass = "w-32 h-12 flex items-center justify-center gap-2 text-black border-2 border-transparent shadow-[4px_4px_0px_0px_#333] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:border-white transition-all duration-200 uppercase text-sm tracking-wider bg-[#FF6B6B]";

// Kita perlu map warna background secara manual karena bg-color beda-beda tiap tombol
</script>

<template>
  <footer class="relative z-10">
    
    <div class="bg-[#C9C4E3] py-20 px-6 flex flex-col items-center justify-center text-center border-t-8 border-[#FF2F92]">
      
      <p class="font-mono text-black text-lg md:text-xl mb-4 tracking-widest lowercase">
        ready to build story?
      </p>

      <a :href="'mailto:' + data.profile.email" class="group">
        <h2 class="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-10 text-black group-hover:text-[#FF2F92] transition-colors duration-300">
          LET'S TALK
        </h2>
      </a>

      <div class="flex flex-wrap justify-center gap-6 mb-16">
        
        <a :href="data.profile.whatsapp" target="_blank"
           :class="[socialBtnClass, 'bg-[#FF6B6B]!']">
           <span class="font-black">Whatsapp</span>
           <ArrowUpRightIcon class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>

        <a :href="data.profile.linkedin" target="_blank" 
           :class="[socialBtnClass, 'bg-[#4ECDC4]!']">
           <span class="font-black">LinkedIn</span>
           <ArrowUpRightIcon class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>

        <a :href="data.profile.github" target="_blank" 
           :class="[socialBtnClass, 'bg-[#FFE66D]!']">
           <span class="font-black">GitHub</span>
           <ArrowUpRightIcon class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>

      </div>

      <div class="font-mono text-sm text-gray-500 flex flex-col gap-2">
        <p>
          Built with <span class="text-[#41B883] font-bold">Vue.js</span>
        </p>
        <p>
         titoanharits © {{ new Date().getFullYear() }}
        </p>
      </div>

    </div>
  </footer>
</template>

<style scoped>
/* Kosongkan atau hapus bagian ini */
</style>