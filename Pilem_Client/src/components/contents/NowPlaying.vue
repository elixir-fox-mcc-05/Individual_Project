<template>
  <div class="container">
    <h3 class="alert alert-dark" role="alert">Now Playing in Theathers</h3>
    <div class="row flex-row flex-nowrap scroll">
      <div class="col-2" v-for="NowPlayingMovie in NowPlayingMovies" :key="NowPlayingMovie.id">
        <div class="card card-block">
          <img
            class="card-img-top"
            :src="posterPath+NowPlayingMovie.poster_path"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="text-dark">{{ NowPlayingMovie.title }}</p>
            <p class="text-warning">{{ NowPlayingMovie.vote_average }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NowPlaying",
  props: ["serverUrl", "posterPath"],
  data() {
    return {
      NowPlayingMovies: null
    };
  },
  methods: {
    auth() {
      this.$emit("auth");
    },
    fetchNowPlaying() {
      axios({
        method: "get",
        url: this.serverUrl + "/movies/nowplaying",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(data => {
          this.NowPlayingMovies = data.data.NowPlayingMovies
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.auth();
    this.fetchNowPlaying();
  }
};
</script>

<style>
</style>