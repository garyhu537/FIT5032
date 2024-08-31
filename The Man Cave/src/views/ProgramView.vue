<template>
  <h1 class="text-center">Programs</h1>

  <section>
    <div v-for="program in programs" :key="program.id">
      <h2>{{ program.programName }}</h2>
      <p>{{ program.programDescription }}</p>
      <h3>Comments</h3>
      <ul v-for="review in program.reviews" :key="review.rating">
        <li>
          {{ review.rating }}
          {{ review.comment }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import program from '@/assets/json/program.json'

const programs = computed(() => {
  return program
})

const averageRating = computed(() => {
  const average = 0
  return average
})
</script>
