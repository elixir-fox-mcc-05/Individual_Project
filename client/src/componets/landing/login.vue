<template>
  <div id="loginPage">
      <div id="left">
          <div id="logo">
              <img src="../../css/assets/logo.png" alt="">
          </div>
          <div>
              <span id="logoText">
                  new way to enjoy <span style="color : #ff004cff ;">music.</span> 
              </span>
          </div>
      </div>
      <div id="rigth">
          <div id="formBox" style="text-align:center;">
            <h1 class="display-4" id="signinTitle">Signin</h1>
                <div class="alert alert-danger" v-if="errRes">
                    {{ errRes }}
                </div>
                <form id="formSignin" @submit.prevent="signinSubmit">
                    <div class="form-group">
                    <input type="email" v-model="email" class="form-control" id="emailSignin" aria-describedby="emailHelp" placeholder="email">
                    </div>
                    <div class="form-group">
                        <input type="password" v-model="password" class="form-control" id="passwordSignin" placeholder="password">
                    </div>
                    <button type="submit" class="btn btn-block btn-primary">Signin</button>
                </form> <br>
                   <span class="text text-muted">OR</span><br> <br>
                <button class="btn btn-block btn-primary"> google </button> <br>
                <span class="text text-muted">
                    didn't have an account ?
                </span> <br> <br>
                <button class="btn btn-block" style="background:#ff004cff;" @click="signupClick">Signup</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name : 'login',
    data() {
        return {
            email : '',
            password : '',
            baseUrl : 'http://localhost:3000',
            errRes : ''
        }
    },
    methods : {
        signinSubmit() {
            let axios = require('axios')
            axios({
                method : 'post',
                url : this.baseUrl+'/user/login',
                data : {
                    email : this.email,
                    password : this.password
                }
            })
            .then(result=>{
                localStorage.setItem('token',result.data.token)
                this.confirmLogin()
            })
            .catch(err=>{
                this.errRes = ''
                this.errRes = err.response.data.error
            })
        },
        confirmLogin() {
            this.$emit('confirmLogin')
        },
        signupClick() {
            this.$emit('signupClick')
        }
    }
}
</script>

<style>

#loginPage {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 100;
}

#left , #rigth {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#logo {
    margin-bottom: 30px;
}

#logoText {
    font-size: 40px;
}

#signinTitle {
    font-size: 50px;
    font-weight: 100;
    color: #ff004cff;
}

#formSignin {
    width: 250px;
}

#formSignin input {
    background-color: transparent;
    border:none;
    border-bottom: 1px solid whitesmoke;
    font-size: 22px;
    color: whitesmoke;
}

#formSignin input:focus {
    border: none;
    border-bottom: 1px solid #ff004cff;
    outline: none;
    box-shadow: none;
}

#formBox {
    width: 250px;
}


</style>