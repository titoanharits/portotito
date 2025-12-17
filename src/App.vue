<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="font-mono text-black bg-[#E0E7FF] min-h-screen selection:bg-black selection:text-[#FFDEE9]">

    <Navbar />
    
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" class="pb-24 md:pb-0" />
      </transition>
    </router-view>

    <Footer />

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