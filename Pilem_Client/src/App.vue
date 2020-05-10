<template>
  <div>
    <NavigationBar v-if="authenticated" @auth="auth"></NavigationBar>
    <LandingPage v-if="!authenticated" :serverUrl="serverUrl" @auth="auth"></LandingPage>
    <ContentPage
      v-if="authenticated"
      :serverUrl="serverUrl"
      :posterPath="posterPath"
      :posterPathSmall="posterPathSmall"
      @auth="auth"
    ></ContentPage>
    <Footer></Footer>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import LandingPage from "./components/LandingPage.vue";
import ContentPage from "./components/ContentPage.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    LandingPage,
    ContentPage,
    Footer
  },
  data() {
    return {
      AppName: "Pilem",
      serverUrl: "https://server-pilem-yudhaaw96.herokuapp.com",
      posterPath: "https://image.tmdb.org/t/p/w500",
      posterPathSmall: "https://image.tmdb.org/t/p/w200",
      authenticated: false
    };
  },
  methods: {
    auth() {
      localStorage.access_token
        ? (this.authenticated = true)
        : (this.authenticated = false);
    }
  },
  created() {
    this.auth();
  }
};
</script>

<style>
</style>