<template>
<section class="hero is-success is-fullheight" v-if="loggedIn == false">
        <div class="hero-body box">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-black">Login</h3>
                    <hr class="login-hr">
                    <p class="subtitle has-text-black">Please login to proceed</p>
                    <div class="box">
                        <figure class="avatar">
                            <img src="../img/loginavatar.png">
                        </figure>
                        <hr class="login-hr">
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input v-model="email" class="input is-large" type="email" placeholder="Your Email" autofocus="">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input v-model="password" class="input is-large" type="password" placeholder="Your Password">
                                </div>
                            </div>
                            <div class="field">
                                
                            </div>
                            <button @click.prevent="login" class="button is-block is-info is-large is-fullwidth">Login <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                            <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
                        </form>
                    </div>
                  
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import GoogleLogin from 'vue-google-login';
export default {
    name : "Login",
    components: {
        GoogleLogin
    },
    props : ['params','renderParams','email','password','loggedIn'],
    methods : {
        login(){
            let data = {
                email : this.email,
                password : this.password
            }
            this.$emit('login',data)
        },
        onSuccess(googleUser){
            // console.log(googleUser);
            this.$emit('onSuccess',googleUser)
        },
        onFailure(googleUser){
            this.$emit('onFailure')
        }
    }
}
</script>

<style>
</style>