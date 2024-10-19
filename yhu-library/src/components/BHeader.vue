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
        <li class="nav-item">
          <router-link to="/AddBook" class="nav-link" active-class="active">Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetBookCount" class="nav-link" active-class="active">Get Book Count</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/WeatherCheck" class="nav-link" active-class="active">Weather Check</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/CountBookAPI" class="nav-link" active-class="active">Count Book API</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetAllBookAPI" class="nav-link" active-class="active">Get All Book API</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FireLogin" class="nav-link" active-class="active">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FireSignup" class="nav-link" active-class="active">Registration</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup>

</script>

<style scoped>
</style>
