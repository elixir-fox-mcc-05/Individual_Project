<template>
    <div class = "form-style">
        <div>
            Login Form
        </div>
        <div v-if="message" style="font-size : 15px !important; color: red;">
            {{message}}
        </div>
        <div>
            <form method="post">
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input v-model="email" type="email" class="form-control" placeholder="Enter email" id="email">
                </div>
                <div class="form-group">
                    <label for="pwd" style="color:green">Password:</label>
                    <input v-model="password" type="password" class="form-control" placeholder="Enter password" id="pwd">
                </div>
                <div style="display:flex; justify-content:space-between; align-items:flex-end;">
                    <div>
                        <button @click.prevent = "login" type="submit" class="btn btn-primary" style="background-color: inherit;"> Submit</button>
                        <button @click.prevent= "hideLogin" class="btn btn-primary" style="background-color: inherit;">Close</button>
                    </div>
                    <div style="display : flex; flex-wrap:wrap; height:39px; padding-left:5px;">
                        <div id="google-signin-button" class="btn btn-primary" style="height:inherit; background-color: inherit;"></div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name : "login",
    data(){
        return {
            email : "",
            password: ""
        }
    },
    props : ["message"],
    methods : {
        login(){
            let payload = {
                email : this.email,
                password : this.password
            }
            this.$emit("login", payload)
                this.email = ''
                this.password = ''
        },
        hideLogin () {
            this.$emit('hideLogin');
        },
        onSignIn(data) {
            this.$emit("onSignIn", data)
        }
    },
    mounted() {
        gapi.signin2.render('google-signin-button', {
            onsuccess: this.onSignIn
        });
    }
}
</script>
<style scoped>
</style>