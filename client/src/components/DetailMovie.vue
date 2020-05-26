<template>
  <div class="detail">
    <div class="poster">
      <img :src="posterUrl(movieOne.poster_path)" alt="poster" />
    </div>
    <div class="data">
      <h1>
        {{ movieOne.title }}
      </h1>
      <p class="tagline">{{ movieOne.tagline }}</p>
      <div class="date">
        <h3>{{ movieOne.release_date }}</h3>
        <h3>|</h3>
        <h3>genre : {{ movieOne.genres[0].name }}</h3>
        <h3>|</h3>
        <div class="star">
          <h3>{{ movieOne.vote_average }}</h3>
          <img src="../assets/Star 1.svg" alt="" />
        </div>
      </div>
      <div class="overview">
        <p class="overTitle">OVERVIEW:</p>
        <p class="overParag">
          {{ movieOne.overview }}
        </p>
      </div>
      <div class="other">
        <div class="imageGroup">
          <img :src="backdropUrl(movieOne.backdrop_path)" alt="backdrop" />
          <div class="otherLink" @click.prevent="toDashboard">
            <p>
              Click to <br />
              See Other Movie
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import server from "../api";
export default {
  name: "DetailMovie",
  data() {
    return {
      movieOne: {},
    };
  },
  methods: {
    toDashboard() {
      this.$router.push("/dashboard");
    },
    fetchDetailMovie() {
      server({
        method: "get",
        url: `/movie/detail/${this.$route.params.id}`
      })
        .then((response) => {
          this.movieOne = response.data;
          console.log(this.movieOne);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    backdropUrl(backdrop_path) {
      return `http://image.tmdb.org/t/p/w500${backdrop_path}`;
    },
    posterUrl(poster_path) {
      return `http://image.tmdb.org/t/p/w500${poster_path}`;
    }
  },
  created() {
    this.fetchDetailMovie();
  }
};
</script>

<style scoped>
.detail {
  display: flex;
  justify-content: flex-start;
  padding: 20px 4vw;
}
.poster img {
  width: 28vw;
}
.data {
  margin-left: 4vw;
}
.data h1 {
  text-align: left;
  font-size: 40px;
  color: var(--white-color);
  font-weight: normal;
  width: 60vw;
}
.tagline {
  text-align: left;
  margin-top: 10px;
  font-size: 20px;
  color: var(--white-color);
}
.data h3 {
  margin-top: 16px;
  text-align: left;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.37);
  font-size: 16px;
}
.date {
  display: flex;
}
h3 {
  margin-right: 20px;
}
.overview {
  text-align: left;
  margin-top: 32px;
}
.overTitle {
  color: var(--white-color);
  font-size: 22px;
}
.overParag {
  margin-top: 16px;
  color: var(--white-color);
  font-weight: normal;
  line-height: 1.6;
  width: 57vw;
}
.star {
  display: flex;
  align-items: center;
  justify-content: center;
}
.star img {
  width: 18px;
  margin-top: 12px;
  margin-left: -12px;
}
.other {
  /* text-align: left; */
  margin-top: 32px;
}
.otherTitle {
  color: var(--white-color);
}
.imageGroup {
  margin-top: 16px;
  display: flex;
}
.imageGroup img {
  width: 30vw;
  margin-right: 10px;
}
.otherLink {
  background: rgb(14, 14, 14);
  width: 25vw;
  height: 33vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.otherLink:hover {
  background: rgb(29, 29, 29);
}
.otherLink p {
  color: var(--white-color);
  line-height: 1.6;
}
</style>
