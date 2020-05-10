<template>
  <footer class="fixed-bottom bg-dark d-flex justify-content-center">
    <p
      class="text-white font-weight-normal"
    >Copyright &copy; {{ year }} {{ author }} | Made with &#10084;.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      author: "Yudha Arief Wijaya",
      year: new Date().getFullYear()
    };
  }
};
</script>

<style>
</style>