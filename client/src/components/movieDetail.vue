<template>
    <div class="" id="movieDetail" :style="backgroundImage">
        <div class="row">
            <div class="col s12 m4" id="detailPoster">
                <img :src="imgUrl">
            </div>
            <div class="col s12 m8" id="detailInfo">
                <h4>{{detail.title}}</h4>
                <p>Overview</p>
                <p class="light">{{detail.overview}}</p>
                <p>Homepage</p>
                <a class="light" :href="detail.homepage">Link</a>
                <p>IMDb</p>
                <a class="light" :href="imdbUrl">IMDb</a>
                <p>Release Date</p>
                <p class="light">{{detail.release_date}}</p>
                <p>Duration</p>
                <p class="light">{{detail.runtime}} Minutes</p>
                <p>Original Language</p>
                <p class="light">{{detail.original_language}}</p>
                <p>Tagline</p>
                <p class="light">{{detail.tagline}}</p>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'movieDetail',
    props: ['detail'],
    data() {
        return {
            imdbUrl: `https://www.imdb.com/title/${this.detail.imdb_id}`,
            imgUrl: `https://image.tmdb.org/t/p/w500${this.detail.poster_path}`,
            backdropPath: `https://image.tmdb.org/t/p/w500${this.detail.backdrop_path}`
        }
    },
    computed: {
        backgroundImage(){
            return {
                "background-image": this.backdropPath
            }
        }
    }
}
</script>

<style scoped>
img {
    height: 550px;
}
</style>