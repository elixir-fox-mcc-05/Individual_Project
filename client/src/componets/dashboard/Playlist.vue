<template>
  <div id="playlistCover">
      <br>
      <div class="row" id="playlistHeader">
          <div class="col-6">
                <h3>Playlist</h3>
          </div>
          <div class="col-4">
              <input id="playlistInput" v-model="title" type="text" class="form-control" placeholder="Playlist Title">
          </div>
          <div class="2">
              
              <button class="btn btn-outline-light" @click.prevent="addPlaylist">
                  Create Playlist
              </button>
          </div>
      </div>
      <div class="row" v-for="playlist in playlistData" :key="playlist.id">
          <div class="col-4"> {{ playlist.name }} </div> <hr>
      </div>
      <div v-if="playlistData.length==0" id="noPlaylist">
          <h6 class="display-4"> 
              you don't have any playlist
          </h6>
      </div>
  </div>
</template>

<script>
import playlistCard from './playlistCard'
import Axios from 'axios'
export default {
    name : "playlist",
    props : ['playlistData'],
    data() {
        return {
            title : '',
        }
    },
    components : {
        playlistCard
    },
    methods : {
        addPlaylist() {
            Axios({
                method : 'post',
                url : 'http://localhost:3000/playlist',
                data : {
                    name : this.title
                },
                headers : {
                    token : localStorage.getItem('token')
                }
            })
            .then(result=>{
                this.playlistBtn()
                this.title = ''
                console.log(result)
            })
            .catch(err=>{
                console.log(err)
            })
        },

        playlistBtn() {
            this.$emit('playlistBtn')
        }
    }
}
</script>

<style>
#playlistCover{
    padding: 0 0 0 30px;
    background-color: rgb(15, 15, 15);
    height: 90vh;
}

#playlistInput {
    background: transparent;
    border: none;
    border-bottom:1px solid gray  ;
    color: whitesmoke;
}

#playlistInput:focus {
    border-bottom:1px solid #ff004cff  ;
    box-shadow: none;
}

#noPlaylist {
    margin-top:250px ;
    text-align: center;
    color: gray;
}
</style>