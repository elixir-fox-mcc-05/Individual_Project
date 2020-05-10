<template>
  <div>
    <div class="card-body">
      <p class="card-title">{{top.title}}</p>
      <p class="card-text">{{top.episode}}</p>
      <p class="card-text">{{top.start_date}}</p>
      <p class="card-text">{{top.score}}</p>
      <a :href="top.url" style="color:red;"> {{top.url}} </a><br>
      <a class="btn btn-primary" role="button" @click="addWatchList(top)">Add to Watch List</a>
    </div>
  </div>
</template>

<script>
export default {
    name : "card",
    props : ["top"],
    data(){
      return{
      }
    },
    methods : {
      addWatchList(anime) {
        const title = anime.title
        const episode = anime.episode
        const mal_id = anime.mal_id
        const image_url = anime.image_url
        const genre = anime.genre ? anime.genre : ""
        const rating = anime.score
        const url = anime.url
        const payload = {
          title, episode, mal_id, image_url, genre, rating, url
        }
        this.$emit("addWatchList", payload)
      }
    }
}
</script>

<style>

</style>