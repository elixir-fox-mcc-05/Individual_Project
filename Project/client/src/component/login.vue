<template>
  <div>
    <div v-if="logged_in ">
        <div class="container">
            <p>Movie App</p>
            <div>
                <p style="color: Redwine;"><b>{{errMsg}}</b></p>
            </div>
            <div id="loginPage" class="border border-dark d-flex justify-content-around align-title-center">
                <div id="registerForm">
                    <h5>Register</h5>
                    <form action="" v-on:submit.prevent="register">
                        <label for="">Email</label><br>
                        <input type="email" placeholder="Email" id="emailRegis" v-model="emailRegis"><br>
                        <label for="">Password</label><br>
                        <input type="password" placeholder="Password" id="passwordRegis" v-model="passwordRegis"><br>
                        <label for="">Organisation</label><br>
                        <input type="text" name="" id="" placeholder="Organisation"><br>
                        <input type="submit" value="Register">
                    </form>
                </div>
                <div id="loginForm">
                    <h5>Login</h5>
                    <form action="" v-on:submit.prevent="login">
                        <label for="">Email</label><br>
                        <input type="email" placeholder="Email" id="emailLogin" v-model="emailLogin"><br>
                        <label for="">Password</label><br>
                        <input type="password" placeholder="Password" id="passwordLogin" v-model="passwordLogin"><br>
                        <input type="submit" value="Login">
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'login',
    props : ['logged_in', 'errMsg'],
    data() {
        return {
            emailRegis : '',
            passwordRegis : '',
            emailLogin : '',
            passwordLogin : ''
        }
    },
    methods : {
        register(){
            const data = {
                email : this.emailRegis,
                password : this.passwordRegis
            }
            this.$emit('register', data)
            this.emailRegis = ''
            this.passwordRegis = ''
        },
        login() {
            const data = {
                email : this.emailLogin,
                password : this.passwordLogin
            }
            this.$emit('login', data)
            this.emailLogin = ''
            this.passwordLogin = ''

        }
    }

}
</script>

<style>

</style>