<template>
  <div id="movieCard" class="col-3" style="background-color:white; margin: 5px; padding: 10px;">
    <div class="column">
        <div style="">
            <img :src="imageUrl" style="width:100%;display:flex; justify-content:center;">
        </div>
        <div>
            <h4 style="width:80%; margin: 5px;">{{movie.original_title}}</h4>
            <p>{{movie.overview}}</p>
            <p><b>Released:</b> {{movie.release_date}}</p>
            <p><b>Audience Score:</b> {{movie.vote_average}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'movieCard',
  data(){
      return{
          imageUrl: 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path
      }
  },
  props: [ 'movie' ]
}
</script>

<style>

</style>