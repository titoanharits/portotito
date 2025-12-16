<script setup>
import { ref } from 'vue';
import data from '../data.json';
import { EnvelopeIcon, ArrowTopRightOnSquareIcon, ChevronDownIcon } from '@heroicons/vue/24/outline';

// State untuk melacak item Work Exp mana yang sedang terbuka
const activeAccordion = ref(null);

// Fungsi untuk toggle accordion
const toggleAccordion = (index) => {
  if (activeAccordion.value === index) {
    activeAccordion.value = null; // Tutup jika diklik lagi
  } else {
    activeAccordion.value = index; // Buka yang diklik
  }
};
</script>

<template>
  <div class="min-h-screen pt-28 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
    
    <h1 class="text-5xl md:text-7xl font-black uppercase mb-12 shadow-[4px_4px_0px_0px_#A3E635] inline-block bg-white border-4 border-black px-4">
      About Me
    </h1>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <div class="lg:col-span-4 bg-[#E0E7FF] border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] top-28">
        <h2 class="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">Profile</h2>
        
        <div class="text-lg font-bold font-mono leading-relaxed mb-8">
            <p v-for="(paragraph, index) in data.profile.about_me" 
                :key="index" 
                class="mb-4">
                {{ paragraph }}
            </p>
        </div>

        <div>
          <h3 class="text-xl font-black mb-4 uppercase">Contact</h3>
          <div class="flex gap-3">
            <a :href="'mailto:' + data.profile.email" class="w-12 h-12 bg-[#FF6B6B] border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 hover:shadow-none">
              <EnvelopeIcon class="w-6 h-6" />
            </a>
            <a href="{{ data.profile.linkedin }}" class="w-12 h-12 bg-[#4ECDC4] border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 hover:shadow-none">
              <span class="font-black text-lg">in</span>
            </a>
             <a href="{{ data.profile.github }}" class="w-12 h-12 bg-[#FFE66D] border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 hover:shadow-none">
              <span class="font-black text-lg">Gh</span>
            </a>
          </div>
        </div>
      </div>


      <div class="lg:col-span-8 flex flex-col gap-12">
        
				<section>
					<h2 class="text-3xl font-black mb-6 uppercase flex items-center gap-2">
						SKILLS
					</h2>
					
					<div class="grid grid-cols-4 md:grid-cols-8 gap-x-6 gap-y-10">
						<div 
							v-for="skill in data.skills" 
							:key="skill.name"
							class="flex flex-col items-center justify-center gap-3 group cursor-pointer"
						>
							<img 
								:src="skill.logo" 
								:alt="skill.name" 
								class="w-14 h-14 transition-all duration-300 group-hover:-translate-y-2 group-hover:translate-x-1"
								style="filter: drop-shadow(5px 5px 0px #000);"
							>
							
							<span class="font-bold font-mono text-xs uppercase bg-white border-2 border-black px-2 py-0.5 shadow-[3px_3px_0px_0px_#000] group-hover:shadow-none group-hover:translate-x-[3px] group-hover:translate-y-[3px] transition-all">
								{{ skill.name }}
							</span>
						</div>
					</div>
				</section>

        <section>
          <h2 class="text-3xl font-black mb-6 uppercase flex items-center gap-2">
            WORK EXPERIENCE
          </h2>
          
          <div class="flex flex-col gap-4">
            <div 
              v-for="(job, index) in data.experience" 
              :key="index"
              class="border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000] transition-all"
            >
              <button 
                @click="toggleAccordion(index)"
                class="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 focus:outline-none"
              >
                <div>
                  <h3 class="text-xl md:text-2xl font-black uppercase">{{ job.role }}</h3>
                  <p class="text-sm font-bold font-mono text-gray-600 mt-1">{{ job.company }} | {{ job.period }}</p>
                </div>
                <ChevronDownIcon 
                  class="w-8 h-8 border-2 border-black rounded-full p-1 transition-transform duration-300"
                  :class="activeAccordion === index ? 'rotate-180 bg-black text-white' : 'bg-white text-black'"
                />
              </button>

              <div 
                v-show="activeAccordion === index"
                class="border-t-4 border-black bg-[#F0F0F0] p-6 animate-slide-down"
              >
                <ul class="list-disc pl-5 space-y-2 font-mono text-sm font-medium">
                  <li v-for="(point, i) in job.desc" :key="i" class="pl-2 marker:text-black">
                    {{ point }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animasi simpel untuk accordion */
.animate-slide-down {
  animation: slideDown 0.3s ease-out forwards;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>