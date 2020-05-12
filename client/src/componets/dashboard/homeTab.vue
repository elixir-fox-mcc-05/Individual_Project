<template>
    <div id="main">
        <br> <h3>Top 50 Songs</h3> 
        <div class="section" id="mfy">
            <div id="cardbox" v-for="song in songs" :key="song.id">
                <card
                :song="song"
                ></card>
            </div>
        </div>
    </div>
</template>

<script>
import card from './card'
export default {
    name : "homeTab",
    props : ['songs'],
    components : {
        card,
    }
}
</script>

<style>


h3 {
    border-bottom: 1px solid gray;
    padding-bottom:5px ;
}

#cardbox {
    display: flex;
    flex-direction: row;
}

#main {
    background-color: rgb(15, 15, 15);
    height: 90vh;
    overflow: scroll;
    padding-left: 30px;
}

.section {
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    overflow: scroll;
}

</style>