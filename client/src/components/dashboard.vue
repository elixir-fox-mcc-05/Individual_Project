<template>
  <div style="background-image: url(https://wallpaperaccess.com/full/121177.jpg); background-position:fixed; background-size:initial; color:white;">
    <modal name="Message">
      <div v-if="messageSucces" style="height:100%;color:white;background-image:url(https://images-cdn.9gag.com/photo/aWE0pN4_460s.jpg); size: 500px !important; background-position:center;display:flex; flex-direction:column; align-items:center">
        {{messageSucces}} <br>
        <button @click.prevent="closeModal">Close</button>
      </div>
    </modal>
    <div v-if="currentPage === 'home'" style="display:flexbox !important; flex-direction:row !important;" class="container">
      <h1 style="padding-left:15px;">Welcome to Anime List</h1>
        <div v-for="top in topList" :key=top.id>
          <div id="card" style="padding-left:15px ; width:30% !important;">
            <ul class="card text-white bg-dark"  style=" background-color:inherit !important; ">
              <li><img class="card-img-top" :src="top.image_url" style="width:200px; height:200px; align-self:center;">
              <card :top="top"
                    @addWatchList="addWatchList"
                    :messageSucces="messageSucces"></card>  
              </li>
            </ul>
          </div>
        </div>
    </div>
    <div v-if="currentPage === 'genre'" style="width:100%">
      <div v-for="top in topList" :key=top.id style="display:flexbox !important; flex-direction:row !important;">
        <div id="card" style="padding-left:15px ; width:30% !important;">
          <ul class="card text-white bg-dark"  style=" background-color:inherit !important; ">
            <img class="card-img-top" :src="top.image_url" style="width:200px; height:200px; align-self:center;">
            <card :top="top"></card>  
          </ul>
        </div>
      </div>
    </div>
    <div v-if="currentPage === 'userHome'" style="width:100%">
      <div v-for="top in userList" :key=top.id style="display:flexbox !important; flex-direction:row !important;">
        <div id="card" style="padding-left:15px ; width:30% !important;">
          <ul class="card text-white bg-dark"  style=" background-color:inherit !important; ">
            <img class="card-img-top" :src="top.image_url" style="width:200px; height:200px; align-self:center;">
            <userList :top="top"
                  @watched="watched"
                  @remove="remove"></userList>  
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "./card"
import userList from "./userList"
export default {
    name : "dashboard",
    components : {
      card, userList
    },
    props : ["user", "topList", "currentPage", "userList", "messageSucces"],
    methods : {
      addWatchList(data){
        this.$emit("addWatchList", data)
        this.$modal.show("Message")
      },
      closeModal(){
        this.$modal.hide("Message")
      },
      watched(data){
        this.$emit("watched", data)
      },
      remove(data){
        this.$emit("remove", data)
      }
    }
}
</script>

<style>

</style>