<template>
  <div class="login container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="row">
        <div class="col sm-6">
          <label for="email" class="form-label">Email:</label>
          <input type="text" v-model="email" id="email" class="form-control" />
        </div>
      </div>
      <div class="row">
        <div class="col sm-6">
          <label for="password" class="form-label">Password:</label>
          <input type="password" v-model="password" id="password" class="form-control" />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>

        <div class="col">
          <router-link to="/Registration" class="nav-link" active-class="active">
            Register here
          </router-link>
        </div>
      </div>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import user from '@/assets/json/user.json'

export default {
  setup() {
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

    return { email, password, errorMessage, handleLogin }
  }
}
</script>
