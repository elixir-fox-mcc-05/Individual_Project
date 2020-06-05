<template>
  <div class="missingPage">
    <div class="left">
      <h1>404</h1>
      <h3>Lost in Space</h3>
      <hr />
      <p>
        You have reached the edge of the universe. <br />
        The page you requested could not be found. <br />
        Don't worry we will guide you to return to Home.
      </p>
      <button @click.prevent="toLogin" class="">GO HOME</button>
    </div>
    <div class="right">
      <img src="../assets/404.png" alt="404 image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Missing404Page",
  methods: {
    toLogin() {
      this.$router.push({ name: "Login" });
    }
  },
  created() {
    this.$store.commit("SET_LOGIN", true);
  }
};
</script>

<style scoped>
.missingPage {
  display: flex;
  position: fixed;
}
.left {
  padding-top: 20vh;
  padding-left: 12vw;
  width: 50vw;
  text-align: left;
}
h1 {
  font-size: 60px;
  font-weight: normal;
  color: #6e6e6e;
}
h3 {
  font-size: 70px;
  margin-top: -15px;
}
hr {
  border: 2px solid #ff6161;
  width: 11vw;
}
p {
  margin-top: 40px;
  width: 30vw;
  color: #6e6e6e;
}
button {
  margin-top: 40px;
  background: #ff6161;
  border: none;
  width: 10vw;
  height: 5vh;
  border-radius: 20px;
  color: white;
  cursor: pointer;
}
img {
  margin-top: 15vh;
  width: 45vw;
  margin-left: -100px;
}
</style>
