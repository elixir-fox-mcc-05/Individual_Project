<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="anime.image_url" width="100%" height="300" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ anime.title }}</h5>
      <p class="card-text text-justify">{{ anime.synopsis }}</p>
      <p v-if="userMessage">{{ successMessage }}</p>
      <a href @click.prevent="addUserFavorite" v-if="!userFav" class="btn btn-primary">
        <i class="fa fa-heart"></i> Add to Favorite
      </a>
      <a href @click.prevent="removeUserFavorite" v-else-if="userFav" class="btn btn-danger">
        <i class="fa fa-trash"></i> Remove from My Favorite
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimeCard",
  props: {
    anime: Object,
    userAnime: Array,
    userMessage: String
  },
  data() {
    return {
      userFav: this.checkFavorite()
    };
  },
  methods: {
    addUserFavorite() {
      this.$emit("addUserFavorite", this.anime.mal_id);
    },
    removeUserFavorite() {
      this.$emit("removeUserFavorite", this.anime.mal_id);
    },
    checkFavorite() {
      for (let i = 0; i < this.userAnime.length; i++) {
        if (this.userAnime[i].AnimeId == this.anime.mal_id) {
          return true;
        }
      }
      return false;
    }
  },
  computed: {
    userFav() {
      this.checkFavorite();
    }
  }
};
</script>

<style>
.card-img-top {
  object-fit: cover;
}
.card {
  height: 625px;
}
</style>
