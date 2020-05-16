<template>
  <div id="app">
    <Navbar v-if="isLogin" @homePage="showHomepage" @covidPage="showCovidPage" @logout="logout" />
    <div class="content">
    <News v-if="isLogin && !covidPage" />
    <Loginpage v-if="!isLogin" @login="login" />
    <div class="covid">
    <Covidpage v-if="covidPage" />
    </div>
    </div>
    <div class="footer bg-dark">
    <p>POWERED BY <a href="https://getbootstrap.com/docs/4.0">BOOTSTRAP 4.0</a> | <a href="https://newsapi.org/">NEWS API</a> | <a href="https://covid19.mathdro.id/">MATHDROID</a></p>
   </div>
  </div>
</template>

<script>
import Loginpage from './components/Loginpage.vue'
import Navbar from './components/Navbar.vue'
import Covidpage from './components/Covidpage.vue'
import News from './components/News.vue'
import Swal from 'sweetalert2'
export default {
  name: 'App',
  components: {
    Loginpage,
    Navbar,
    News,
    Covidpage
  },
  data () {
    return {
      isLogin: false,
      covidPage: false
    }
  },
  methods: {
    showCovidPage () {
      this.covidPage = true
    },
    showHomepage () {
      this.covidPage = false
    },
    login () {
      this.isLogin = true
    },
    logout () {
      this.isLogin = false
      localStorage.clear()
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
          title: 'Logged out successfully'
        })
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function() {
        console.log('User signed out.');
        });
    }
  },
  created () {
    if(localStorage.access_token) {
      this.isLogin= true
    } 
  }
}
</script>

<style>
html{
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: inherit;
}

::-webkit-scrollbar {
    display: none;
}
body{
  background: rgb(255, 255, 255);
  width: 100%;
  overflow-x: hidden;
}
.content{
  margin-top: 75px;
}

.footer {
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  height: 40px;
}

.footer p{
  margin-top: 12px;
  font-size: 12px;
}

.footer a{
  color: white;
}

.covid{
  margin-top: -19px;
}

</style>
