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
          <h5 class="modal-title" id="exampleModalCenteredLabel">Sign In</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="signin">
            <div class="form-group">
              <label class="text-dark">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="your email here"
                v-model="signInEmail"
              />
            </div>
            <div class="form-group">
              <label class="text-dark">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="your password here"
                v-model="signInPassword"
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <input type="submit" class="btn btn-primary" value="Sign Me In" />
            </div>
          </form>
          <div
            v-if="signInFailed"
            class="alert alert-warning"
            role="alert"
          >{{ signInFailedMessage }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignIn",
  props: ["serverUrl"],
  data() {
    return {
      signInEmail: "",
      signInPassword: "",
      signInFailed: false,
      signInFailedMessage: ""
    };
  },
  methods: {
    auth() {
      this.$emit("auth");
    },
    signin() {
      axios({
        method: "post",
        url: this.serverUrl + "/signin",
        data: {
          email: this.signInEmail,
          password: this.signInPassword
        }
      })
        .then(data => {
          this.signInFailed = false;
          this.signInFailedMessage = "";
          this.signInEmail = "";
          this.signInPassword = "";
          localStorage.setItem("access_token", data.data.access_token);
          $("#signin").modal("hide");
          this.auth();
        })
        .catch(err => {
          this.signInFailed = true;
          this.signInFailedMessage = "";
          this.signInEmail = "";
          this.signInPassword = "";
          let manyError = Array.isArray(err.response.data.message);
          if (manyError) {
            for (let i = 0; i < err.response.data.message.length; i++) {
              this.signInFailedMessage +=
                "!-- " + err.response.data.message[i]["message"] + " ";
            }
          } else {
            this.signInFailedMessage += "!-- " + err.response.data.message;
          }
        });
    }
  }
};
</script>

<style>
</style>