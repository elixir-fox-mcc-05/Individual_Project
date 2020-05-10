<template>
    <div>
        <b-modal id='registerModal'
            ref='registerModal'
            title="Register your account"
            hide-footer
            no-close-on-backdrop
            centered
            size="lg"
        >
            <h6 class="text-center text-danger" v-if="errorMessage">{{ errorMessage }} </h6>
            <form v-on:submit.prevent="register">
                <div class="modal-body">
                    <div class="form-label-group">
                        <label for="registerName">Name</label>
                        <input type="name" v-model="registerName" class="form-control" placeholder="Name" required>
                    </div><br>
                    <div class="form-label-group">
                        <label for="registerEmail">Email address</label>
                        <input type="email" v-model="registerEmail" class="form-control" placeholder="Email address" required>
                    </div><br>
                    <div class="form-label-group">
                        <label for="registerPassword">Password</label>
                        <input type="password" v-model="registerPassword" class="form-control" placeholder="Password" required>
                    </div><br>
                    <div class="form-label-group">
                        <label for="confirmRegisterPassword">Confirmation Password</label>
                        <input type="password" v-model="confirmRegisterPassword" class="form-control" placeholder="Password" required>
                    </div><br>
                    </div>
                        <div class="modal-footer border-top-0 d-flex justify-content-center">
                        <button type="submit" class="btn btn-success">Submit</button>
                    </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'RegisterModal',
    data() {
        return {
            registerName: '',
            registerEmail:'',
            registerPassword:'',
            confirmRegisterPassword:'',
            errorMessage: false
        }
    },
    methods : {
        register(){
            if(this.confirmRegisterPassword !== this.registerPassword){
               this.errorMessage = `invalid Confirmation Password`;
               this.confirmRegisterPassword = null;
            }
            else {
                axios.post('http://localhost:3000/users/register', {
                    'name': this.registerName,
                    'email': this.registerEmail,
                    'password': this.registerPassword
                })
                    .then(data => {
                        // console.log(data.data);
                        this.registerName= '',
                        this.registerEmail='',
                        this.registerPassword='',
                        this.confirmRegisterPassword=''
                        this.errorMessage = false
                        this.$refs.registerModal.hide()

                    })
                    .catch(err => {
                        this.errorMessage = err.response.data.errors[0].message;
                        this.registerEmail='',
                        this.registerPassword='',
                        this.confirmRegisterPassword=''
                    })
            }
        },
        show() {
            this.$refs.registerModal.show()
            this.registerName= '',
            this.registerEmail='',
            this.registerPassword='',
            this.confirmRegisterPassword=''
            this.errorMessage = false
        }
    }
}
</script>

<style>

</style>