<template>
    <div class="card" id="card">
        <img class="card-img-top" :src="song.strTrackThumb" alt="Card image cap">
        <div class="card-body" id="card-body">
            <h6 class="card-title">{{ song.strTrack }}</h6>
            <p> Artist : {{ song.strArtist }} </p>
            <span class> Album : {{ song.strAlbum }} </span>
</template>

<script>
export default {
    name : "card",
    props : ['song']
}
</script>


<style>
    #card {
        background-color:transparent;
        width: 200px;
        height: 200px;
        font-size: 10px;
        padding: 0;
        margin-right: 20px;
        margin-bottom: 120px;

    }

    #card-body{
        padding: 15px 0 0 0;
    }
</style>