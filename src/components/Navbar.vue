<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="fixed top-0 w-full z-50 px-6 py-4 bg-[#FF2F92] border-b-4 border-black flex justify-between items-center">
    <router-link to="/" class="text-2xl font-black tracking-tighter hover:underline decoration-4 underline-offset-4 decoration-[#FF6B6B]">
      PORTOTITO.
    </router-link>

    <ul class="hidden md:flex gap-6 text-sm font-bold uppercase tracking-widest">
      <li v-for="item in ['Home', 'About', 'Projects']" :key="item">
        <router-link 
          :to="item === 'Home' ? '/' : '/' + item.toLowerCase()" 
          class="px-4 py-2 border-2 border-transparent hover:border-black hover:bg-[#FFD400] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
          active-class="bg-black text-white hover:bg-black hover:text-white hover:shadow-none"
        >
          {{ item }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>