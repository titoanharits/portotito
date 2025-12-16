<script setup>
import { RouterLink } from 'vue-router';
// Import ikon untuk Bottom Navbar
import { HomeIcon, UserIcon, BriefcaseIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <nav class="fixed top-0 w-full z-50 px-6 py-4 bg-[#FF2F92] border-b-4 border-black flex items-center">
    
    <router-link to="/" class="text-2xl font-black tracking-tighter decoration-4 underline-offset-4 decoration-[#FFD400]">
      .PORTOTITO
    </router-link>

    <div class="hidden md:flex absolute right-6 gap-6 text-sm font-bold uppercase tracking-widest">
      <router-link 
        v-for="item in ['Home', 'About', 'Projects']" 
        :key="item"
        :to="item === 'Home' ? '/' : '/' + item.toLowerCase()" 
        class="px-4 py-2 border-2 border-transparent hover:border-black hover:bg-[#FFD400] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
        active-class="bg-black text-white hover:bg-black hover:text-white hover:shadow-none"
      >
        {{ item }}
      </router-link>
    </div>
  </nav>

  <nav class="md:hidden fixed bottom-0 w-full z-50 bg-[#FFD400] border-t-4 border-black flex justify-around items-center px-2 py-2 shadow-[0px_-4px_0px_0px_rgba(0,0,0,0.1)]">
    
    <router-link to="/" class="flex flex-col items-center gap-1 p-2 rounded-lg transition-all" active-class="text-[#FF2F92] font-black scale-110">
      <HomeIcon class="w-6 h-6 stroke-2" />
    </router-link>

    <router-link to="/about" class="flex flex-col items-center gap-1 p-2 rounded-lg transition-all" active-class="text-[#FF2F92] font-black scale-110">
      <UserIcon class="w-6 h-6 stroke-2" />
    </router-link>

    <router-link to="/projects" class="flex flex-col items-center gap-1 p-2 rounded-lg transition-all" active-class="text-[#FF2F92] font-black scale-110">
      <BriefcaseIcon class="w-6 h-6 stroke-2" />
    </router-link>

  </nav>
</template>