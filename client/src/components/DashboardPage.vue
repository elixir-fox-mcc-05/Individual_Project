<template>
  <div>
    <Navbar
      @logout="logout"
      @searchAnime="searchAnime"
      @showDashboard="showDashboard"
      @showMyList="showMyList"
    ></Navbar>
    <h2 class="text-center mt-3">Ghibli's Anime Movie List</h2>
    <h3 v-if="search" class="text-center">Search Result for: {{ search }}</h3>
    <span v-if="successMessage"></span>
    <AnimeList :animes="animes" @addUserFavorite="addUserFavorite" :userAnime="userAnime"></AnimeList>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import AnimeList from "./AnimeList.vue";

export default {
  name: "DashboardPage",
  components: {
    Navbar,
    AnimeList
  },
  props: {
    animes: Array,
    search: String,
    successMessage: String,
    userAnime: Array
  },
  methods: {
    logout() {
      this.$emit("logout");
    },
    searchAnime(query) {
      this.$emit("searchAnime", query);
    },
    showDashboard() {
      this.$emit("showDashboard");
    },
    showMyList() {
      this.$emit("showMyList");
    },
    addUserFavorite(id) {
      this.$emit("addUserFavorite", id);
    }
  }
};
</script>

<style></style>
