<template>
  <div class="container">
    <div class="d-flex justify-content-around align-items-stretch flex-wrap">
      <div class="col-4 mb-3" v-for="(anime, index) in animes" :key="anime.mal_id">
        <AnimeCard
          :anime="anime"
          :index="index"
          @addUserFavorite="addUserFavorite"
          @removeUserFavorite="removeUserFavorite"
          :userAnime="userAnime"
          :successMessage="successMessage"
        ></AnimeCard>
      </div>
    </div>
  </div>
</template>

<script>
import AnimeCard from "./AnimeCard.vue";

export default {
  name: "AnimeList",
  components: {
    AnimeCard
  },
  props: {
    animes: Array,
    userAnime: Array,
    successMessage: String
  },
  methods: {
    addUserFavorite(id) {
      this.$emit("addUserFavorite", id);
    },
    removeUserFavorite(id) {
      this.$emit("removeUserFavorite", id);
    }
  }
};
</script>

<style></style>
