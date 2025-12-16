<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import { useScrollNavigation } from './composables/useScrollNavigation';

const pages = ['home', 'about', 'projects'];
const pageContainer = ref(null);

const { transitionName } = useScrollNavigation(pages, pageContainer);
</script>

<template>
  <div class="font-mono text-black bg-[#C9C4E3] min-h-screen selection:bg-black selection:text-[#FFDEE9]">
    <div class="fixed inset-0 bg-[#E0E7FF] -z-10 opacity-50" style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 20px 20px;"></div>

    <Navbar />
    
    <router-view v-slot="{ Component }">
      <transition name="transitionName" mode="out-in">
        <component
          :is="Component"
          ref="pageContainer"
          class="h-full w-full overflow-y-auto scroll-smooth" 
        />
      </transition>
    </router-view>
  </div>
</template>

<style>
/* Reset scrollbar agar terlihat kasar */
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background: #fff;
  border-left: 2px solid #000;
}
::-webkit-scrollbar-thumb {
  background: #000;
  border: 2px solid #fff;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>