<template>
    <div class="container">
        <form id="register-form" @submit.prevent="register" v-if="!registered">
            <h3 class="mt-3">Register</h3>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" v-model="registrationName" placeholder="your name">
            </div>
            <div class="form-group">
                <label for="name">Username</label>
                <input type="text" class="form-control" v-model="registrationUsername" placeholder="your username">
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" v-model="registrationEmail" placeholder="your email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" v-model="registrationPassword" placeholder="your password">
            </div>
            <button type="submit" class="btn btn-primary btn-block">Register</button>
            <h6 class="text-center mt-1">Or</h6>
            <g-signin-button
                :params="googleSignInParams"
                @success="onSignInSuccess"
                @error="onSignInError">
                Sign in with Google
            </g-signin-button> 
            <Error
                v-if="errorDetected"
                :alertMessage="alertMessage"
            >
            </Error>
        </form>
    </div>
</template>

<script>
import GSignInButton from 'vue-google-signin-button';
import Error from './Error';
import axios from 'axios';

export default {
    name: "Register",
    components: {
        GSignInButton, Error
    },
    props: ['registered'],
    data() {
        return {
            registrationName: '',
            registrationUsername: '',
            registrationEmail: '',
            registrationPassword: '',
            errorDetected: false,
            alertMessage: '',
            googleSignInParams: {
                client_id: '918429363028-t708n868tkcf9v957b1kn8ql9gr3n0uq.apps.googleusercontent.com'
            }
        }

    },
    methods: {
        register() {
            console.log('clicked');
            axios.post('http://localhost:4000/users/register', {
                name: this.registrationName,
                username: this.registrationUsername,
                email: this.registrationEmail,
                password: this.registrationPassword
            })
                .then(res => {
                    this.registrationName = '';
                    this.registrationUsername = '';
                    this.registrationEmail = '';
                    this.registrationPassword = '';
                    this.errorDetected = false;
                    this.alertMessage = '';
                    this.$emit('showLogin');
                })
                .catch(err => {
                    this.errorDetected = true;
                    if(Array.isArray(err.response.data.error)) {
                        let errors = '';
                        err.response.data.error.forEach(e =>  {
                            errors += `${e}, `
                        })
                        this.alertMessage = errors.substring(0, errors.length-2);
                    } else {
                        this.alertMessage = err.response.data.error;
                    }
                })
        },
        onSignInSuccess(googleUser){
            var id_token = googleUser.getAuthResponse().id_token;
            axios.post('http://localhost:4000/users/google_login', null, {
                headers: {
                    google_token: id_token
                }
            })
                .then(res => {
                    localStorage.setItem('access_token', res.data.access_token);
                    this.$emit('login');
                    this.errorDetected = false;
                    this.alertMessage = '';
                })
                .catch(err => {
                    this.errorDetected = true;
                    if(Array.isArray(err.response.data.error)) {
                        let errors = '';
                        err.response.data.error.forEach(e =>  {
                            errors += `${e}, `
                        })
                        this.alertMessage = errors.substring(0, errors.length-2);
                    } else {
                        this.alertMessage = err.response.data.error;
                    }
                })
        },
        onSignInError (error) {
            console.log(error);
        }
    },
    watch: {
        registered(val) {
            if(!val) {
                this.registrationName = '';
                this.registrationUsername = '';
                this.registrationEmail = '';
                this.registrationPassword = '';
                this.errorDetected = false;
                this.alertMessage = '';
            }
        }
    }
}
</script>

<style>
    .g-signin-button {
        padding: 4px 8px;
        border-radius: 3px;
        background-color: #3c82f7;
        color: #fff;
        box-shadow: 0 3px 0 #0f69ff;
        text-align: center;
    }

    .g-signin-button:hover {
        background-color: #0f69ff;
        cursor: pointer;
    }
</style>

<style scoped>
    .container {
        width: 40%;
    }
</style>