<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/Dashboard" class="nav-link" active-class="active"
            >Dashboard</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/Program" class="nav-link" active-class="active">Program</router-link>
        </li>
        <li class="nav-item" v-if="checkAuthentication == false">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li>
        <li class="nav-item" v-else>
          <router-link to="/login" class="nav-link" active-class="active" @click="logout"
            >Logout</router-link
          >
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const isAuthenticated = ref(localStorage.getItem('isAuthenticated'))

const checkAuthentication = computed(() => {
  const authenticated = ref(localStorage.getItem('isAuthenticated'))
  return authenticated.value == 'true'
})

const router = useRouter()

const logout = () => {
  localStorage.removeItem('isAuthenticated')
  isAuthenticated.value = false
  router.push('/login')
}
</script>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
