<template>
    <div>
        <login
        :logged_in="logged_in"
        :errMsg="errMsg"
        @register="register"
        @login="login"
        ></login>

        <mainpage
        :logged_in="logged_in"
        :errMsg="errMsg"
        :movie="movie"
        :drama="drama"
        :action="action"
        :anime="anime"
        :romance="romance"
        @logout="logout"
        @getSearch="getSearch"
        @getDrama="getDrama"
        @getAction="getAction"
        @getAnime="getAnime"
        @getRomance="getRomance"
        ></mainpage>
    </div>
</template>

<script>
import axios from "axios"
import login from "./component/login.vue"
import mainpage from "./component/mainpage.vue"
export default {
    name : "app",
    components: {
        login , mainpage
    },
    data(){
        return {
            title : [],
            movie : [],
            logged_in : true,
            token : localStorage.getItem('token'),
            errMsg : '',
            id : null,
            drama : [],
            action : [],
            anime : [],
            romance : []
        }
    },
    methods: {
        register(data) {
            axios.post("http://localhost:3000/users/register", {
                    email: data.email,
                    password: data.password
            })
                .then(data => {
                    console.log(data)
                })
                .catch(err => {
                    setTimeout(() => {
                        this.errMsg = '';
                    }, 4000);
                    this.errMsg = err.response.data.msg
                })
        },
        login(data){
            axios({
                method: 'post',
                url: 'http://localhost:3000/users/login',
                data: {
                    email: data.email,
                    password: data.password
                }
            })
            .then(data => {
                if(data){
                    localStorage.setItem('token', data.data.token)
                    this.logged_in = false
                }
            })
            .catch(err => {
                setTimeout(() => {
                    this.errMsg = '';
                }, 4000);
                this.errMsg = err.response.data.msg
            })
        },
        logout(){
            localStorage.clear()
            this.logged_in = true;
        },

        getDrama(){
            axios({
                method: 'get',
                url : 'http://localhost:3000/movies/drama',
                headers: {
                    token : this.token
                }
            })
                .then(data => {
                    console.log('ini data',data.data.Movie)
                    this.drama = data.data.Movie
                    this.movie = []
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getAction(){
            axios({
                method: 'get',
                url : 'http://localhost:3000/movies/action',
                headers: {
                    token : this.token
                }
            })
                .then(data => {
                    this.action = data.data.Movie
                    this.movie = []
                    this.drama = []
                    this.anime = []
                    this.romance = []
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getAnime(){
            axios({
                method: 'get',
                url : 'http://localhost:3000/movies/anime',
                headers: {
                    token : this.token
                }
            })
                .then(data => {
                    this.anime = data.data.Movie
                    this.movie = []
                    this.drama = []
                    this.action = []
                    this.romance = []
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getRomance(){
            axios({
                method: 'get',
                url : 'http://localhost:3000/movies/romance',
                headers: {
                    token : this.token
                }
            })
                .then(data => {
                    this.romance = data.data.Movie
                    console.log(this.romance)
                    this.movie = []
                    this.drama = []
                    this.anime = []
                    this.action = []
                })
                .catch(err => {
                    console.log(err)
                })
        },



        getSearch(data) {
            console.log('ini data get search',data)
            axios.get(`http://www.omdbapi.com/?apikey=606c2e47&s=${data.searchMovie}`)
                .then(data => {
                    if(data.data.Response == "True"){
                        this.movie = data.data.Search
                        this.drama = []
                    }else{
                        setTimeout(() => {
                            this.errMsg = '';
                        }, 4000);
                        this.errMsg = 'Movie not Found! :)'
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }

    },
    created(){
        if(this.token){
            this.logged_in = false
        } 
    }


}
</script>

<style>

</style>