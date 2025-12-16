<script setup>
import { ref } from 'vue';
import data from '../data.json';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';


const activeAccordion = ref(null);

const toggleAccordion = (index) => {
  if (activeAccordion.value === index) {
    activeAccordion.value = null;
  } else {
    activeAccordion.value = index;
  }
};
</script>

<template>
  <div class="min-h-screen pt-28 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
    
    <h1 class="text-5xl md:text-5xl font-black text-white mb-12 shadow-[4px_4px_0px_0px_black] inline-block bg-[#4D6BFF] border-4 border-black px-4">
      #aboutMe
    </h1>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <div class="lg:col-span-4 bg-[#F6F1E8] border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000] top-28">
        <h2 class="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">ANHARITS PANTITO</h2>
        
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
            <a 
							:href="data.profile.linkedin" 
							target="_blank" 
							rel="noopener noreferrer"
							class="w-12 h-12 bg-[#00b63d] border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 hover:shadow-none"
							title="LinkedIn"
						>
							<span class="font-black text-lg">wa</span>
						</a>
						<a 
							:href="data.profile.linkedin" 
							target="_blank" 
							rel="noopener noreferrer"
							class="w-12 h-12 bg-[#3aa0ff] border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 hover:shadow-none"
							title="LinkedIn"
						>
							<span class="font-black text-lg">in</span>
						</a>
            <a 
							:href="data.profile.github" 
							target="_blank" 
							rel="noopener noreferrer"
							class="w-12 h-12 bg-[#f2f535] border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 hover:shadow-none"
							title="LinkedIn"
						>
							<span class="font-black text-lg">git</span>
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
							
							<span class="font-bold font-mono text-xs uppercase bg-[#F6F1E8] border-2 border-black px-2 py-0.5 shadow-[3px_3px_0px_0px_#000] group-hover:shadow-none group-hover:translate-x-0.75 group-hover:translate-y-0.75 transition-all">
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
              class="border-4 border-black bg-[#F6F1E8] shadow-[6px_6px_0px_0px_#000] transition-all"
            >
              <button 
                @click="toggleAccordion(index)"
                class="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 focus:outline-none"
              >
                <div>
                  <h3 class="text-xl md:text-2xl font-black uppercase">{{ job.role }}</h3>
                  <p class="text-sm font-bold font-mono text-gray-600 mt-1">{{ job.company }}</p>
									<p class="text-sm font-bold font-mono text-gray-600 mt-1">{{ job.period }}</p>
                </div>
                <ChevronDownIcon 
                  class="w-8 h-8 border-2 border-black rounded-full p-1 transition-transform duration-300"
                  :class="activeAccordion === index ? 'rotate-180 bg-black text-white' : 'bg-[#FFD400] text-black'"
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