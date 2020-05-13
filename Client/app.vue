<template>
  <div>
      <landing @showmain="loginsucces" v-if="!islogin"></landing>
      <main-page :datameals="mealsData" v-else @logout="logout" @random="fetchMeal" @search="searchmeals"></main-page>
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
				url:"https://g-meals.herokuapp.com/"
			})
			.then(result=>{	
                result.data.data.meals.forEach(element =>{
                    element.videoId = getIdFromURL(element.strYoutube)
                    })
                this.mealsData = result.data.data.meals
                             
                })            
			.catch(err=>{
				Vue.toasted.global.my_app_error({
                    message : 'random meals fails'                   
                });
				
			})
        },
        searchmeals(name) {
            console.log('APP',name);
            
            axios({
				method:"GET",
                url:"https://g-meals.herokuapp.com/findall/"+name,
                
			})
			.then(result=>{	
                result.data.data.meals.forEach(element =>{
                    element.videoId = getIdFromURL(element.strYoutube)
                    })
                this.mealsData = result.data.data.meals                             
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