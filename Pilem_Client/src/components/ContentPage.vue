<template>
  <div class="container content-page bgdark">
    <NowPlaying :serverUrl="serverUrl" :posterPath="posterPath" @auth="auth"></NowPlaying><br />
    <Popular :serverUrl="serverUrl" :posterPath="posterPath" @auth="auth"></Popular><br />
    <Upcoming :serverUrl="serverUrl" :posterPath="posterPath" @auth="auth"></Upcoming>
  </div>
</template>

<script>
import NowPlaying from "./contents/NowPlaying.vue";
import Popular from "./contents/Popular.vue";
import Upcoming from "./contents/Upcoming.vue";

export default {
  name: "ContentPage",
  props: ["serverUrl", "posterPath"],
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