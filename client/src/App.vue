<template>
    <div>
        <Jumbotron></Jumbotron>
        <LoginPage
            v-if="page == 'loginPage'"
            @toMainPageFromLoginPage="toMainPage"
        ></LoginPage>
        <MainPage
            v-if="page == 'mainPage'"
        ></MainPage>
    </div>
</template>

<script>
import Jumbotron from './components/Jumbotron'
import LoginPage from './components/LoginPage'
import MainPage from './components/MainPage'
export default {
    name: 'App',
    components: {
        Jumbotron, LoginPage, MainPage
    },
    data (){
        return {
            page: 'loginPage'
        }
    },
    methods: {
        toMainPage(){
            this.page = 'mainPage'
        }
    },
    created() {
        if(localStorage.token) {
            this.page = 'mainPage'
        }
    }
}
</script>

<style>
     body {
        background-image: url(../assets/audio-e-guitars-guitars-music-6966.jpg);
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        -moz-background-size: cover;
        background-position: center; 
    }
</style>