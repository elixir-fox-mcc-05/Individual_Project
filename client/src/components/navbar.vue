<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light" style="background-color:white;">
      <div class="navbar-brand"><img src="https://sindarfrom.files.wordpress.com/2013/11/myanimelist.jpg" style="height: 30px"></div>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation"></button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active" v-if="loggedIn">
                  <a class="nav-link" @click.prevent="changePage('home')">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item" v-if="!loggedIn">
                  <a class="nav-link" @click.prevent="showLogin">Login</a>
                    <modal name="login-Form">
                        <login @hideLogin="hideLogin"
                                :message="message"
                                @login="login"
                                @onSignIn="onSignIn"
                                ></login>
                    </modal>
              </li>
              <li class="nav-item" v-if="loggedIn">
                  <a class="nav-link" @click.prevent="logout">Logout</a>
              </li>
              <li class="nav-item" v-if="!loggedIn">
                  <a class="nav-link" @click.prevent="showRegister">register</a>
                    <modal name="register-Form">
                        <register @hideRegister="hideRegister"
                                :message="message"
                                :messageSucces="messageSucces"
                                @register="register"></register>
                    </modal>
              </li>
              <li class="nav-item dropdown" v-if="loggedIn">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Anime</a>
                  <div class="dropdown-menu" aria-labelledby="dropdownId">
                      <a class="dropdown-item" @click.prevent="changePage('userHome')">My Anime List</a>
                      <a class="dropdown-item" @click.prevent="changePage('genre')">Genre List</a>
                  </div>
              </li>
          </ul>
          <form class="form-inline my-2 my-lg-0" v-if="loggedIn">
              <input v-model="search" class="form-control mr-sm-2" type="text" placeholder="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" @click.prevent="searchAnime">Search</button>
          </form>
      </div>
  </nav>
</template>

<script>
import login from "./login";
import register from "./register";
export default {
    name : "navbar",
    props : ["loggedIn", "message", "messageSucces"],
    components : {
        login, register
    },
    data(){
        return {
            search : ""
        }
    },
    methods : {
        showLogin () {
            this.$emit("showLogin")
        },
        hideLogin (data) {
            this.$emit("hideLogin");
        },
        login(data){
            this.$emit("login", data)
        },
        showRegister(){
            this.$emit("showRegister")
        },
        hideRegister(){
            this.$emit("hideRegister")
        },
        register(data){
            this.$emit("register", data)
        },
        logout(){
            this.$emit("logout")
        },
        searchAnime(){
            this.$emit("searchAnime", searchData)
            this.search = ""
        },
        changePage(data){
            this.$emit("changePage", data)
        },
        onSignIn(data){
            this.$emit("onSignIn", data)
        }

    }
}
</script>

<style scoped>

</style>