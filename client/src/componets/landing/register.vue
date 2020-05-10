<template>
<div id="wraper">  
    <div v-if="displayPage=='successReg'" style="text-align:center;">
        <h1>Congratulation, You Successfuly Registered !</h1>
        <button class="btn btn-link" @click.prevent="cancelBtn"><h3 style="color:#ff004cff;">Click here to Signin</h3></button>
    </div>
    <div id="registerBox" v-if="displayPage=='signupForm'">
        <h1 class="display-4" style="color:#ff004cff;">Signup</h1>
        <h3>Welcome new user</h3> <br>
        <div class="alert alert-danger" v-if="errRes">
            {{ errRes }}
        </div>
        
        <h5>Insert your data bellow</h5> <br>
            <form id="formSignup" @submit.prevent="signupSubmit">
                <div class="form-group">
                    <input type="email" class="form-control" v-model="emailSignup" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" v-model="passwordSignup" placeholder="Password">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" v-model="passwordSignupConfirm" placeholder="Confirm Password">
                </div>
                <button type="submit" class="btn btn-primary" >Signup</button>
                <button type="submit" class="btn btn-danger" @click.prevent="cancelBtn">Cancel</button>
            </form>
    </div>
</div>
</template>

<script>
import Axios from 'axios'
export default {
    name : 'register',
    data() {
        return {
            displayPage : 'signupForm',
            emailSignup : '',
            passwordSignup : '',
            passwordSignupConfirm : '',
            baseUrl : 'http://localhost:3000',
            errRes : '',
            successRes : ''
        }
    },
    methods : {
        cancelBtn() {
            location.reload()
        },
        signupSubmit() {
            Axios({
                method : 'post',
                url : this.baseUrl+'/user/register',
                data : {
                    email : this.emailSignup,
                    password : this.passwordSignup,
                    confirm_password : this.passwordSignupConfirm
                }
            })
            .then(result=>{
                this.displayPage = 'successReg'
            })
            .catch(err=>{
                this.errRes = err.response.data.error 
            })
        }
    }
}
</script>

<style>
    #registerBox {
        width: 250px;
    }
    #wraper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }
    #formSignup input {
    background-color: transparent;
    border:none;
    border-bottom: 1px solid whitesmoke;
    font-size: 22px;
    color: whitesmoke;
    }

    #formSignup input:focus {
        border: none;
        border-bottom: 1px solid #ff004cff;
        outline: none;
        box-shadow: none;
    }
</style>