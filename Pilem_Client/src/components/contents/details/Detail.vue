<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-info"
      data-toggle="modal"
      :data-target="'#detail'+movieId"
    >details</button>

    <!-- Modal -->
    <div
      class="modal"
      :id="'detail'+movieId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header bg-secondary">
            <h5 class="modal-title" id="exampleModalLabel">{{ DetailMovie.original_title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img v-if="DetailMovie.poster_path" :src="posterPathSmall+DetailMovie.poster_path" />
            <p class="text-dark">
              <strong>Genres :</strong>
              {{ DetailGenre }}
            </p>
            <p class="text-dark">
              <strong>Release Date :</strong>
              {{ DetailMovie.release_date }}
            </p>
            <p class="text-dark">
              <strong>Runtime :</strong>
              {{ DetailMovie.runtime }} minutes
            </p>
            <p class="text-dark">
              <strong>Overviews :</strong>
              {{ DetailMovie.overview }}
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Detail",
  props: ["serverUrl", "movieId", "posterPathSmall"],
  data() {
    return {
      DetailMovie: ""
    };
  },
  methods: {
    detail(movieId) {
      axios({
        method: "get",
        url: this.serverUrl + "/movies/" + this.movieId,
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(data => {
          this.DetailMovie = data.data.DetailMovie;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    DetailGenre: function() {
      if (this.DetailMovie.genres) {
        let arr = [];
        this.DetailMovie.genres.forEach(element => {
          arr.push(element.name);
        });
        return arr.join(", ");
      } else {
          return
      }
    }
  },
  created() {
    this.detail();
  }
};
</script>

<style>
</style>