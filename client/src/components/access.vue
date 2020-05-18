<template>
    <div>
      <button @click="login" class="btn btn-secondary">Sign In</button>
      <button @click="register" class="btn btn-primary">Register</button>
      <googleButton @change_page="change_page" ></googleButton>
    </div>
</template>

<script>
import googleButton from './googleButton'

export default {
    name: 'access',
    props: ['email', 'password'],
    components: {
      googleButton
    },
    methods: {
      change_page(page) { this.$emit('change_page', page) },
      login() { 
        axios({
          method: 'POST',
          url: 'http://localhost:3000/login',
          data: { email: this.email, password: this.password }
        })
        .then(({data}) => {
          console.log(this.email, 'logged in')
          localStorage.setItem('access_token', data.access_token)
          this.change_page('dashboard')
        })
        .catch(err => console.log(err))
      },
      register() {
        axios({
          method: 'POST',
          url: 'http://localhost:3000/register',
          data: { email: this.email, password: this.password }
        })
        .then(res => { 
          console.log(this.email, 'successfully registered') 
          this.change_page('home')
        })
        .catch(err => console.log(err))
      }
    }
}
</script>

<style>
* {
  margin: auto;
  text-align: center;
}
</style>