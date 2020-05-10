<template>
  <div class="container-fluid p-0 m-0">
    <LoginPage
      v-if="page == 'login' && logged_in == false"
      :successMessage="successMessage"
      :errorMessage="errorMessage"
      @showRegister="showRegister"
      @login="login"
      @onSignIn="onSignIn"
    ></LoginPage>
    <RegisterPage
      v-else-if="page == 'register' && logged_in == false"
      :errorMessage="errorMessage"
      @showLogin="showLogin"
      @register="register"
    ></RegisterPage>
    <DashboardPage
      v-else-if="page == 'dashboard' && logged_in == true"
      :animes="animes"
      :search="search"
      :successMessage="successMessage"
      :userAnime="userAnime"
      @fetchAnime="fetchAnime"
      @searchAnime="searchAnime"
      @showDashboard="showDashboard"
      @logout="logout"
      @addUserFavorite="addUserFavorite"
      @removeUserFavorite="removeUserFavorite"
    ></DashboardPage>
  </div>
</template>

<script>
import Vue from "vue";
import { LoaderPlugin } from "vue-google-login";
import axios from "axios";
import LoginPage from "./components/LoginPage.vue";
import RegisterPage from "./components/RegisterPage.vue";
import DashboardPage from "./components/DashboardPage.vue";

Vue.use(LoaderPlugin, {
  client_id:
    "933063756617-e8kgkdk30jqda15abpsqaj1od0d5cbbh.apps.googleusercontent.com"
});

export default {
  name: "App",
  components: {
    LoginPage,
    RegisterPage,
    DashboardPage
  },
  data() {
    return {
      page: "login",
      errorMessage: "",
      successMessage: "",
      baseUrl: "https://arcane-atoll-26284.herokuapp.com",
      animes: [],
      userAnime: [],
      logged_in: false,
      token: localStorage.getItem("token"),
      search: ""
    };
  },
  methods: {
    showRegister() {
      this.page = "register";
    },
    showLogin() {
      this.page = "login";
    },
    showDashboard() {
      this.page = "dashboard";
      this.fetchAnime();
      this.search = "";
    },
    searchAnime(query) {
      this.search = query;
      if (!query) {
        this.fetchAnime();
        this.search = "";
      }
      this.animes = this.animes.filter(anime => {
        return anime.title.toLowerCase().includes(query);
      });
    },
    fetchUserFavorite() {
      axios
        .get(`${this.baseUrl}/user`, {
          headers: {
            token: this.token
          }
        })
        .then(result => {
          this.userAnime = result.data.User.UserAnimes;
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    addUserFavorite(id) {
      axios
        .post(
          `${this.baseUrl}/anime/favorite/${id}`,
          {},
          {
            headers: {
              token: this.token
            }
          }
        )
        .then(response => {
          console.log(response.data);
          this.successMessage = `Added to your favorite!`;
          setTimeout(() => {
            this.successMessage = "";
          }, 5000);
          this.fetchUserFavorite();
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    removeUserFavorite(id) {
      axios
        .delete(
          `${this.baseUrl}/anime/favorite/${id}`,
          {},
          {
            headers: {
              token: this.token
            }
          }
        )
        .then(response => {
          this.successMessage = `Removed from your favorite!`;
          setTimeout(() => {
            this.successMessage = "";
          }, 5000);
          this.fetchUserFavorite();
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    register(userData) {
      axios
        .post(`${this.baseUrl}/register`, userData)
        .then(response => {
          this.showLogin();
          this.successMessage = `Register Success, Please Login!`;
          setTimeout(() => {
            this.successMessage = "";
          }, 5000);
          this.errorMessage = "";
        })
        .catch(err => {
          let errors = err.response.data.errors || err.response.data.error;
          if (Array.isArray(errors)) {
            for (let i = 0; i < errors.length; i++) {
              this.errorMessage += `${errors[i].msg},`;
            }
          } else {
            this.errorMessage = errors;
          }
          setTimeout(() => {
            this.errorMessage = "";
          }, 5000);
        });
    },
    login(userData) {
      axios
        .post(`${this.baseUrl}/login`, userData)
        .then(response => {
          this.logged_in = true;
          this.showDashboard();
          localStorage.setItem("token", response.data.token);
          this.errorMessage = "";
        })
        .catch(err => {
          this.errorMessage = err.response.data.error.message;
        });
    },
    logout() {
      // let auth2 = gapi.auth2.getAuthInstance();
      // auth2.signOut().then(() => {

      // });
      Vue.GoogleAuth.then(auth2 => {
        auth2.signOut().then(() => {
          this.logged_in = false;
          localStorage.clear();
          this.showLogin();
          this.errorMessage = "";
        });
      });
    },
    onSignIn(googleUser) {
      const id_token = googleUser.getAuthResponse().id_token;
      const profile = googleUser.getBasicProfile();
      axios
        .post(
          `${this.baseUrl}/google-login`,
          {},
          {
            headers: {
              google_token: id_token,
              first_name: profile.pW,
              last_name: profile.qU
            }
          }
        )
        .then(response => {
          this.logged_in = true;
          this.page = "dashboard";
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("UserId", response.data.UserId);
          this.errorMessage = "";
        })
        .catch(err => {
          console.log(err.response);
          let errors = err.response.data.errors || err.response.data.error;
          if (Array.isArray(errors)) {
            for (let i = 0; i < errors.length; i++) {
              this.errorMessage += `${errors[i].msg},`;
            }
          } else {
            this.errorMessage = errors;
          }
          setTimeout(() => {
            this.errorMessage = "";
          }, 5000);
        });
    },
    fetchAnime() {
      axios
        .get(`${this.baseUrl}/anime`)
        .then(response => {
          this.animes = response.data.anime;
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  },
  created() {
    if (localStorage.token) {
      this.logged_in = true;
      this.page = "dashboard";
      this.fetchAnime();
      this.fetchUserFavorite();
    }
  }
};
</script>

<style>
.container-fluid {
  background-color: lightcyan;
  height: 100%;
}
</style>
