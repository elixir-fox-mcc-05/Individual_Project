<template>
        <nav class="navbar navbar-expand-sm navbar-dark  mb-3">
            <div class="container">
                <a @click.prevent="nothing" class="navbar-brand" href="">Moviz<i class="fas fa-play-circle ml-2"></i> </a>
                <ul class="navbar-nav">
                    <li v-show="!isLogin" class="nav-item">
                        <a @click.prevent="$emit('showRegister')" class="nav-link" href="">Register</a>
                    </li>
                    <li v-show="!isLogin" class="nav-item">
                        <a @click.prevent="$emit('showLogin')" class="nav-link" href="">Login</a>
                    </li>
                    <li v-show="isLogin" class="nav-item dropdown">
                        <a href="" class="nav-link dropdown-toggle" data-toggle="dropdown">TV Series</a>
                        <div class="dropdown-menu bg-dark">
                            <a @click.prevent="$emit('showTvPopular')" class="nav-link" href="">TV Popular</a>
                            <a @click.prevent="$emit('showTvTopRated')" class="nav-link" href="">TV Top Rated</a>
                        </div>
                    </li>
                    <li v-show="isLogin" class="nav-item dropdown">
                        <a href="" class="nav-link dropdown-toggle" data-toggle="dropdown">Movies</a>
                        <div class="dropdown-menu bg-dark">
                            <a @click.prevent="$emit('showMovieTopRated')" class="nav-link" href="">Movie Top Rated</a>
                            <a @click.prevent="$emit('showMoviePopular')" class="nav-link" href="">Movie Popular</a>
                        </div>
                    </li>
                    <li v-show="isLogin" class="nav-item">
                        <a @click.prevent="$emit('logout')" class="nav-link" href="">Logout</a>
                    </li>
                    <form v-show="isLogin" class="form-inline my-2 my-lg-0">
                        <input type="text" class="form-control mr-sm-2" placeholder="Search" v-model="searchItem">
                        <button @click.prevent="searchMovie" class="btn btn-outline-secondary my-2 my-sm-0">Search</button>
                    </form>
                </ul>
            </div>
        </nav>
</template>

<script>
export default {
    name: "Navbar",
    props: ['isLogin'],
    data() {
        return {
            searchItem: ''
        }
    },
    methods: {
        nothing() {},
        searchMovie() {
            const axios = require('axios');
            axios.post('http://localhost:3000/tv/search', {
                title: this.searchItem
            }, {
                headers: {
                    token: localStorage.token
                }
            })
            .then(user => {
                const { data } = user
                this.$emit('getSearchResult', data);
            })
            .catch(err => {
                err = err.response
                let { data } = err;
                console.log(data)            
            })
        }
    }
}
</script>

<style>
    .navbar {
        background-color: rgba(30, 32, 40, 0.8) !important;
    }
    .main-header {
        display: flex;
    }
</style>