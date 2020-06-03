<template>
  <div class="registerPage">
    <img src="../assets/bg-home.jpg" alt />
    <div class="overlay"></div>

    <div class="container">
      <h3>Create NETFLY account</h3>
      <p class="label">it's free and always will be</p>
      <Notif class="notif"></Notif>
      <Error class="error"></Error>
      <input
        v-model="name"
        class="username"
        type="text"
        placeholder="Enter your name"
      />
      <input
        v-model="email"
        class="username"
        type="text"
        placeholder="Enter your email"
      />
      <input
        v-model="password"
        class="username"
        type="password"
        placeholder="Enter your password"
        @keyup.enter.prevent="register"
      />
      <button @click.prevent="register">Register</button>
      <p class="toLogin">
        already have an account?
        <a @click.prevent="login" href>login here</a>
      </p>
      <div class="copyright">
        <p>Copyright © Amir Faisal Zamzami, 2020</p>
        <p>NETFLY Team. All rights. reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
import server from "../api";
import Notif from "../components/Notif";
import Error from "../components/Error";
export default {
  name: "Register",
  components: {
    Notif,
    Error
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      image_url: ""
    };
  },
  methods: {
    register() {
      server({
        method: "post",
        url: "/register",
        data: {
          name: this.name,
          email: this.email,
          password: this.password
        }
      })
        .then((response) => {
          this.$store.commit("CHANGE_MYERROR", "");
          this.$store.commit("CHANGE_MYNOTIF", response.data.msg);
          (this.name = ""), (this.email = ""), (this.password = "");
        })
        .catch((err) => {
          this.$store.commit("CHANGE_MYNOTIF", "");
          this.$store.commit("CHANGE_MYERROR", err.response.data.err);
        });
    },
    login() {
      this.$router.push("/login");
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
/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  .container {
    margin-top: -90vh;
    display: flex;
    margin-left: 27%;
    flex-direction: column;
    z-index: 9999;
    position: fixed;
    background: rgba(0, 0, 0, 0.664);
    padding: 30px;
    border-radius: 10px;
  }
  h3 {
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    color: var(--white-color);
    width: 40vw;
  }
  .label {
    text-align: center;
    font-size: 23px;
    margin-top: 20px;
    color: var(--white-color);
  }
  .username {
    margin-top: 30px;
    margin-left: 5vw;
    width: 30vw;
    height: 5vh;
    border: none;
    box-shadow: 0 20px 70px rgba(66, 154, 236, 0.185);
    border-radius: 10px;
    padding-left: 20px;
    color: #414141;
  }
  .username:focus {
    outline: none;
  }
  button {
    margin-top: 30px;
    margin-left: 5vw;
    width: 30vw;
    height: 5vh;
    box-shadow: 0 20px 70px rgba(66, 154, 236, 0.185);
    border-radius: 10px;
    padding-left: 20px;
    background: red;
    border: none;
    color: var(--white-color);
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  button:hover {
    background: #ff7082;
  }
  .toLogin {
    margin-top: 20px;
    font-size: 14px;
    color: var(--white-color);
  }
  .toLogin a {
    color: red;
  }
  .copyright {
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    color: var(--white-color);
  }
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
  .notif,
  .error {
    padding: 5px;
    margin-bottom: -25px;
    margin-top: 15px;
  }
}
</style>
