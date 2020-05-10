<template>
<div id="app">
    <Header :loggedIn="loggedIn" @logout="logout"></Header>
    <Login :email="email" :password="password" @login="login" :loggedIn="loggedIn"></Login>
    <Menu :foods="foods" :loggedIn="loggedIn" :searchName="searchName" @search="search"></Menu>
    <Error :errorText="errorText" :showError="showError"></Error>
    <Footer></Footer>
</div>

</template>


<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Login from './components/article/Login'
import Menu from './components/article/Menu'
import Error from './components/ui/Error'
import axios from 'axios'

export default {
    name : "app",
    components : {
        Header,
        Footer,
        Login,
        Menu,
        Error
    },
    data(){
        return {
            foods: [],
            error: '',
            showLogin: false,
            showFoodMenu: false,
            loggedIn : false,
            email : '',
            password : '',
            searchName : '',
            showError : false,
            errorText : ''
        }
    },
    methods: {
        checkToken(){
            if(localStorage.token){
                this.loggedIn = true
            }else{
                this.loggedIn = false
            }
        },
        login(data){
            // console.log(data)
            axios({
                method: 'post',
                url : 'http://localhost:3000/login',
                data : {
                    email : data.email,
                    password : data.password
                }
            })
            .then(response => {
                this.showError = false
                console.log(response)
                let token = response.data.token
                localStorage.setItem('token',token)
                this.loggedIn = true
            })
            .catch(err => {
                this.showError = true
                this.errorText = err.response.data.error
            })
            
        },
        search(name){
            // console.log(name)
            axios({
                method:'post',
                url:'http://localhost:3000/foods/search',
                headers : {
                    token : localStorage.token
                },
                data : {
                    searchname : name
                }
            })
            .then(data => {
                // console.log(data.data)
                this.foods = data.data.meals
        
            })
            .catch(err => {
                this.showError = true
                this.errorText = err.response.data.err
            })
            // console.log(name)
            this.searchName = ''
        },
        logout(){
            this.loggedIn = !this.loggedIn
            localStorage.clear()
        }
    },
    created(){
        axios({
            method:'get',
            url:'http://localhost:3000/foods',

        })
        .then(({data}) => {
            console.log(data)
            this.foods = data.meals
            console.log(this.foods)
        })
        .catch(err => {
            console.log(err.response.data)
        })
        this.checkToken()
    }
}
</script>


<style>
</style>