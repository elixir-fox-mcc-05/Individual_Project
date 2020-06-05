<template>
  <div>
    <h1 class="labelCard">Show Toprate Movie</h1>
    <h2 class="seeDetail">click image to see detail</h2>
    <div class="container">
      <div class="allCard">
        <div
          class="contentCardGroup"
          v-for="(movie, i) in toprateMovie"
          :key="i"
        >
          <div class="card" @click.prevent="showDetail(movie.id)">
            <img :src="backdropUrl(movie.backdrop_path)" alt="backdrop" />
            <p>{{ movie.original_title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toprate",
  methods: {
    backdropUrl(backdrop_path) {
      return `http://image.tmdb.org/t/p/w500${backdrop_path}`;
    },
    showDetail(id) {
      this.$router.push(`/detail/${id}`);
    }
  },
  created() {
    this.$store.dispatch("fetchToprateMovie");
  },
  computed: {
    toprateMovie() {
      return this.$store.state.toprateMovie;
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 5vh;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
}
.labelCard {
  text-align: left;
  font-weight: normal;
  font-size: 24px;
  color: var(--white-color);
  margin-top: -9vh;
  margin-left: 3.7vw;
}
.seeDetail {
  text-align: right;
  font-weight: normal;
  font-size: 16px;
  color: var(--white-color);
  margin-top: -3vh;
  margin-right: 3.7vw;
}
.allCard {
  padding: 20px 10px;
  display: grid;
  grid-template-columns: repeat(4, 20vw [col-start]);
  grid-column-gap: 4vw;
}
.contentCardGroup img {
  width: 22vw;
  margin-top: 10px;
  border-radius: 20px;
}
.contentCardGroup p {
  color: var(--white-color);
  text-align: left;
  margin-top: 2vh;
  margin-bottom: 2vh;
}
.card {
  cursor: pointer;
}
.card:hover {
  margin-top: -5px;
}
</style>
