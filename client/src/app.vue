<template>
  <div>
      <landing 
      v-if="displayPage=='landing'"
      @confirmLogin="confirmLogin"
      ></landing>
      <div v-if="displayPage=='dashboard'">
          <dashboard></dashboard>
      </div>
  </div>
</template>

<script>
import landing from './componets/landing/landing'
import dashboard from './componets/dashboard/dashboard'
export default {
    name : 'app',
    components : {
        landing,
        dashboard
    },
    data() {
        return {
            displayPage : 'landing'
        }
    },
    methods : {
        confirmLogin() {
            this.displayPage = 'dashboard'
        },
        confirmLogut() {
            this.displayPage = 'login'
        }
    },
    created() {
        let token = localStorage.getItem('token')
        if(token) {
            this.confirmLogin()
        }
    }
}
</script>

<style>

</style>