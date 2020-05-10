<template>
  <div class="container">
    <h3 class="alert alert-dark" role="alert">Popular Movies this week</h3>
    <div class="row flex-row flex-nowrap scroll">
      <div class="col-2" v-for="PopularMovie in PopularMovies" :key="PopularMovie.id">
        <div class="card card-block">
          <img class="card-img-top" :src="posterPath+PopularMovie.poster_path" alt="Card image cap" />
          <div class="card-body">
            <p class="text-dark">{{ PopularMovie.title }}</p>
            <p class="text-warning">{{ PopularMovie.vote_average }}</p>
            <Detail :serverUrl="serverUrl" :movieId="PopularMovie.id" :posterPathSmall="posterPathSmall"></Detail>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Detail from "./details/Detail.vue";

export default {
  name: "Popular",
  props: ["serverUrl", "posterPath", "posterPathSmall"],
  components: {
    Detail
  },
  data() {
    return {
      PopularMovies: null
    };
  },
  methods: {
    auth() {
      this.$emit("auth");
    },
    fetchPopular() {
      axios({
        method: "get",
        url: this.serverUrl + "/movies/popular",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(data => {
          this.PopularMovies = data.data.PopularMovies;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.auth();
    this.fetchPopular();
  }
};
</script>

<style>
</style>