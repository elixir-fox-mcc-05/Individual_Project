<template>
    <div>
        <Jumbotron></Jumbotron>
        <LoginPage
            v-if="page == 'loginPage'"
            @toMainPageFromLoginPage="toMainPage"
        ></LoginPage>
        <MainPage
            v-if="page == 'mainPage'"
            @toLoginPageFromMainPage='toLoginPage'
        ></MainPage>
        <Footer></Footer>
    </div>
</template>

<script>
import Jumbotron from './components/Jumbotron'
import LoginPage from './components/LoginPage'
import MainPage from './components/MainPage'
import Footer from './components/Footer'
export default {
    name: 'App',
    components: {
        Jumbotron, LoginPage, MainPage, Footer
    },
    data (){
        return {
            page: 'loginPage'
        }
    },
    methods: {
        toMainPage(){
            this.page = 'mainPage'
        },
        toLoginPage(){
            this.page = 'loginPage'
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