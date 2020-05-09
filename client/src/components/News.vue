<template>
 <div class="News">
   <div class="newsheader">
  <h3>News Page</h3>
   </div>
   <div class="row d-flex justify-content-center">
   <div class="cards" v-for="data in news.slice(0,9)" :key="data.title">
    <div class="card" style="width: 400px; height: 550px;">
      <img class="card-img-top" :src="data.urlToImage" alt="Card image cap" style="height: 200px;">
      <div class="card-body">
        <div class="card-content">
        <h5 class="card-title">{{data.title}}</h5>
        <p class="card-text">{{data.description}}</p>
        </div>
        <div class="more">
        <a :href="data.url" class="btn btn-primary">More</a>
        </div>
      </div>
    </div>
   </div>
   </div>
   
 </div>
</template>

<script>
 import axios from 'axios'
 export default {
  name: 'News',
  data () {
   return {
    news:[]
   }
  },
  methods: {
   getNews () {
    axios({
     method: 'GET',
     url: 'https://elixir-fox-api.herokuapp.com/api/news',
     headers: {
      access_token: localStorage.access_token
     }
    })
    .then(data=>{
      this.news= data.data
    })
    .catch(err=>{
     console.log(err);
    })
   }
  },
  created () {
   this.getNews()
  }
 }
</script>

<style scoped>
.newsheader{
  height: 100px;
}

.card-content{
  height: 250px;
}
</style>