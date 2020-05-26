<template>
  <div class="dashboard">
    <div class="dashboardPage">
      <hr />
      <div v-if="isLogin" class="navbarDash">
        <router-link class="navName" to="/dashboard/toprate">
          <p>Toprate</p>
        </router-link>
        <router-link class="navName" to="/dashboard/popular">
          <p>Popular</p>
        </router-link>
        <router-link class="navName" to="/dashboard/upcoming">
          <p>Upcoming</p>
        </router-link>
      </div>
      <hr />
    </div>
    <router-view />
  </div>
</template>

<script>
import Popular from "../components/Popular";
import Toprate from "../components/Toprate";
import Upcoming from "../components/Upcoming";
export default {
  name: "Dashboard",
  data() {
    return {
      detailPage: false
    };
  },
  components: {
    Popular,
    Upcoming,
    Toprate
  },
  computed: {
    currentPage() {
      return this.$store.state.currentPage;
    },
    isLogin() {
      return this.$store.state.isLogin;
    }
  },
  created() {
    if (localStorage.token) {
      this.$store.commit("SET_LOGIN", true);
      this.$router.push("/dashboard/popular");
    } else {
      this.$store.commit("SET_LOGIN", false);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.dashboardPage {
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
}
hr {
  border: 0.5px solid rgba(255, 255, 255, 0.11);
}
h3 {
  text-align: center;
  font-size: 16px;
  margin: 0 20px 20px;
}
.navbarDash {
  display: flex;
  justify-content: center;
  color: var(--white-color);
  margin: 40px 0;
}
.navbarDash a.router-link-exact-active {
  color: red;
}
.navbarDash p {
  margin: 0 20px;
}
.navName {
  text-decoration: none;
  color: var(--white-color);
}
</style>
