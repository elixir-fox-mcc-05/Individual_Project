<template>
    <div class="container">
        <form id="login-form" @submit.prevent="login" v-if="registered">
            <h3 class="mt-3">Login</h3>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" v-model="loginEmail" placeholder="your email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" v-model="loginPassword" placeholder="your password">
            </div>
            <button type="submit" class="btn btn-primary btn-block">Login</button>
            <Error
                v-if="errorDetected"
                :alertMessage="alertMessage"
            >
            </Error>
        </form>
    </div>
</template>

<script>
import Error from './Error';
import axios from 'axios';

export default {
    name: 'Login',
    components: {
        Error
    },
    props: ['registered'],
    data() {
        return {
            loginEmail: '',
            loginPassword: '',
            errorDetected: false,
            alertMessage: ''
        }
    },
    methods: {
        login() {
            axios.post('http://localhost:4000/users/login', {
                email: this.loginEmail,
                password: this.loginPassword
            })
            .then(res => {
                this.loginEmail = '';
                this.loginPassword = '';
                this.errorDetected = false;
                this.alertMessage = '';
                localStorage.setItem('access_token', res.data.access_token);
                this.$emit('loginSuccess');
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
        }
    }
}
</script>

<style>

</style>

<style scoped>
    .container {
        width: 40%;
    }
</style>