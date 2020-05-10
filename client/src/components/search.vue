<template>
  <div>
    <nav>
      <button @click="change_page" class="btn-sm btn btn-secondary">Sign Out</button><br><br><br>
    </nav>
    <div>
      <form @submit.prevent="search_song">
        <input type="text" class="form-control col-2" v-model="artist" placeholder="artist" required>
        <input id="input-song" type="text" class="form-control col-3" v-model="song_name" placeholder="song" required>
        <input id="btn" type="submit" class="btn-sm btn btn-primary" value="Search">
      </form>
    </div>
  </div>
</template>

<script>
import lyric from './lyric'
export default {
  name: 'search',
  components: {
    lyric
  },
  data() {
    return {
      artist: '',
      song_name: '',
    }
  },
  methods: {
    search_song() {
        axios({
          method: 'POST',
          url: `http://localhost:3000/search_song`,
          headers: { access_token: localStorage.access_token },
          data: { artist: this.artist, song: this.song_name }
        })
        .then(({data}) => {
          this.$emit('set_artist', this.artist)
          this.$emit('set_song', this.song_name)
          this.$emit('set_lyrics', data.lyrics)
          this.$emit('change_page', 'result')

          console.log('set lyrics success')
        })
        .catch(err => {
          console.log(err)
        })
    },
    change_page() {
      localStorage.removeItem('access_token')
      console.log('sign out success')
      this.$emit('change_page', 'home')
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
}
nav {
  margin-top: 2vw;
}

#btn {
  margin-left: 1vw;
}
#input-song {
  margin-left: 1vw;
}
</style>