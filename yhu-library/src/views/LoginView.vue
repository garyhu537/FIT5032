<template>
    <div class="login container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="row">
            <div class="col sm-6">
                <label for="username" class="form-label">Username:</label>
                <input type="text" v-model="username" id="username" class="form-control" />
            </div>
        </div>
        <div class="row">
            <div class="col sm-6">
                <label for="password" class="form-label">Password:</label>
                <input type="password" v-model="password" id="password" class="form-control"/>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const username = ref("");
      const password = ref("");
      const errorMessage = ref("");
  
      const handleLogin = () => {
        const hardcodedUsername = "user";
        const hardcodedPassword = "password";
        if (username.value === hardcodedUsername && password.value === hardcodedPassword) {
          localStorage.setItem("isAuthenticated", "true");
          this.$router.push("/about");
        } else {
          errorMessage.value = "Invalid username or password";
        }
      };
  
      return { username, password, errorMessage, handleLogin };
    },
  };
  </script>