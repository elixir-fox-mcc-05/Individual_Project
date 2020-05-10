<template>
    <div>
        <div class="container">
        <div class="row">
            <div class="col-lg-9 col-lg-7 col-lg-5 mx-auto text-center">
            <div class="card card-signin my-5">
                <div class="card-body">
                <h5 class="card-title text-center font-weight-bold h3">LOGIN</h5>
                <hr class="my-2">
                <h6 class="text-center text-danger" v-if="errorMessage">{{ errorMessage }} </h6>
                <form class="form-signin" v-on:submit.prevent="login">
                    <div class="form-label-group">
                        <label for="inputEmail">Email address</label>
                        <input type="email" v-model="loginEmail" class="form-control" placeholder="Email address" required autofocus>
                    </div><br>
                    <div class="form-label-group">
                        <label for="inputPassword">Password</label>
                        <input type="password" v-model="loginPassword" class="form-control" placeholder="Password" required>
                    </div><br>
                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Login</button>
                </form>
                <hr class="my-4">
                <p>Don't have account? Please Register Here</p>
                <!-- register -->
                <button class="btn btn-warning btn-lg btn-block text-uppercase" v-on:click="showModal()">
                    Register
                </button>
                <RegisterModal ref="registerModalComponent"></RegisterModal>
                <!-- register -->
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import RegisterModal from './RegisterModal'
import axios from 'axios'
export default {
    name: 'LoginPage',
    components: {
        RegisterModal
    },
    data() {
      return {
        loginEmail: '',
        loginPassword: '',
        errorMessage: false

      }
    },
    methods: {
        login() {
            axios.post('http://localhost:3000/users/login', {
                'email': this.loginEmail,
                'password': this.loginPassword
            })
                .then(data => {
                    // console.log(data.data);
                    this.loginEmail = '';
                    this.loginPassword = '';
                    this.errorMessage = false,
                    this.$emit('toMainPageFromLoginPage');
                    localStorage.setItem('token', data.data.token)
                    localStorage.setItem('name', data.data.name)
                })
                .catch(err => {
                    this.errorMessage = err.response.data.errors[0].message;
                    this.loginEmail = '';
                    this.loginPassword = '';
                    // console.log(err.response.data);
                })
        },
        showModal() {
            this.$refs.registerModalComponent.show()
        }
    }
}
</script>

<style>

</style>