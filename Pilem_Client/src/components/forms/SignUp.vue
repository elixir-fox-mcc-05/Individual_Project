<template>
  <div
    class="modal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenteredLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header bg-secondary">
          <h5 class="modal-title" id="exampleModalCenteredLabel">Sign Up</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="signup">
            <div class="form-group">
              <label class="text-dark">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="your name here"
                v-model="signUpName"
              />
            </div>
            <div class="form-group">
              <label class="text-dark">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="your email here"
                v-model="signUpEmail"
              />
            </div>
            <div class="form-group">
              <label class="text-dark">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="your password here"
                v-model="signUpPassword"
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <input type="submit" class="btn btn-primary" value="Sign Me Up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  props: ["serverUrl"],
  data() {
    return {
      signUpName: "",
      signUpEmail: "",
      signUpPassword: "",
      signUpSuccess: false
    };
  },
  methods: {
    signup() {
      axios({
        method: "post",
        url: this.serverUrl + "/signup",
        data: {
          name: this.signUpName,
          email: this.signUpEmail,
          password: this.signUpPassword
        }
      })
        .then(data => {
          console.log(data.data);
          this.signUpSuccess = true;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>