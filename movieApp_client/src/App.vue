<template>
  <div id="app">
    <loginPage
      v-if="currentPage === 'loginPage'"
      @changePage="changeCurrentPage"
    ></loginPage>
    <dashboard
      v-else-if="currentPage === 'dashboard'"
      @changePage="changeCurrentPage"
    ></dashboard>

  </div>
</template>

<script>
import loginPage from "../src/views/loginPage.vue"
import dashboard from "../src/views/dashboard.vue"

export default {
  name:'app',
  data() {
    return {
      message: 'Hello world!!!',
      currentPage: 'loginPage'
    };
  },
  methods:{
      setSelectedTaskId( selectedTaskId ){
      this.selectedTaskId = selectedTaskId
    },
    changeCurrentPage(page){
      this.currentPage = page
    },
    registerSuccessful(){
        this.successMessage = "Register successful!"
        setTimeout(() => { // pakai arrow function, supaya this tidak mengacu ke object yang salah
            this.successMessage = null
        }, 3000)
    }
  },
  components: {
    loginPage,
    dashboard
  },
  created(){
    if(localStorage.access_token){
      this.changeCurrentPage('dashboard')
    }
  }
};
</script>

<style scoped>
</style>