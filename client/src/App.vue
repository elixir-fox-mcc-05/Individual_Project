<template>
  <div v-if="page == 'home'">
    <h1>{{ welcome }}</h1>
    <login
      @change_page="change_page"
    ></login> 
  </div>
  <div v-else-if="page == 'dashboard'">
    <search
      @change_page="change_page"
      @set_artist="set_artist"
      @set_song="set_song"
      @set_lyrics="set_lyrics"
    ></search>
    <topSearch></topSearch>
  </div>
  <div v-else-if="page == 'result'" id="lycs">
    <lyric
      @change_page="change_page"
      :song="song_name"
      :lyrics="lyrics"
    ></lyric>
  </div>
</template>

<script>
import topSearch from './components/topSearch'
import search from './components/search'
import lyric from './components/lyric'
import login from './components/login'
import accessVue from './components/access.vue'

export default {
  name: 'App',
  components: {
      lyric,
      search,
      login,
      topSearch
  },
  data() {
    return {
      page: 'home',
      welcome: 'Get Started',
      artist: '',
      song_name: '',
      lyrics: '',
    };
  },
  methods: {
      set_artist(artist) { this.artist = artist },
      set_song(song) { this.song_name = song },
      set_lyrics(lyrics) { this.lyrics = lyrics },
      change_page(page) {
        console.log(page)
        this.page = page
      }
  },
  created() {
    if (localStorage.access_token) { this.page = 'dashboard' }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 15vw;
}
</style>