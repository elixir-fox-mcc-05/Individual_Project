<template>
  <div id="landingBox">
      <login
        @confirmLogin="confirmLogin"
        @signupClick="signupClick"
        v-if="displayPage=='login'"
      ></login>
      <register
        v-if="displayPage=='register'"
      ></register>
  </div>
</template>

<script>
import login from './login'
import register from './register'
export default {
    name : 'landing',
    components : {
        login,
        register
    },
    data() {
        return {
            displayPage : 'login',
        }
    },
    methods : {
        confirmLogin() {
            this.$emit('confirmLogin')
        },
        signupClick() {
            this.displayPage = 'register'
        }
    }
}
</script>

<style>

</style>