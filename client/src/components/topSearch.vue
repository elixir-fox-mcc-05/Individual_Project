<template>
  <div id="tab">
    <h3>Popular Search</h3>
    <table class="table table-hover">
      <thead class="ml-3">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Artist</th>
          <th scope="col">Song</th>
          <th scope="col">YouTube</th>
        </tr>
      </thead>
      <tbody v-for="(recent, i) in  recents" :key="i">
        <tr>
          <th scope="row">1</th>
          <td>{{ (recent.URL.artist).toUpperCase() }}</td>
          <td>{{ (recent.URL.song).toUpperCase() }}</td>
          <td><a :href="recent.URL.link">Find on YouTube</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'topSearch',
  data() {
    return {
      recents: []
    }
  },
  created() {
    axios({
      method: 'POST',
      url: 'http://localhost:3000/recent',
      headers: {
        access_token: localStorage.access_token
      }
    })
    .then(({data}) => { this.recents = data.recent })
  }
}
</script>

<style scoped>
#tab {
  margin-left: auto;
  margin-right: auto;
}
</style>