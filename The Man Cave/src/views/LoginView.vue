<template>
  <div class="login container">
    <h2 class="text-center">Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="row justify-content-center mb-1">
        <div class="col-md-6 col-sm-6">
          <label for="email" class="form-label">Email:</label>
          <input type="text" v-model="email" id="email" class="form-control" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6 col-sm-6">
          <label for="password" class="form-label">Password:</label>
          <input type="password" v-model="password" id="password" class="form-control" />
        </div>
      </div>

      <div class="row justify-content-center mt-2">
        <div class="col-12 col-md-3 d-flex justify-content-center justify-content-md-start">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>

        <div class="col-12 col-md-3 d-flex justify-content-center justify-content-md-end">
          <router-link to="/Registration" class="nav-link" active-class="active">
            Register here
          </router-link>
        </div>
      </div>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import user from '@/assets/json/user.json'

const router = useRouter()
const email = ref('')
const password = ref('')
const errorMessage = ref('')

const handleLogin = () => {
  const loginUser = computed(() => {
    return user.find((user) => user.email === email.value)
  })

  if (email.value === loginUser.value.email && password.value === loginUser.value.password) {
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('userType', loginUser.value.type)
    router.push('/Dashboard')
  } else {
    errorMessage.value = 'Invalid email or password'
  }
}
</script>

<style scoped>
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0 auto;
  padding: 20px;
  /* background-color: #e0bfbf; */
  border-radius: 10px;
}

/* Class selectors */
.form {
  text-align: center;
  margin-top: 50px;
}
</style>