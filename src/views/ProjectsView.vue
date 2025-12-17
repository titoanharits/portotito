<script setup>
import ProjectCard from '../components/ProjectCard.vue';
import data from '../data.json';
</script>

<template>
  <div class="min-h-screen pt-28 pb-32 px-6 lg:px-12 max-w-7xl mx-auto mb-32">
    <h1 class="text-5xl md:text-5xl font-black text-white mb-12 shadow-[4px_4px_0px_0px_black] inline-block bg-[#4D6BFF] border-4 border-black px-4 pb-2">
      #projects
    </h1>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard 
        v-for="project in data.projects"
        :key="project.id"
        :title="project.title"
        :role="project.role"
        :project_type="project.project_type"
        :desc="project.description"
        :tech="project.tech"
        :link="project.link"
        :image="project.image"
      />
    </div>
  </div>
</template>