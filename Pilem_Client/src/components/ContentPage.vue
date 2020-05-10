<template>
  <div class="container content-page bgdark">
    <div class="jumbotron">
      <h5 class="display-4 text-danger">Pilem,</h5>
      <p class="lead text-dark">
        Now playing, popular, upcoming movies and more to discover. Explore now.
      </p>
      <hr class="my-2" />
      <p class="text-dark">
        API Provided by TheMovieDatabase.
      </p>
    </div>
    <NowPlaying
      :serverUrl="serverUrl"
      :posterPath="posterPath"
      :posterPathSmall="posterPathSmall"
      @auth="auth"
    ></NowPlaying>
    <br />
    <Popular
      :serverUrl="serverUrl"
      :posterPath="posterPath"
      :posterPathSmall="posterPathSmall"
      @auth="auth"
    ></Popular>
    <br />
    <Upcoming
      :serverUrl="serverUrl"
      :posterPath="posterPath"
      :posterPathSmall="posterPathSmall"
      @auth="auth"
    ></Upcoming>
  </div>
</template>

<script>
import NowPlaying from "./contents/NowPlaying.vue";
import Popular from "./contents/Popular.vue";
import Upcoming from "./contents/Upcoming.vue";

export default {
  name: "ContentPage",
  props: ["serverUrl", "posterPath", "posterPathSmall"],
  components: {
    NowPlaying,
    Popular,
    Upcoming
  },
  methods: {
    auth() {
      this.$emit("auth");
    }
  }
};
</script>

<style>
</style>