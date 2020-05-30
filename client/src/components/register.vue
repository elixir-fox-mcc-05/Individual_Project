<template>
    <div>
        <div class = "form-style" style="font-size : 22px">
            <div>
                Register Form
            </div>
            <div v-if="message" style="font-size : 15px !important; color: red;">
                {{message}}
            </div>
            <div v-if="messageSucces" style="font-size : 15px !important; color: red;">
                {{messageSucces}}
            </div>
            <div style="font-size : 20px !important;">
                <form action="" style="display:flex; flex-direction:column; justify-content:space-between">
                    <div style="display:flex; flex-direction:row">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input v-model="name" type="text" class="form-control" placeholder="Enter Your Name" id="name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email address:</label>
                            <input v-model="email" type="email" class="form-control" placeholder="Enter email" id="email">
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:row">
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input v-model="password" type="password" class="form-control" placeholder="Enter password" id="pwd">
                        </div>
                        <div class="form-group">
                            <label for="confirm-pwd">Confirm Password:</label>
                            <input v-model="confirmPassword" type="password" class="form-control" placeholder="Enter password" id="confirm-pwd">
                        </div>
                    </div>
                    <div>
                        <button @click.prevent ="register" type="submit" class="btn btn-primary btn-xs btn-block" style="background-color: inherit;">Submit</button>
                        <button @click.prevent="hideRegister" class="btn btn-primary btn-xs btn-block" style="background-color: inherit;">Close</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "register",
    props : ["message", "messageSucces"],
    data (){
        return {
            name : "",
            password : "",
            confirmPassword : "",
            email : "",
        }
    },
    methods : {
        hideRegister(){
            this.$emit("hideRegister")
        },
        register (){
            let payload = {
                email : this.email,
                password : this.password,
                confirmPassword : this.confirmPassword,
                name : this.name
            }
            this.$emit("register", payload)
            this.email = ""
            this.password = ""
            this.confirmPassword = ""
            this.name = ""
        }
    }
}
</script>

<style>

</style>