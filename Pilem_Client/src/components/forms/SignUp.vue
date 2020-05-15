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
          <div
            v-if="signUpSuccess"
            class="alert alert-success"
            role="alert"
          >{{ signUpSuccessMessage }}</div>
          <div
            v-if="signUpFailed"
            class="alert alert-warning"
            role="alert"
          >{{ signUpFailedMessage }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "signUp",
  props: ["serverUrl"],
  data() {
    return {
      signUpName: "",
      signUpEmail: "",
      signUpPassword: "",
      signUpSuccess: false,
      signUpSuccessMessage: "",
      signUpFailed: false,
      signUpFailedMessage: ""
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
          this.signUpSuccess = true;
          this.signUpFailed = false;
          this.signUpSuccessMessage = `Nice ${data.data.CreatedUser.name}, Sign Up success..! your email : ${data.data.CreatedUser.email}"`;
          this.signUpFailedMessage = "";
          this.signUpName = "";
          this.signUpEmail = "";
          this.signUpPassword = "";
        })
        .catch(err => {
          this.signUpSuccess = false;
          this.signUpFailed = true;
          this.signUpFailedMessage = "";
          let manyError = Array.isArray(err.response.data.message);
          if (manyError) {
            for (let i = 0; i < err.response.data.message.length; i++) {
              this.signUpFailedMessage +=
                "!-- " + err.response.data.message[i]["message"] + " ";
            }
          } else {
            this.signUpFailedMessage += "!-- " + err.response.data.message;
          }
        });
    }
  }
};
</script>

<style>
</style>