<template>
  <div class="container">
    <div class="d-flex justify-content-around align-items-stretch flex-wrap">
      <div class="col-4 mb-3" v-for="(anime, index) in animes" :key="anime.mal_id">
        <AnimeCard
          :anime="anime"
          :index="index"
          @addUserFavorite="addUserFavorite"
          :userAnime="userAnime"
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
    userAnime: Array
  },
  methods: {
    addUserFavorite(id) {
      this.$emit("addUserFavorite", id);
    }
  }
};
</script>

<style></style>
