<template>
  <div id="loginPage">
    <div class="container" id="login-box" >
      <div class="row align-items-center justify-content-center">
          <!-- <div class="col-4"></div> -->
          <div class="col-4 border border-primary rounded m-3 p-3">
              <div class="form-horizontal ">
                  <h1 class="text-center">Welcome to Movie Reel</h1>
                  <p class="lead text-muted text-center">Keep a tab on the latest movies playing now on local theaters, or spot community-voted favorites according to various genres!</p>
                  <hr/>
                  <!-- <div style="max-width:100%; background-color:#2ecc71; color:white; border-radius:5px; padding:0px 5px;" v-if="successMessage">
                    <p v-if="successMessage">{{successMessage}}</p>
                  </div> -->
                  <form class="justify-content-center"  @submit.prevent="login()">
                      <label class="control-label" for="loginEmail">Email:</label>
                      <input type="email" class="form-control" id="loginEmail" v-model="user.loginEmail">
                      <label class="control-label" for="loginPassword">Password:</label>
                      <input type="password" class="form-control" id="loginPassword" v-model="user.loginPassword"><br>
                      <button type="submit" class="btn btn-success" style="width:100%;">Log in</button>
                  </form><br>
                  <!-- <div style="display:flex;justify-content:flex-end;">
                    <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure" style="width:100%;">Login with Google</GoogleLogin>
                  </div> -->
                  <hr/>
              </div>
          </div>
          <!-- <div class="col-4"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'loginPage',
  data(){
      return {
        user:{
          loginEmail:"",
          loginPassword:""
        }
    }
  },
  methods:{
    changePage(page){
      this.$emit( 'changePage', page )
    },
    login(){
      let payload = {
        email: this.user.loginEmail,
        password: this.user.loginPassword
      }
      axios({
        method: 'POST',
        url:'http://localhost:3000/login',
        data:{
          email:payload.email,
          password:payload.password
        }
      })
        .then(result =>{
          // console.log(result.data)
          // console.log("INI ACCESS TOKEN",result.data.access_token)
          localStorage.setItem('access_token', result.data.access_token)
          this.changePage('dashboard')
        })
        .catch(error =>{
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
