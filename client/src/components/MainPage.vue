<template>
    <div>
        <nav class="navbar navbar-light bg-transparant">
            <a class=""></a>
            <button class="btn btn-dark my-0 my-sm-0" type="button" v-on:click="toLoginPage">LOGOUT</button>
        </nav><br>
        <div class="container">
        <div class="row">
            <div class="col-md-12 offset-md-0">
                <form class="form-signin" v-on:submit.prevent="getMusician">
                    <h5 class="text-center">Hello {{loginName}}, Let's Find Your Favorite Musician Here</h5>
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

                <MusicianData v-if='musicianProfile' :musicianProfile='musicianProfile'></MusicianData>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import MusicianData from './MusicianData'
import axios from 'axios'
export default {
    name: 'MainPage',
    components: {
        MusicianData
    },
    data () {
        return {
            musicianName: '',
            errorMessage: false,
            loginName: localStorage.getItem('name'),
            musicianProfile: null,
            errorMessage: false
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
                })
                .catch(err => {
                    this.errorMessage = `Sorry, ${this.musicianName} data not in our database yet. You can try another musician`
                    this.musicianProfile = null;
                })
        },
        toLoginPage() {
            this.$emit('toLoginPageFromMainPage');
            localStorage.clear()
        }
    }

}
</script>

<style>

</style>