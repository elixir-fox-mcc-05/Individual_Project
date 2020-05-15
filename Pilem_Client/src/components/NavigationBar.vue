<template>
  <nav class="navbar fixed-top navbar-dark bg-secondary">
    <a class="navbar-brand">Pilem</a>
    <div>
    <button
      type="button"
      class="btn btn-danger"
      @click="signout"
    >Sign Out</button>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  methods: {
    auth() {
      this.$emit("auth");
    },
    signout() {
      localStorage.clear();
      this.auth();
    }
  }
};
</script>

<style>
</style>