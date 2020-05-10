<template>
  <div>
        <navbar :loggedIn="loggedIn"
            :message="message"
            :messageSucces="messageSucces"
            @login="login"
            @logout="logout"
            @register="register"
            @showLogin ="showLogin"
            @showRegister ="showRegister"
            @hideLogin="hideLogin"
            @hideRegister="hideRegister"
            @onSignIn="onSignIn"
            @changePage="changePage"
        ></navbar>
        <dashboard v-if="loggedIn"
                :topList="topList"
                :currentPage="currentPage"
                :userList="userList"
                @addWatchList="addWatchList"
                :messageSucces="messageSucces"
                @remove="remove"
                @watched="watched">
        </dashboard>
  </div>
</template>

<script>
import axios from "axios";
import navbar from "./components/navbar"
import dashboard from "./components/dashboard"

export default {
    name : "App",
    components : {
        navbar, dashboard
    },
    data (){
        return {
            loggedIn : localStorage.getItem("token")? true:false,
            currentPage : "home",
            baseUrl : "http://localhost:3000/",
            token : localStorage.getItem("token"),
            message : "",
            messageSucces : "",
            topList : [],
            userList : []
        }
    },
    methods : {
        fetchdata(){
            axios({
                method : "GET",
                url : this.baseUrl + "anime/",
                headers : {
                    token : this.token
                }
            })
                .then(({data})=>{
                    console.log(data)
                    this.userList = data.Anime
                })
                .catch(err => {
                    this.message = err.response.data.msg
                })
        },
        addWatchList(data){
            const {title, episode, mal_id, image_url, genre, rating, url} = data
            axios({
                method : "post",
                url : this.baseUrl + 'anime',
                headers : {
                    token : this.token
                },
                data : {
                    title, episode, mal_id, image_url, genre, rating, url
                }
            })
                .then(result => {
                    this.messageSucces = `Succes adding watch list ${title}`
                })
                .catch(err => {
                    this.message = err.response.data.msg
                })
        },
        changePage(data){
            if(data === 'userHome'){
                this.fetchdata()
            }
            this.currentPage = data
        },
        fetchTopAnime(){
            axios({
                method : "get",
                url : this.baseUrl + "anime/top",
                headers : {
                    token : this.token
                }
            })
                .then(({data})=>{
                    this.topList = data.Anime.top
                })
                .catch(err=>{
                    this.message = err.response.data.msg
                })
        },
        login(userData){
            axios({
                method : "post",
                url : this.baseUrl + "user/login",
                data : {
                    email : userData.email,
                    password : userData.password
                }
            })
                .then(({data})=>{
                    localStorage.setItem("token", data.acces_token)
                    this.loggedIn = true
                    this.currentPage = "home"
                    this.fetchTopAnime()
                })
                .catch(err =>{
                    this.message = err.response.data.msg
                })
        },
        logout(){
            const auth2 = gapi.auth2.getAuthInstance()
            auth2.signOut().then(() => {
                localStorage.clear()
                this.loggedIn = false
                this.currentPage = ""
            })            
        },
        register(userData){
            axios({
                method : "post",
                url : this.baseUrl + "user/register",
                data : {
                    name : userData.name,
                    password : userData.password,
                    confirmPassword : userData.confirmPassword,
                    email : userData.email
                }
            })
                .then(({data})=>{
                    this.messageSucces = `Succes Create an account with id ${data.id} and email ${data.email}`
                })
                .catch(err => {
                    this.message = err.response.data.msg
                })
        },
        showLogin () {
            this.message = ""
            this.messageSucces = ""
            this.$modal.show('login-Form');
        },
        hideLogin (data) {
            this.message = ""
            this.messageSucces = ""
            this.$modal.hide('login-Form');
        },
        showRegister(){
            this.message = ""
            this.messageSucces = ""
            this.$modal.show('register-Form')
        },
        hideRegister(){
            this.message = ""
            this.messageSucces = ""
            this.$modal.hide('register-Form')
        },
        onSignIn(user) {
            const profile = user.getAuthResponse().id_token;
            console.log(profile)
            axios({
                method: 'post',
                url : this.baseUrl + 'user/google-login',
                headers : {
                    google_token : profile
                },
            })
                .then(({data}) => {
                    localStorage.setItem('token', data.Token)
                    this.token = data.Token
                    this.loggedIn = true;
                    this.fetchTopAnime();
                    this.currentPage = "home";
                })
                .catch(err => {
                    console.log(err);
                })
        },
        watched(data){
            axios({
                method : "PUT",
                url : `${this.baseUrl}anime/${data.id}`,
                headers : {
                    token : this.token
                },
                data : {
                    status : data.status
                }
            })
                .then(({data})=>{
                    this.fetchdata()
                })
                .catch(err => {
                    this.message = err.response.data.msg
                })
        },
        remove(data){
            axios({
                method : "delete",
                url : `${this.baseUrl}anime/${data.id}`,
                headers : {
                    token : this.token
                }
            })
                .then(result=> {
                    this.fetchdata()
                })
                .catch(err => {
                    this.message = err.response.data.message
                })
        }

    },
    created(){
        if(localStorage.getItem("token")){
            this.fetchTopAnime()
            this.fetchdata()
        }
    },
    mounted() {
        gapi.load('auth2', function() {
            gapi.auth2.init();
        });
        gapi.signin2.render('google-signin-button', {
            onsuccess: this.onSignIn
        });
    },
}
</script>

<style>

</style>