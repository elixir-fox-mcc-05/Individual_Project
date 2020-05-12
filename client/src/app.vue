<template>
  <div>
      <landing 
      v-if="displayPage=='landing'"
      @confirmLogin="confirmLogin"
      ></landing>
      <div v-if="displayPage=='dashboard'">
          <dashboard
            @getSongs="getSongs"
            :songs="songs"
          ></dashboard>
      </div>
  </div>
</template>

<script>
import landing from './componets/landing/landing'
import dashboard from './componets/dashboard/dashboard'
import axios from 'axios'
export default {
    name : 'app',
    components : {
        landing,
        dashboard
    },
    data() {
        return {
            displayPage : 'landing',
            songs : []
        }
    },
    methods : {
        confirmLogin() {
            this.displayPage = 'dashboard'
            this.getSongs();
        },
        confirmLogut() {
            this.displayPage = 'login'
        },
        getSongs(){
            console.log('masuk auto fetch')
            axios({
                method : 'get',
                url : 'https://theaudiodb.com/api/v1/json/5d656564694f534d656564/mostloved.php?format=track&format=track'
            })
            .then(result=>{
                this.songs = result.data.loved
                console.log(this.songs)
            })
            .catch(err=>{
                console.log(err)
            })
        },
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