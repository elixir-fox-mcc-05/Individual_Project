<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="anime.image_url" width="100%" height="300" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ anime.title }}</h5>
      <p class="card-text text-justify">{{ anime.synopsis }}</p>
      <a href @click.prevent="addUserFavorite" v-if="!userFav" class="btn btn-primary">
        <i class="fa fa-heart"></i> Add to Favorite
      </a>
      <h4 v-else-if="userFav">My favorite</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimeCard",
  props: {
    anime: Object,
    userAnime: Array
  },
  data() {
    return {
      userFav: false
    };
  },
  methods: {
    addUserFavorite() {
      this.$emit("addUserFavorite", this.anime.mal_id);
    }
  },
  computed: {
    checkFavorite() {
      for (let i = 0; i < this.userAnime.length; i++) {
        if (this.userAnime.AnimeId == this.anime.mal_id) {
          this.userFav = true;
        }
      }
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
