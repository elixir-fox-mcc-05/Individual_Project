<template>
  <div>
      <landing @showmain="loginsucces" v-if="!islogin"></landing>
      <main-page :datameals="mealsData" v-else @logout="logout"></main-page>
  </div>
</template>

<script>
import axios from 'axios'
import Landing from './view/landing'
import MainPage from './view/main'
import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'
export default {
    name:"G-Meal",
    components:{
        Landing,
        MainPage
    },
    data () {
        return{
            islogin: false,
            mealsData:[]
        }
    },
    methods:{
        loginsucces(){       
            this.islogin = true
             this.fetchMeal()
        },       
        logout(){
            this.islogin = false
            localStorage.clear()
        },
        fetchMeal() {
            axios({
				method:"GET",
				url:"http://localhost:3000/"
			})
			.then(result=>{		                
                this.mealsData = {result:result.data.data.meals[0],
            videoId: getIdFromURL(result.data.data.meals[0].strYoutube)}
            console.log('****************',this.mealsData)
			})
			.catch(err=>{
				Vue.toasted.global.my_app_error({
                    message : 'random meals fails'                   
                });
				
			})
        }
    },
    created () {
        if(localStorage.token){
            this.islogin = true,
            this.fetchMeal()
            
        }else {
            this.islogin = false
        }
        this.$toasted.register('my_app_error',
        (payload) => {
            return payload.message
        }, { duration: 1500, theme: 'bubble', type: 'error' }
        )

        this.$toasted.register('my_app_success',
        (payload) => {
            return payload.message
        }, { duration: 1500, theme: 'bubble', type: 'success' }
        )

        this.$toasted.register('my_app_info',
        (payload) => {
            return payload.message
        }, { duration: 1500, theme: 'bubble', type: 'info' }
        )
    }

}
</script>

<style>

</style>