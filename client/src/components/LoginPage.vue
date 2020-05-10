<template>
  <div class="login-register d-flex align-items-center justify-content-center">
    <div class="border p-5 rounded administration">
      <h2 class="text-center">Login</h2>
      <div class="text-danger" id="errorMessage" v-if="errorMessage">
        <span>{{ errorMessage }}</span>
      </div>
      <div class="text-success" id="successMessage" v-if="successMessage">
        <span>{{ successMessage }}</span>
      </div>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
      <p class="mt-3">Or Login Using</p>
      <GoogleLogin
        :params="params"
        :renderParams="renderParams"
        :onSuccess="onSignIn"
      ></GoogleLogin>
      <p class="mt-2">
        Dont have an account?
        <a href="" @click.prevent="showRegister">Register</a>
      </p>
    </div>
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
export default {
  components: {
    GoogleLogin
  },
  props: {
    errorMessage: String,
    successMessage: String
  },
  data() {
    return {
      email: '',
      password: '',
      params: {
        client_id:
          '933063756617-e8kgkdk30jqda15abpsqaj1od0d5cbbh.apps.googleusercontent.com'
      },
      renderParams: {
        width: 75,
        height: 25,
        longtitle: false
      }
    };
  },
  methods: {
    login() {
      let userData = {
        email: this.email,
        password: this.password
      };
      this.$emit('login', userData);
    },
    onSignIn(googleUser) {
      this.$emit('onSignIn', googleUser);
    },
    showRegister() {
      this.$emit('showRegister');
    }
  }
};
</script>

<style></style>
