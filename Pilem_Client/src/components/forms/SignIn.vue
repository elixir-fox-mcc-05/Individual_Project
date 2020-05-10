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
      signInSuccess: false
    };
  },
  methods: {
    auth() {
      this.$emit("auth")
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
          this.signInSuccess = true;
          localStorage.setItem("access_token", data.data.access_token)
          $("#signin").modal("hide");
          this.auth()
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