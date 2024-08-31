<template>
  <h1 class="text-center">Programs</h1>

  <section>
    <div v-for="program in programs" :key="program.id">
      <h2>{{ program.programName }}</h2>
      <p>{{ program.programDescription }}</p>
      <p>Average Rating: {{ calculateAverage(program.id) }}</p>
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

function calculateAverage(id) {
  const targetProgram = computed(() => {
    return programsWithAverageRating.value.find(
      (programsWithAverageRating) => programsWithAverageRating.id === id
    )
  })

  return targetProgram.value.averageRating
}

const programsWithAverageRating = computed(() => {
  return program.map((p) => {
    const totalRating = p.reviews.reduce((sum, review) => sum + review.rating, 0)
    const averageRating =
      p.reviews.length > 0 ? (totalRating / p.reviews.length).toFixed(1) : 'No reviews'
    return {
      ...p,
      averageRating
    }
  })
})

console.log(programsWithAverageRating.value)
</script>
