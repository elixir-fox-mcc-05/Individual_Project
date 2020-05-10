<template>
    <div v-if="!logged_in">
        <!-- NAVBAR -->
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Movies</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Category
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" @click="getAction">Action</a>
                                <a class="dropdown-item" @click="getAnime">Anime</a>
                                <a class="dropdown-item" @click="getDrama">Drama</a>
                                <a class="dropdown-item" @click="getRomance">Romance</a>
                            </li>
                        </ul>
                    </div>
                <div class="btn btn-dark ml-auto" id="log-out" v-on:click.prevent="logout" >Logout</div>
            </nav>
        <!-- NAVBAREND  -->
        <!-- MovieList -->
        <div class="container">
            <!-- Search -->
            <div class="row mt-3 justify-content-center">
                <div class="col-8">
                    <h1 class="text-center">Search Movie</h1>
                        <p style="color: Red;" class="text-center"><b>{{errMsg}}</b></p>
                    <div class="input-group mb-3" >
                        <form class="form-control" v-on:submit.prevent="getSearch">
                            <input type="text" class="form-control" placeholder="Search Movie ..." aria-label="Recipient's username" aria-describedby="basic-addon2"  v-model="searchMovie">
                        </form>
                                <div class="input-group-append">
                                    <button class="btn btn-outline-dark" type="button" v-on:click.prevent="getSearch">Search</button>
                                </div>
                    </div>
                </div>
            </div>
            <!-- Result -->
            <div v-if="movie.length">
                <div class="row">
                    <div v-for="(item, index) in movie" :key="index">
                            <div class="col-md">
                                <div class="card mb-3">
                                    <img class="card-img-top" :alt="item.Title" :src="item.Poster">
                                        <div class="card-body">
                                            <h5 class="card-title">{{item.Title}}</h5>
                                            <label for="">Type : {{item.Type}}</label><br>
                                            <label for="">Year {{item.Year}}</label><br>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <!-- Drama -->
            <div v-if="drama.length">
                <div class="row">
                    <div v-for="(item, index) in drama" :key="index">
                            <div class="col-md">
                                <div class="card mb-3">
                                    <img class="card-img-top" :alt="item.Title" :src="item.Poster">
                                        <div class="card-body">
                                            <h5 class="card-title">{{item.Title}}</h5>
                                            <label for="">Type : {{item.Type}}</label><br>
                                            <label for="">Year {{item.Year}}</label><br>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <!-- Action -->
            <div v-if="action.length">
                <div class="row">
                    <div v-for="(item, index) in action" :key="index">
                            <div class="col-md">
                                <div class="card mb-3">
                                    <img class="card-img-top" :alt="item.Title" :src="item.Poster">
                                        <div class="card-body">
                                            <h5 class="card-title">{{item.Title}}</h5>
                                            <label for="">Type : {{item.Type}}</label><br>
                                            <label for="">Year {{item.Year}}</label><br>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <!-- Romance -->
            <div v-if="romance.length">
                <div class="row">
                    <div v-for="(item, index) in romance" :key="index">
                            <div class="col-md">
                                <div class="card mb-3">
                                    <img class="card-img-top" :alt="item.Title" :src="item.Poster">
                                        <div class="card-body">
                                            <h5 class="card-title">{{item.Title}}</h5>
                                            <label for="">Type : {{item.Type}}</label><br>
                                            <label for="">Year {{item.Year}}</label><br>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <!-- anime -->
            <div v-if="anime.length">
                <div class="row">
                    <div v-for="(item, index) in anime" :key="index">
                            <div class="col-md">
                                <div class="card mb-3">
                                    <img class="card-img-top" :alt="item.Title" :src="item.Poster">
                                        <div class="card-body">
                                            <h5 class="card-title">{{item.Title}}</h5>
                                            <label for="">Type : {{item.Type}}</label><br>
                                            <label for="">Year {{item.Year}}</label><br>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: "mainpage",
    props : ['logged_in', 'errMsg', 'movie', 'drama', 'action', 'anime', 'romance'],
    data(){
        return {
            searchMovie : ''
        }
    },
    methods : {
        logout(){
            this.$emit('logout')
        },
        getSearch(){
            let temp = {
                searchMovie : this.searchMovie
            }
            this.$emit('getSearch', temp)
            this.searchMovie = ''
        },
        getDrama() {
            this.$emit('getDrama')
        },
        getAction() {
            this.$emit('getAction')
        },
        getAnime() {
            this.$emit('getAnime')
        },
        getRomance() {
            this.$emit('getRomance')
        }



    }
}
</script>

<style>

</style>