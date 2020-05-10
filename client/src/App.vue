<template>
    <div>
        <navbar 
            :isLogin="isLogin"
            @showRegister="showRegister"
            @showLogin="showLogin" 
            @logout="logout"
            @showTvPopular="showTvPopular"
            @showTvTopRated="showTvTopRated"
            @showMoviePopular="showMoviePopular"
            @showMovieTopRated="showMovieTopRated"
        ></navbar>

        <register :currentPage="currentPage" @changeToLogin="changeToLogin"></register>

        <login :currentPage="currentPage" :isLogin="isLogin" @changeLogin="changeLogin"></login>

        <div class="container" v-show="currentPage === 'dashboard'">
            <h1 class="mb-4 mt-2 text-center">{{ title }}</h1>
            <div class="row" >
                <card v-for="(movie, i)  in movies" :key="i" :movie="movie"></card>
            </div>
        </div>

    </div>
</template>

<script>
import navbar from "./components/Navbar";
import card from "./components/Card";
import register from "./components/Register";
import login from "./components/Login";

export default {
    name: 'App',
    components: {
        navbar,
        card,
        register,
        login
    }, 
    data() {
        return {
            currentPage: "login",
            isLogin: '',
            movies: [],
            title: '',
            showToggle: true
        }
    },
    methods: {
        showRegister() {
            this.currentPage = 'register';
        },
        showLogin() {
            this.currentPage = 'login';
        },
        changeLogin(input) {
            this.isLogin = input;
            this.currentPage = 'dashboard';
            this.showMovieNowPlaying();
        },
        checkLogin() {
            if (localStorage.getItem('token')) {
                this.isLogin = true;
                this.currentPage = 'dashboard';
                this.showMovieNowPlaying();
            }
        },
        changeToLogin(input) {
            this.currentPage = input
        },
        logout() {
            localStorage.clear();
            this.isLogin = false;
            this.currentPage = 'login';
            this.movies = [];
        },
        fetchTvPopular() {
            const axios = require('axios');
            axios.get('http://localhost:3000/tv/popular', {
                headers: {
                    token: localStorage.token
                }
            })
                .then(response => {
                    let { data } = response;
                    data = data.results;
                    data.forEach(element => {
                        this.movies.push(element);
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        },
        fetchTvTopRated() {
            const axios = require('axios');
            axios.get('http://localhost:3000/tv/toprated', {
                headers: {
                    token: localStorage.token
                }
            })
                .then(response => {
                    let { data } = response;
                    data = data.results;
                    data.forEach(element => {
                        this.movies.push(element);
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        },
        fetchMoviePopular() {
            const axios = require('axios');
            axios.get('http://localhost:3000/movie/popular', {
                headers: {
                    token: localStorage.token
                }
            })
                .then(response => {
                    let { data } = response;
                    data = data.results;
                    data.forEach(element => {
                        this.movies.push(element);
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        },
        fetchMovieTopRated() {
            const axios = require('axios');
            axios.get('http://localhost:3000/movie/toprated', {
                headers: {
                    token: localStorage.token
                }
            })
                .then(response => {
                    let { data } = response;
                    data = data.results;
                    data.forEach(element => {
                        this.movies.push(element);
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        },
        fetchMovieNowPlaying() {
            const axios = require('axios');
            axios.get('http://localhost:3000/movie/nowplaying', {
                headers: {
                    token: localStorage.token
                }
            })
                .then(response => {
                    let { data } = response;
                    data = data.results;
                    data.forEach(element => {
                        this.movies.push(element);
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        },
        showMovieNowPlaying() {
            this.movies = [];
            this.title = 'On Air Movies';
            this.fetchMovieNowPlaying();
        },
        showTvPopular() {
            this.movies = [];
             this.title = 'Popular TV Series';
            this.fetchTvPopular();
        },
        showTvTopRated() {
            this.movies = [];
            this.title = 'Top Rated TV Series';
            this.fetchTvTopRated();
        },
        showMoviePopular() {
            this.movies = [];
            this.title = 'Popular Movies';
            this.fetchMoviePopular();
        },
        showMovieTopRated() {
            this.movies = [];
            this.title = 'Top Rated Movies';
            this.fetchMovieTopRated();
        }
    },
    created() {
        this.checkLogin();
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    .form-container {
        width: 500px;
        margin: auto;
    }
    * {
        font-size: 14px;
    }
    h1 {
        font-size: 24px;
        font-family: 'Roboto';
    }
</style>