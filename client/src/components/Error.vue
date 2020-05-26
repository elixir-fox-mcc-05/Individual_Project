<template>
  <div class="error">
    <div v-if="Array.isArray(myError)">
      <p v-for="message in myError" :key="message">{{ message.message }}</p>
    </div>
    <div v-else>
      <p>{{ myError.msg }}</p>
    </div>
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
