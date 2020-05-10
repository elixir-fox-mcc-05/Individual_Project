<template>
  <button v-google-signin-button="clientId" class="google-signin-button btn btn-primary"> Continue with Google</button>
</template>
 
<script>
import GoogleSignInButton from 'vue-google-signin-button-directive'
export default {
  name: 'googleButton',  
  directives: {
    GoogleSignInButton
  },
  data: () => ({
    clientId: '921987206293-3kdoenmuckep3a359g5l6lhram4fhlj0.apps.googleusercontent.com'
  }),
  methods: {
    OnGoogleAuthSuccess (idToken) { // backend
      axios({
          method: 'POST',
          url: 'http://localhost:3000/google-signin',
          headers: {
              access_token: idToken
          }
      })
      .then(({data}) => {
          localStorage.setItem('access_token', data.access_token)
          this.$emit('change_page','dashboard')
      })
      .catch(err => {
          console.log(err)
      })
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  }
}
</script>