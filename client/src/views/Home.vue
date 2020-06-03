<template>
  <div class="home">
    <img src="../assets/bg-home.jpg" alt="bg-home" />
    <div class="overlay"></div>
    <div class="hero">
      <h1>Unlimited movies, TV shows, and more.</h1>
      <p>Watch anywhere. Cancel anytime.</p>
      <button @click.prevent="toRegister">TRY IT NOW</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    toRegister() {
      this.$router.push("/register")
    }
  },
  created() {
    if (localStorage.token) {
      this.$router.push("/dashboard");
      this.$store.commit("SET_LOGIN", true);
    } else {
      this.$store.commit("SET_LOGIN", false);
    }
  }
};
</script>

<style scoped>
img {
  margin-top: -19vh;
  width: 100%;
  height: 50%;
}
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.685);
}
.hero {
  color: white;
  margin-top: -75vh;
  display: flex;
  margin-left: 27%;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
  position: fixed;
  text-shadow: 5px 5px 20px #ffffff44;
}
h1 {
  font-size: 4em;
  font-weight: bold;
  width: 45vw;
}
p {
  font-size: 2em;
  margin-top: 16px;
}
button {
  background: red;
  border: none;
  width: 15vw;
  height: 5vw;
  font-size: 24px;
  margin-top: 26px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
</style>
