<template>
    <div class="container-fluid m-0 p-0">
        <!-- navbar -->
        <nav class="mb-1 navbar navbar-expand-md navbar-dark unique-color" style="background-color: turquoise;" id="front-navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="">KamVan Board</a>
                <ul class="navbar-nav mr-aut">
                    <li class="nav-item" v-if="!isLogin">
                        <a class="nav-link waves-effect waves-light" v-on:click.prevent='registerForm'>Register</a>
                    </li>
                    <li class="nav-item" v-if="!isLogin">
                        <a class="nav-link waves-effect waves-light" v-on:click.prevent='loginForm'>Login</a>
                    </li>
                    <li class="nav-item" v-if="isLogin">
                        <a class="nav-link waves-effect waves-light" >Random Food Recipe</a>
                    </li>
                    <li class="nav-item" v-if="isLogin">
                        <a class="nav-link waves-effect waves-light" >Restaurant List</a>
                    </li>
                    <li class="nav-item" v-if="isLogin">
                        <a class="nav-link waves-effect waves-light" v-on:click.prevent="logout">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
        <!-- navbar -->

        <!-- login -->
        <div id="login-form" class="col-5 mx-auto my-5" v-if="!isLogin && currentPage == 'login-form'">
            <div>
                <p>{{errMsg}}</p>
            </div>
            <div class="login-title">
                <h1>Login to Makan Apa App</h1>
            </div>
            <form v-on:submit.prevent="login">
                <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="emailLogin">
                </div>
                <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="passwordLogin">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <!-- login -->

        <!-- register -->
        <div id="register-form" class="col-5 mx-auto my-5" v-if="currentPage == 'register-form' && !isLogin">
            <div>
                <p>{{errMsg}}</p>
            </div>
            <div class="register-title">
                <h1>Register to Makan Apa App</h1>
            </div>
            <form v-on:submit.prevent="register">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input  type="email" class="form-control" id="emailRegister" aria-describedby="emailHelp" placeholder="Enter email" v-model="emailRegister">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="passwordRegister" placeholder="Password" v-model="passwordRegister">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <!-- register -->

        <!-- dashboard -->
        <div class="container-md" id="dashboard" v-if="isLogin">
            <div>
                <p>{{errMsg}}</p>
            </div>
            <div class="d-flex p-2">
                <div class="title">
                <h1>Restaurant List</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4" v-for="restaurant in restaurants" :key="restaurant.id">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text" id="card-title">{{restaurant.name}}</p>
                        </div>
                        <img :src="restaurant.img">
                        <div class="card-body">
                            <p class="card-text">{{restaurant.address}}</p>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#restaurant-detail">Show Detail</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- dashboard -->

        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>{{}}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->


    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
        errMsg: '',
        isLogin: false,
        currentPage: 'login-form',
        emailLogin: '',
        passwordLogin: '',
        emailRegister: '',
        passwordRegister: '',
        restaurants: [],
        randomFood: [],
    };
  },
    methods: {
        registerForm() {
            this.isLogin = false
            this.currentPage = 'register-form'
        },
        loginForm() {
            this.isLogin = false
            this.currentPage = 'login-form'
        },
        register() {
            let config = {
                email: this.emailRegister,
                password: this.passwordRegister,
            }
            axios.post('http://localhost:3000/user/register', config)
                .then(response => {
                    const {data} = response;
                    this.currentPage = 'login-form'
                })
                .catch(err => {
                    setTimeout(() => {
                        this.errMsg = '';
                    }, 4000);
                    this.errMsg = err.response.data.msg
                })
        },
        login() {
            let config = {
                email: this.emailLogin,
                password: this.passwordLogin
            }
            axios.post('http://localhost:3000/user/login', config)
                .then(response => {
                    // console.log(response)
                    const {data} = response;
                    const token = data.token;
                    localStorage.setItem('token', token);
                    this.isLogin = true;
                    this.emailLogin = '';
                    this.passwordLogin = '';
                })
                .catch(err => {
                    setTimeout(() => {
                        this.errMsg = '';
                    }, 4000);
                    this.errMsg = err.response.data.msg
                })
        },
        logout() {
            localStorage.clear()
            this.isLogin = false;
        },
        fetchRestaurant() { 
            let config = {
                headers: {
                    'token': localStorage.getItem('token')
                }
            };
            axios.get('http://localhost:3000/data', config)
                .then(result => {
                    console.log(result)
                    this.restaurants = result.data.list
                })
                .catch(err => {
                    setTimeout(() => {
                        this.errMsg = '';
                    }, 4000);
                    this.errMsg = err.response.data.msg
                })
        },
        fetchRandom() {
            let config = {
                headers: {
                    'token': localStorage.getItem('token')
                }
            };
            axios.get('http://localhost:3000/data/wtc', config)
                .then(result => {
                    console.log(result)
                    this.randomFood = result.food
                })
                .catch(err => {
                    setTimeout(() => {
                        this.errMsg = '';
                    }, 4000);
                    this.errMsg = err.response.data.msg
                })
        }
    },
    created: function() {
        if (localStorage.getItem('token')) {
            this.isLogin = true
            this.fetchRestaurant()
        }
    },
};
</script>

<style scoped>
</style>