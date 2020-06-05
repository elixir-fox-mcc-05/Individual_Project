<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <div class="Logo">
          <img src="./assets/NETFLY.svg" alt="netfly-logo" />
        </div>
      </router-link>
      <div class="nav-group">
        <router-link 
        v-if="!isLogin"
        class="nav-name logout"
        to="/login">Login</router-link>
        <a
          v-if="isLogin"
          @click.prevent="logout"
          :logoutButton="true"
          :params="params"
          class="nav-name logout"
          href=""
        >
          Logout
        </a>
      </div>
    </div>

    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
export default {
  name: "App",
  components: {
    GoogleLogin
  },
  data() {
    return {
      params: {
        client_id:
          "228781523398-vdju82mh3d70vtuo76o2q73vkff21f60.apps.googleusercontent.com"
      }
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>

<style>
:root {
  --white-color: rgb(219, 219, 219);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.Logo img {
  width: 8vw;
  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.637);
}

.nav-name {
  margin: 0 20px 0;
  text-decoration: none;
}
.logout {
  background: red;
  padding: 8px 16px;
  font-size: 16px;
}
#nav {
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  z-index: 99999;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.5s;
}

.fade-enter-active {
  transition-delay: 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
