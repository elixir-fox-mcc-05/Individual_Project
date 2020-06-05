<template>
    <div>
        <nav class="navbar navbar-light bg-transparant">
            <a class=""></a>
            <button class="btn btn-dark my-0 my-sm-0" type="button" v-on:click="toLoginPage">LOGOUT</button>
        </nav><br>
        <FavoriteTable 
        :favoriteList="favoriteList"
        @deleteFavorite="deleteFavorite"
        ></FavoriteTable>
        <div class="container">
            <div class="row">
                <div class="col-md-12 offset-md-0">
                    <form class="form-signin" v-on:submit.prevent="getMusician">
                        <h5 class="text-center">Let's Find Your Favorite Musician Here</h5>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <button class="btn btn-dark" type="submit"><b-icon icon="search" variant="light"></b-icon></button>
                            </div>
                            <input type="text" v-model="musicianName" class="form-control" placeholder="Musician" required>
                        </div>
                        <div class="form-label-group">
                        </div><br>
                    </form>
                    <h3 class="text-center text-danger" v-if="errorMessage">{{ errorMessage }} </h3>
                    <MusicianData v-if='musicianProfile' 
                    :musicianProfile='musicianProfile' 
                    :alreadyFavorite="alreadyFavorite"
                    @addFavorite="addFavorite"
                    ></MusicianData>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MusicianData from './MusicianData'
import FavoriteTable from './FavoriteTable'
import axios from 'axios'
export default {
    name: 'MainPage',
    components: {
        MusicianData, FavoriteTable
    },
    data () {
        return {
            musicianName: '',
            errorMessage: false,
            musicianProfile: null,
            errorMessage: false,
            favoriteList: [],
            alreadyFavorite: false,
        }
    },
    methods: {
        getMusician() {
            axios.get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${this.musicianName}`)
                .then(data => {
                    // console.log(data)
                    // console.log(data.data.artists[0]) // pakai objek yg ini
                    this.musicianProfile = data.data.artists[0]
                    this.errorMessage= false;
                    this.alreadyFavorite= false
                })
                .catch(err => {
                    this.errorMessage = `Sorry, ${this.musicianName} data not in our database yet. You can try another musician`
                    this.musicianProfile = null;
                    this.alreadyFavorite= false
                })
        },
        toLoginPage() {
            this.$emit('toLoginPageFromMainPage');
            localStorage.clear()
        },
        getFavorite (){
            axios.get('http://localhost:3000/favorites', {
                headers: {
                    token: localStorage.token
                }
            })
                .then(data => {
                    this.favoriteList = data.data.favorite
                })
                .catch(err => {
                    console.log(err.response)
                })
        },
        addFavorite(musicianName) {
            axios.post('http://localhost:3000/favorites', {
                name: musicianName
            }, {
                headers: {
                    token: localStorage.token
                }
            })
                .then(data => {
                    // this.favoriteList.push(data.data.favorite)
                    this.getFavorite()
                    this.alreadyFavorite = false
                })
                .catch(err => {
                    this.alreadyFavorite = true
                })
        },
        deleteFavorite(favoriteId){
            axios.delete(`http://localhost:3000/favorites/${favoriteId}`, {
                headers: {
                    token: localStorage.token
                }
            })
                .then(data => {
                    this.getFavorite()
                })
                .catch(err => {
                    console.log(err.response)
                })
        }
    },
    created () {
        this.getFavorite()
    }
}
</script>

<style>

</style>