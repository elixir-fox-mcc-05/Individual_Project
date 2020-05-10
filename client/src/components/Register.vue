<template>
  <div v-show="currentPage === 'register'" @submit.prevent="register"  class="form-container">
        <h2 class="text-center mt-4">Register</h2>
        <form action="" class="mt-4">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" name="email" placeholder="Your Email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="Your Password" class="form-control" v-model="password">
                <div v-html="feedback"></div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>

export default {
    name: 'register-form',
    data() {
        return {
            name: '',
            email: '',
            organization: '',
            password: '',
            feedback: ``,
        }
    },
    props: ['currentPage'],
    methods: {
        // Melakukan register user ke server
        register() {
            const axios = require('axios');
            axios.post('http://localhost:3000/users/register', {
                email: this.email,
                password: this.password,
            })
            .then(user => {
                const { data } = user
                this.$emit('changeToLogin', 'login');
                const Swal = require('sweetalert2');
                Swal.fire(
                    'Good job!',
                    'Succsessfully Register!',
                    'success'
                )
                this.email = '';
                this.password = '';
            })
            .catch(err => {
                err = err.response
                let { data } = err;
                let error = data.errors;
                if (error.length > 0) {
                    for (let i = 0; i < error.length; i++) {
                        this.feedback = `<p>${error[i].message}</p>`
                        console.log(error[i].message);
                    }
                } else {
                    this.feedback = `<p>${error.message}</p>`
                    console.log(error.message)
                }                   
            })
        }
    }
}
</script>

<style>
</style>