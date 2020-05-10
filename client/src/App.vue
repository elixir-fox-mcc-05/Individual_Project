<template>
  <div>
      <div id="login" v-if="currentPage == 'login'">
            <div class="container">
                <div id="login-row" class="row justify-content-center align-items-center">
                    <div id="login-column" class="col-md-6">
                        <div id="login-box" class="col-md-12">
                            <form id="login-form" class="form" v-on:submit.prevent="login">
                                <h3 class="text-center text-info">Login</h3>
                                <div class="form-group">
                                    <label for="email" class="text-info">Email:</label><br>
                                    <input type="text" name="email" id="email" class="form-control" v-model="email">
                                </div>
                                <div class="form-group">
                                    <label for="password" class="text-info">Password:</label><br>
                                    <input type="password" name="password" id="password" class="form-control" v-model="password">
                                </div><br>
                                <div class="form-group">
                                    <input type="submit" name="submit" class="btn btn-info btn-md" value="Login">
                                    <label for="remember-me" class="text-info"><span></span><br>
                                </div>
                                <div id="register-link" class="text-right">
                                    <label for="remember-me" class="text-info"><span></span><br>
                                    <!-- <label for="remember-me" class="text-info"><span></span><br> -->
                                </div>
                            </form>
                            <div id="google-login">
                                <GoogleLogin :params="params" :onSuccess="onSuccess">Google</GoogleLogin>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid" v-else-if="currentPage == 'dashboard'">
            <nav class="navbar navbar-light bg-dark justify-content-between">
                <a class="navbar-brand" id="navbar-title" >BSF</a>
                <form class="form-inline" v-on:submit.prevent="logout">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-primary" type="button">search</button>
                  <button class="btn btn-outline-danger" type="submit">logout</button>
                </form>
            </nav>
            <h1 id="dashboard-title">Bandung Street Food</h1>
            <div class="row">
                <div class="col-lg-4" v-for="(restaurant, index) in restaurants" :key="index">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text" id="card-title">{{restaurant.name}}</p>
                        </div>
                        <img :src="restaurant.img" :alt="restaurant.name">
                        <div class="card-body">
                            <p class="card-text">{{restaurant.address}}</p>
                            <p class="card-text">cost for two people: {{restaurant.cost}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
import GoogleLogin from 'vue-google-login';
export default {
    name: 'App',
    components: {
        GoogleLogin
    },
    data(){
        return{
            currentPage: 'login',
            restaurants: [],
            email: '',
            password: '',
            access_token: '',
            params: {
                client_id: '232160504908-7cujdjghk1mt8dcit6v2i43m9ok5oh3e.apps.googleusercontent.com'
            }
        }
    },
    methods: {
        auth(){
            if(localStorage.getItem('access_token')){
                this.currentPage = 'dashboard'
                this.fetchData()
            }
        },

        login(){ 
            axios({
                method: 'post',
                url: `http://localhost:3000/login`,
                data: {
                    email: this.email,
                    password: this.password
                }
            })
                .then(data => {
                    this.access_token = data.data.access_token
                    localStorage.setItem('access_token', this.access_token)
                    this.auth()

                })
                .catch(err => {
                    console.log(err)
                })
        },

        fetchData(){
            axios({
                method: 'get',
                url: `http://localhost:3000/`,
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(data => {
                    console.log(data)
                    this.restaurants= data.data.restaurants
                })
                .catch(err => {
                    console.log(err.responseJson)
                })
        },

        logout(){
            localStorage.clear()
            this.currentPage = 'login'
            this.email = '',
            this.password = ''
        },

        onSuccess(googleUser){
            const id_token = googleUser.getAuthResponse().id_token; 
            axios({
                method: 'post',
                url: `http://localhost:3000/googleLogin`,
                headers: {
                    google_token: id_token
                }
            })
                .then(data => {
                    console.log('masuk')
                    console.log(data.data)
                    localStorage.setItem('access_token', data.data.access_token)
                    this.auth()
                })
                .catch(err => {
                    console.log(err.responseJSON)
                })
        },
    },

    created(){
        console.log('created')
        if(localStorage.getItem('access_token')){
            this.currentPage = 'dashboard'
            this.fetchData()
        } else {
            this.currentPage = 'login'
        }
    }
}
</script>

<style>

</style>