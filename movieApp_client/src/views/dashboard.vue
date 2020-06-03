<template>
  <div id="dashboard">
      <div id="nav-bar" class="row" style="display:flex; justify-content: space-between;padding:25px;background-color:blue;">
          <h2>Top Movie</h2>
          <button class="btn btn-danger" @click="logout">Log out</button>
      </div>
      <div class="container-fluid justify-content-center" id="dashboard-box" style="display:flex; justify-content:center;">
            <div class="row" style="display:flex; justify-content:center;">
                <div class="w-100 border-primary rounded m-3 p-3" style="background-color:wheat;border-radius:15px;">
                    <h1 style="display:flex; justify-content:center;">In theaters</h1>
                    <div class="row" style="width:100%;display:flex;justify-content:space-around;">
                      <movieCard v-for="movie in allMovies" 
                      :key="movie.id" 
                      :movie="movie"></movieCard>
                    </div>
                </div>  
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
import movieCard from '../components/movieCard.vue'

export default {
  name:'dashboard',
  components: {
    movieCard
  },
  data (){
    return {
        allMovies:[]
    }
  },
  methods: {
    fetchAllMovies(){
        this.allMovies = []
        axios({
            method: 'GET',
            url: "http://localhost:3000/movies/nowPlaying",
            headers:{
                access_token: localStorage.access_token
            }
        })
         .then(result=>{
            // console.log(result.data.allTasks)
            this.allMovies = result.data.movies
         })
         .catch(error => {
            console.log(error)
         })

    },
    reassignTasks( selectedTaskId ){
        this.$emit( 'changePage' )
    },
    setSelectedTaskId( selectedTaskId ){
        this.$emit( 'setSelectedTaskId', selectedTaskId )
        this.selectedTaskId = selectedTaskId
    },
    changePage(page){
        this.$emit( 'changePage', page )
    },  
    logout(){
        localStorage.clear()
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
        this.changePage('loginPage')
    }
  },
  created(){
    if(!localStorage.access_token){
        this.changePage('loginPage')
    } else {
        this.fetchAllMovies()
    }
  }

}
</script>

<style>

</style>