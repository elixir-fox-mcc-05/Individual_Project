<template>
  <div class="Loginpage">
    <div class="title">
      <h2>TheElixirPost</h2>
    </div>
    <div class="login">
      <div class="row justify-content-md-center">
        <div class="col-md-4">  
          <form class="form-signin bg-dark" @keyup.enter="login" >
            <h1 class="h3 mb-3 font-weight-normal">Please Login</h1>
            <div class="form-group">
              <label for="inputEmail" class="sr-only">Email address</label>
              <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="user.email" required="" autofocus="">
            </div>
            <div class="form-group">
              <label for="inputEmail" class="sr-only">Email address</label>
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="user.password" required="" autofocus="">
            </div>
            <div class="form-group">
              <input type="button" class="btn btn-primary" value="LOGIN" @click.prevent="login">
            </div>
            <div class="social">
          <GoogleLogin class="google" :params="googleSignInParams" :onSuccess="onSuccess" :onFailure="onFailure"><img src="https://cdn.iconscout.com/icon/free/png-512/google-272-434730.png"></GoogleLogin>
        </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import GoogleLogin from 'vue-google-login'
export default {
  name: 'Loginpage',
  components: {
    GoogleLogin
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      googleSignInParams: {
        client_id: '94289824709-9elnoiuecs7tfdilbrmos1gus49umpr6.apps.googleusercontent.com'
      }
    }
  },
  methods : {
    login () {
      axios({
        method:'POST',
        url:'https://elixir-fox-api.herokuapp.com/login',
        data: {
          email: this.user.email,
          password: this.user.password
        }
      })
      .then(result=>{
        localStorage.setItem('access_token',result.data.access_token)
        this.$emit('login')
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'Logged in successfully'
        })
      })
    },
    onSuccess (googleUser) {
      const id_token = googleUser.getAuthResponse().id_token
      axios({
        method: 'POST',
        url: 'https://elixir-fox-api.herokuapp.com/googleLogin',
        data: {
          id_token
        }
      })
      .then((data)=>{
        console.log(data);
        localStorage.setItem('access_token', data.data.access_token)
        this.$emit('login')
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'Logged in successfully'
        })
      })
      .catch((err)=>{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'error',
          title: err
        })
      })
    },
    onFailure (error) {
            console.log('Error :', error)
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap');

.title{
  font-family: 'Berkshire Swash', cursive;;
}
.login{
  margin-top: 50px;
  width: 100%;
  color: white;
}

::placeholder{
  text-align: center;
}

input[type="email"],
input[type="password"]{
  text-align: center;
}

#inputEmail,#inputPassword{
  border-radius: 1rem;
}

.btn{
  border-radius: 1rem;
}

.form-signin{
  padding: 10px;
  border-radius: 20px;
  box-shadow: 10px 10px 25px -15px rgba(0,0,0,0.75);
  border: solid 1px rgba(0, 0, 0, 0.2);
}

.social{
  display: flex;
  justify-content: center;
}

.social img{
  height: 30px;
}

.google{
  border-radius: 50px;
  height: 50px;
  width: 50px;
  background: transparent;
}
</style>
