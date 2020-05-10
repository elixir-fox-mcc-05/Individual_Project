<template>
  <div class="container">
    <h3 class="alert alert-dark" role="alert">Upcoming Movies</h3>
    <div class="row flex-row flex-nowrap scroll">
      <div class="col-2" v-for="UpcomingMovie in UpcomingMovies" :key="UpcomingMovie.id">
        <div class="card card-block">
          <img
            class="card-img-top"
            :src="posterPath+UpcomingMovie.poster_path"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="text-dark">{{ UpcomingMovie.title }}</p>
            <p class="text-warning">{{ UpcomingMovie.vote_average }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Upcoming",
  props: ["serverUrl", "posterPath"],
  data() {
    return {
      UpcomingMovies: null
    };
  },
  methods: {
    auth() {
      this.$emit("auth");
    },
    fetchUpcoming() {
      axios({
        method: "get",
        url: this.serverUrl + "/movies/upcoming",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(data => {
          this.UpcomingMovies = data.data.UpcomingMovies;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.auth();
    this.fetchUpcoming();
  }
};
</script>

<style>
</style>