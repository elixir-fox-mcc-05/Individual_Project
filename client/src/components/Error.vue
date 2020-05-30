<template>
  <div class="error">
    <p>{{ myError }}</p>
  </div>
</template>

<script>
export default {
  name: "ErrorSection",
  computed: {
    myError() {
      return this.$store.state.myError;
    }
  },
  created() {
    setTimeout(() => {
      this.$store.commit("CHANGE_MYERROR", "");
    }, 5000);
  },
  updated() {
    setTimeout(() => {
      this.$store.commit("CHANGE_MYERROR", "");
    }, 5000);
  }
};
</script>

<style>
.error {
  color: #ff6161;
}
</style>
