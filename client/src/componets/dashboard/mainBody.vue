<template>

    <div class="row">
        <div class="col-2" id="sidebar">
            <button class="btn btn-block btn-primary" @click.prevent="homeBtn"><i class="fas fa-home icon" ></i> home </button>
            <button class="btn btn-block btn-primary" @click.prevent="playlistBtn"> <i class="fas fa-music icon"></i> playlist </button>
        </div>
        <div class="col-9">
            <section v-if="displayPage=='home'">
                <homeTab></homeTab>
            </section>
            <section v-if="displayPage=='playlist'">
                <playlist></playlist>
            </section>
        </div>
    </div>
  
</template>

<script>
import playlist from './Playlist'
import homeTab from './homeTab'
import axios from 'axios'

export default {
    name : "mainBody",
    data() {
        return {
            displayPage:'home',
            baseUrl : 'http://localhost:3000'
        }
    },
    components : {
        playlist,
        homeTab
    },
    methods : {
        playlistBtn(){
            this.displayPage = 'playlist'
            axios({
                method : 'get',
                url : this.baseUrl+'/playlist'
            })
            .then(result=>{
                console.log(result)
            })
            .catch(err=>{
                console.log(err)
            })

        },
        homeBtn(){
            this.displayPage = 'home'
        }
    }
}
</script>

<style>

#sidebar {
    margin-top: 20px;
}

#sidebar button {
    background-color: transparent;
    border: none;
}
#sidebar button:focus {
    outline: none;
    box-shadow: none;
    border-left: 10px solid #ff004cff;
}

.icon {
    font-size: 20px;
    margin-right: 15px;
}

</style>