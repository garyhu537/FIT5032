<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Programs</h1>
    
    <section>
      <div class="row">
        <div class="col-md-6 mb-6" v-for="program in programs" :key="program.id">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">{{ program.programName }}</h2>
              <p class="card-text">{{ program.programDescription }}</p>
              <p class="card-text">Average Rating: {{ findAverage(program.id) }}</p>
            </div>
            <div class="card-footer">
              <h3 class="card-title">Comments</h3>
              <ul>
                <li v-for="review in program.reviews" :key="review.id" class="p-2 border-bottom">
                  <strong>Rated: {{ review.rating }}</strong>
                  <p> {{ review.comment }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import program from '@/assets/json/program.json'

const programs = computed(() => {
  return program
})

function findAverage(id) {
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
    const averageRating = p.reviews.length > 0 ? (totalRating / p.reviews.length).toFixed(1) : 'No reviews'
    return {
      id: p.id,
      averageRating: averageRating
    }
  })
})

console.log(programsWithAverageRating.value)
</script>
