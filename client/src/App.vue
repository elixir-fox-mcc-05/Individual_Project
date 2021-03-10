<template>
<div>
  <!-- FORM LOGIN -->
  <div v-if="!isLogin">
    <form>
      <div class="container">
        <div class="row">
          <div class="Absolute-Center is-Responsive">
            <div class="col-sm-12 col-md-10 col-md-offset-1">
              <form action="" id="loginForm">
                <h1>{{logReg}}</h1>
                <div class="form-group input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                  <input v-model="email" class="form-control" type="text" placeholder="email"/>          
                </div>
                <div class="form-group input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                  <input v-model="password" class="form-control" type="password" placeholder="password"/>     
                </div>
                <div class="form-group">
                  <button type="submit" @click.prevent="login">Submit</button>
                  <button type="button" class="cancelbtn" @click.prevent="cancle">Cancel</button>
                  <a v-if="!reg" href @click.prevent="register">Dint Have Account ?</a>
                  <a v-if="reg" href="">Have Account ?</a>
                  <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
                </div>
              </form>        
            </div>  
          </div>    
        </div>
      </div>
    </form>
  </div>
  <!-- FORM LOGIN -->
  <!-- TABEL API -->
  <div v-if="isLogin">
  <!-- NAVBAR -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li><a href v-on:click="logout">Logout</a></li>
    </ul>
  </div>
</nav>
  
  <!-- NAVBAR -->
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Date</th>
            <th scope="col">NewConfirmed</th>
            <th scope="col">NewDeaths</th>
            <th scope="col">NewRecovered</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(corona, id) in coronas" :key='id'>
                <td>{{corona.Country}}</td>
                <td>{{corona.Date}}</td>
                <td v-if="corona.NewConfirmed >= 40" style="background:crimson">{{corona.NewConfirmed}}</td>
                <td>{{corona.NewDeaths}}</td>
                <td>{{corona.NewRecovered}}</td>
            </tr>
        </tbody>
      </table>
  </div>
  <!-- TABEL API -->
</div>
</template>

<script>
import GoogleLogin from 'vue-google-login'
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      reg: false,
      logReg: 'login',
      regLog: 'register',
      isLogin: false,
      email:'',
      password:'',
      params: {
        client_id: "218707515829-d1ofmk2idnscp2va1cl23e2q5mpugcpf.apps.googleusercontent.com"
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      },
      coronas: []
    };
  },
  components: {
    GoogleLogin
  },
  methods: {
    fect () {
      axios.get('https://api.covid19api.com/summary')
      .then((result) => {
        this.coronas = result.data.Countries
      }).catch((err) => {
        console.log(err)
      });
    },
    login () {
      axios({
        method: 'POST',
        url: `http://localhost:3000/user/${this.logReg}`,
        data: {
          email : this.email,
          password: this.password
        }
      })
        .then((result) => {
          localStorage.setItem('access_token', result.data.access_token)
          this.isLogin = true
          this.fect()
        })
        .catch((err) => {
          console.log(err);
          this.loginMsg = 'Wrong email / password'
        })
      },
      logout () {
        localStorage.clear()
      },
      register () {
        this.reg = true,
        this.email= '',
        this.password= '',
        this.logReg= 'register',
        this.regLog= 'login',
        this.logMsg='Already Have Account ?'
      },
      onSuccess(googleUser) {
        let id_token = googleUser.getAuthResponse().id_token
        axios({
          method: 'POST',
          url: `http://localhost:3000/user/googleSign`,
          data: {
            id_token
          }
        })
        .then((data)=>{
        console.log(data);
        localStorage.setItem('access_token', data.data.access_token)
        this.isLogin = true
        this.fect ()
        })
      },
      onFailure() {}
  },
  created () {
    if (localStorage.access_token) {
      this.isLogin = true
      this.fect ()
    }
  }
}
</script>

<style scoped>
body{
  background: #00589F;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00589F', endColorstr='#0073CF', GradientType=0);
  background: -webkit-linear-gradient(to bottom, #00589F 50%, #0073CF) !important;
  background: -moz-linear-gradient(to bottom, #00589F 50%, #0073CF) !important;
  background: -ms-linear-gradient(to bottom, #00589F 50%, #0073CF) !important;
  background: -o-linear-gradient(to bottom, #00589F 50%, #0073CF) !important;
  background: linear-gradient(to bottom, #00589F 50%, #0073CF) !important;
  color: white;
}

div.well{
  height: 250px;
} 

.Absolute-Center {
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}

.Absolute-Center.is-Responsive {
  width: 50%; 
  height: 50%;
  min-width: 200px;
  max-width: 600px;
  padding: 40px;
}

#logo-container{
  margin: auto;
  margin-bottom: 10px;
  width:200px;
  height:30px;
  background-image:url('http://placehold.it/200x30/000000/ffffff/&text=BRAND+LOGO');
}
</style>