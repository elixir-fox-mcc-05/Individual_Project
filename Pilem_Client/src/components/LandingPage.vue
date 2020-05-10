<template>
  <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
    <header class="masthead mb-auto">
      <div class="inner">
        <h3 class="masthead-brand">Pilem</h3>
        <nav class="nav nav-masthead justify-content-center">
          <button class="btn btn-secondary" data-toggle="modal" data-target="#signup">Sign Up</button>
          <SignUp id="signup" :serverUrl="serverUrl"></SignUp>
        </nav>
      </div>
    </header>

    <main role="main" class="inner cover">
      <h1 class="cover-heading bg-dark">Welcome</h1>
      <p class="lead bg-dark">
        Pilem is a Single Page WebApp,
        <br />and is an online database of information related to films.
        <br />Please enjoy..!
      </p>
      <p class="lead">
        <button class="btn btn-lg btn-secondary" data-toggle="modal" data-target="#signin">Sign In</button>
        <SignIn id="signin" :serverUrl="serverUrl" @auth="auth"></SignIn>
      </p>
    </main>

    <footer class="mastfoot mt-auto"></footer>
  </div>
</template>

<script>
import SignUp from "./forms/SignUp.vue";
import SignIn from "./forms/SignIn.vue";

export default {
  name: "LandingPage",
  props: ["serverUrl"],
  components: {
    SignUp,
    SignIn
  },
  methods: {
    auth() {
      this.$emit("auth")
    }
  }
};
</script>

<style>
</style>