<script setup>
import ProjectCard from '../components/ProjectCard.vue';
import data from '../data.json';
</script>

<template>
  <div class="min-h-screen pt-32 px-6 lg:px-24 pb-20">
    <h2 class="text-4xl font-bold mb-12">Selected Works</h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard 
        v-for="project in data.projects"
        :key="project.id"
        :title="project.title"
        :desc="project.description"
        :tech="project.tech"
      />
    </div>
  </div>
</template>