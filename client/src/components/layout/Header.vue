<template>
<nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item is-size-3 is-family-sans-serif has-text-weight-medium has-text-info" href="">
      <img src="../img/search icon.png" alt="Bulma: a modern CSS framework based on Flexbox" width="32" height="128">
      Food Listo
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
        <button class="button is-medium is-rounded" @click.prevent="opengitHub">
            <span class="icon is-medium">
            <i class="fab fa-github"></i>
            </span>
            <span>GitHub</span>
        </button>
          <a class="button is-primary is-medium is-outlined is-rounded" v-if="loggedIn" @click.prevent="logout">
            <strong>Sign Out</strong>
          </a>
           
        </div>
      </div>
    </div>
  </div>
  </nav>
</template>


<script>
export default {
    name : 'Header',
    props : ['loggedIn'],
    methods: {
         logout(){
             this.$emit('logout')
         },
         opengitHub(){
             window.open('https://github.com/laevenx')
         }
    },
}
</script>

<style>
</style>