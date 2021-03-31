<template>
  <div class="loginPage">
    <img src="../assets/bg-home.jpg" alt />
    <div class="overlay"></div>

    <div class="container">
      <h3>
        Welcome to The Greatest Application Ever, NETLFLY
      </h3>
      <p class="label">Please insert your email and password, to login</p>
      <Notif class="notif"></Notif>
      <Error class="error"></Error>
      <input
        v-model="email"
        class="username"
        type="email"
        placeholder="Enter your email"
      />
      <input
        v-model="password"
        class="username"
        :type="passwordFieldType"
        placeholder="Enter your password"
        @keyup.enter.prevent="login"
      />
      <button @click.prevent="login" class="Login">Login</button>
      <GoogleLogin
        :params="params"
        :renderParams="renderParams"
        :onSuccess="onSuccess"
        :onFailure="onFailure"
        class="google"
      ></GoogleLogin>
      <p class="register">
        don't have an account?
        <a @click.prevent="register" href="">register here </a>
      </p>
      <div class="eyeToggle">
        <a
          href=""
          @click.prevent="switchVisibility"
          rel="tooltip"
          data-animate="animated fadeIn"
          data-original-title=""
          data-toggle="tooltip"
          data-placement="bottom"
        >
          <i class="fa fa-eye" v-if="!isShowing"></i>
          <i class="fa fa-eye-slash" v-if="isShowing"></i>
        </a>
      </div>
      <div class="copyright">
        <p>Copyright © Amir Faisal Zamzami, 2020</p>
        <p>KamVan's Team. All rights. reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
import server from "../api";
import Notif from "../components/Notif";
import Error from "../components/Error";
export default {
  name: "Login",
  components: {
    Notif,
    Error,
    GoogleLogin
  },
  data() {
    return {
      email: "",
      password: "",
      passwordFieldType: "password",
      showPassword: "show",
      isShowing: true,
      show: true,
      message: "",
      errMessage: "",
      params: {
        client_id:
          "228781523398-vdju82mh3d70vtuo76o2q73vkff21f60.apps.googleusercontent.com"
      },
      renderParams: {
        width: 250,
        height: 40,
        longtitle: true
      }
    };
  },
  methods: {
    register() {
      this.$router.push("/register");
    },
    login() {
      if (this.email == "") {
        this.$store.commit("CHANGE_MYERROR", "email is required");
      } else if (this.password == "") {
        this.$store.commit("CHANGE_MYERROR", "password is required");
      } else {
        server({
          method: "post",
          url: "/login",
          data: {
            email: this.email,
            password: this.password
          }
        })
          .then((response) => {
            this.$store.commit("CHANGE_MYERROR", "");
            this.$store.commit("CHANGE_MYNOTIF", response.data.msg);
            this.$store.dispatch("fetchPopularMovie");
            localStorage.setItem("token", response.data.token);
            this.$store.commit("SET_LOGIN", true);
            this.$router.push("/dashboard");
            (this.email = ""), (this.password = "");
          })
          .catch((err) => {
            console.log(err, "err bray ==========")
            this.$store.commit("CHANGE_MYNOTIF", "");
            this.$store.commit("CHANGE_MYERROR", err.response.data.err);
          });
      }
    },
    switchVisibility() {
      (this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password"),
        (this.isShowing = !this.isShowing);
    },
    onSuccess(googleUser) {
      const id_token = googleUser.getAuthResponse().id_token;
      server({
        method: "post",
        url: "/google-login",
        headers: {
          google_token: id_token
        }
      }).then((response) => {
        console.log(response, "response============");
        this.$store.commit("CHANGE_MYERROR", "");
        this.$store.commit("CHANGE_MYNOTIF", response.data.msg);
        localStorage.setItem("token", response.data.token);
        this.$store.commit("SET_LOGIN", true);
        this.$router.push("/dashboard");
      });
    },
    onFailure() {
      console.log("failed google login");
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
    background-color: var(--white-color);
  }
  .username:focus {
    outline: none;
  }
  .eyeToggle {
    margin-top: -28.3vh;
    margin-left: 32vw;
    z-index: 999;
    background-color: var(--white-color);
    width: 30px;
    margin-bottom: 14vh;
  }
  .eyeToggle i {
    color: #4d4e52;
  }
  .Login {
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
  .Login:focus {
    outline: none;
  }
  .Login:hover {
    background: #ff7082;
  }
  .google {
    margin-top: 4vh;
    margin-left: 10vw;
    border-radius: 20px;
  }
  .register {
    margin-top: 20px;
    font-size: 14px;
    color: var(--white-color);
  }
  .register a {
    color: red;
  }
  .copyright {
    margin-top: 17vh;
    color: var(--white-color);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    text-align: center;
    margin-bottom: 0;
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
