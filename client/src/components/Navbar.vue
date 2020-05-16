<template>
 <div class="Navbar">
  <nav class="navbar navbar-expand-md navbar-dark bg-dark justify-content-between fixed-top">
    <a class="navbar-brand" href="#" @click.prevent="homePage">The ElixirPost</a>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="homePage">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="covidPage">Covid-19<span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
  <div class="nav-content row">
   <button class="btn btn-danger" @click.prevent="logout">Logout</button>
  </div>
</nav>
 </div>
</template>

<script>
 export default {
  name: 'Navbar',
  methods: {
    covidPage () {
      this.$emit('covidPage')
    },
    homePage () {
      this.$emit('homePage')
    },
    logout () {
      this.$emit('logout')
    }
  }
 }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap');

.navbar-brand{
  font-family: 'Berkshire Swash', cursive;;
}

.nav-content{
  margin-right: 5px;
}

.form{
  margin-right: 10px;
}
.input-group-text{
  margin-right: 5px;
}
</style>