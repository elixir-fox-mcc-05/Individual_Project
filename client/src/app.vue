<template>
<div id="app">
    <Header></Header>
    <Login :email="email" :password="password" @login="login" :loggedIn="loggedIn"></Login>
    <Menu :foods="foods" :loggedIn="loggedIn" :searchName="searchName" @search="search"></Menu>
    <Footer></Footer>
</div>

</template>


<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Login from './components/article/Login'
import Menu from './components/article/Menu'
import axios from 'axios'
export default {
    name : "app",
    components : {
        Header,
        Footer,
        Login,
        Menu
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
            searchName : ''
        }
    },
    methods: {
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
                let token =data.token
                localStorage.setItem('token',token)
                this.loggedIn = true
            })
            .catch(err => {
                console.log(err.response)
            })
            
        },
        search(name){
            // console.log(name)
            axios({
                method:'post',
                url:'http://localhost:3000/foods/search',
                data : {
                    searchname : name
                }
            })
            .then(data => {
                console.log(data.data)
                this.foods = data.data.meals

            })
            .catch(err => {
                console.log(err.response)
            })
            // console.log(name)

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
    }
}
</script>


<style>
</style>